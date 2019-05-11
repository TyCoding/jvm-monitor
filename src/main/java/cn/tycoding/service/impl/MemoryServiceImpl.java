package cn.tycoding.service.impl;

import cn.tycoding.entity.MemoryBean;
import cn.tycoding.service.MemoryService;
import org.springframework.stereotype.Service;

import java.lang.management.ManagementFactory;
import java.lang.management.MemoryMXBean;
import java.lang.management.MemoryUsage;

/**
 * @author tycoding
 * @date 2019-05-10
 */
@Service
public class MemoryServiceImpl implements MemoryService {

    @Override
    public MemoryBean get() {
        return init();
    }

    private MemoryBean init() {
        MemoryBean bean = new MemoryBean();
        MemoryMXBean memoryMXBean = ManagementFactory.getMemoryMXBean();
        MemoryUsage heapMemoryUsage = memoryMXBean.getHeapMemoryUsage();
        MemoryUsage nonHeapMemoryUsage = memoryMXBean.getNonHeapMemoryUsage();
        bean.setCommitted(heapMemoryUsage.getCommitted());
        bean.setInit(heapMemoryUsage.getInit());
        bean.setMax(heapMemoryUsage.getMax());
        bean.setUsed(heapMemoryUsage.getUsed());
        bean.setNonCommitted(nonHeapMemoryUsage.getCommitted());
        bean.setNonInit(nonHeapMemoryUsage.getInit());
        bean.setNonMax(nonHeapMemoryUsage.getMax());
        bean.setNonUsed(nonHeapMemoryUsage.getUsed());
        return bean;
    }
}
