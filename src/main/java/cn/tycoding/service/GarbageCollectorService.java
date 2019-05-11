package cn.tycoding.service;

import cn.tycoding.entity.MemoryPoolBean;

import java.util.List;

/**
 * @author tycoding
 * @date 2019-05-11
 */
public interface GarbageCollectorService {

    Object get();

    List<MemoryPoolBean> getPools();
}
