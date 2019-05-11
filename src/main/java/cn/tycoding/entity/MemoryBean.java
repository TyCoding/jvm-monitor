package cn.tycoding.entity;

import lombok.Data;

import java.io.Serializable;

/**
 * 堆内存信息
 *
 * @author tycoding
 * @date 2019-05-10
 */
@Data
public class MemoryBean implements Serializable {

    /**
     * 已申请的堆内存
     */
    private Long committed;

    /**
     * JVM初始化堆占用的内存总量
     */
    private Long init;

    /**
     * JVM提供可用于内存管理的最大内存量
     */
    private Long max;

    /**
     * 内存区已使用空间大小（字节）
     */
    private Long used;

    /**
     * 已申请的非堆内存大小
     */
    private Long nonCommitted;

    /**
     * JVM初始化非堆区占用的内存总量
     */
    private Long nonInit;

    /**
     * JVM提供可用于非堆内存区管理的最大内存量
     */
    private Long nonMax;

    /**
     * JVM非堆内存区已使用空间大小（字节）
     */
    private Long nonUsed;
}
