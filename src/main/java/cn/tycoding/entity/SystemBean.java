package cn.tycoding.entity;

import lombok.Data;

import java.io.Serializable;

/**
 * 操作系统信息
 *
 * @author tycoding
 * @date 2019-05-10
 */
@Data
public class SystemBean implements Serializable {

    /**
     * 主键
     */
    private Long id;

    /**
     * 操作系统名称
     */
    private String name;

    /**
     * 操作系统进程数量
     */
    private Integer processCount;

    /**
     * 操作系统架构
     */
    private String osArchName;

    /**
     * 操作系统负载平均值
     */
    private Double loadAverage;

    /**
     * 操作系统版本号
     */
    private String version;
}
