package cn.tycoding.service.impl;

import cn.tycoding.entity.MemoryPoolBean;
import cn.tycoding.service.GarbageCollectorService;
import org.springframework.stereotype.Service;

import java.lang.management.ManagementFactory;
import java.lang.management.MemoryPoolMXBean;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * @author tycoding
 * @date 2019-05-11
 */
@Service
public class GarbageCollectorServiceImpl implements GarbageCollectorService {

    @Override
    public Object get() {
        List<MemoryPoolMXBean> memoryPoolMXBeans = ManagementFactory.getMemoryPoolMXBeans();
        return ManagementFactory.getGarbageCollectorMXBeans();
    }

    @Override
    public List<MemoryPoolBean> getPools() {
        List<MemoryPoolBean> list = new ArrayList<>();
        List<MemoryPoolMXBean> memoryPoolMXBeans = ManagementFactory.getMemoryPoolMXBeans();
        memoryPoolMXBeans.forEach(bean -> {
            MemoryPoolBean poolBean = new MemoryPoolBean();
            poolBean.setName(bean.getName());
            poolBean.setManageNames(Arrays.toString(bean.getMemoryManagerNames()));
            poolBean.setUsed(bean.getUsage().getUsed());
            poolBean.setMax(bean.getUsage().getMax());
            poolBean.setCommitted(bean.getUsage().getCommitted());
            list.add(poolBean);
        });
        return list;
    }
}
