package cn.tycoding.service.impl;

import cn.tycoding.entity.CompilationBean;
import cn.tycoding.service.CompilationService;
import org.springframework.stereotype.Service;

import java.lang.management.CompilationMXBean;
import java.lang.management.ManagementFactory;

/**
 * @author tycoding
 * @date 2019-05-10
 */
@Service
public class CompilationServiceImpl implements CompilationService {

    @Override
    public CompilationBean get() {
        return init();
    }

    private CompilationBean init() {
        CompilationBean bean = new CompilationBean();
        CompilationMXBean compilationMXBean = ManagementFactory.getCompilationMXBean();
        bean.setName(compilationMXBean.getName());
        bean.setTotalTime(compilationMXBean.getTotalCompilationTime());
        bean.setIsSupport(compilationMXBean.isCompilationTimeMonitoringSupported());
        return bean;
    }
}
