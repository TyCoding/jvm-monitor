package cn.tycoding.entity;

import cn.tycoding.utils.JSONTemplate;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * JVM运行时信息
 *
 * @author tycoding
 * @date 2019-05-10
 */
@Data
public class RuntimeBean implements Serializable {

    /**
     * 主机
     */
    private String host;

    /**
     * JVM
     */
    private String jvm;

    /**
     * JDK版本
     */
    private String version;

    /**
     * JDK 路径
     */
    private String home;

    /**
     * 当前JVM参数信息
     */
    private List<String> args;

    /**
     * JVM开始启动的时间（毫秒）
     */
    private Long startTime;

    /**
     * JSON格式化后系统详细参数
     */
    private List<JSONTemplate> properties;
}
