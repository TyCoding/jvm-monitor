package cn.tycoding.entity;

import lombok.Data;

import java.io.Serializable;

/**
 * JVM垃圾回收信息
 *
 * @author tycoding
 * @date 2019-05-10
 */
@Data
public class GarbageCollectorBean implements Serializable {

    /**
     * GC回收次数
     */
    private Long count;

    /**
     * GC回收耗时
     */
    private Long time;
}
