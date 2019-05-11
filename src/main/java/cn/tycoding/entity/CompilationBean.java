package cn.tycoding.entity;

import lombok.Data;

import java.io.Serializable;

/**
 * 编译信息
 *
 * @author tycoding
 * @date 2019-05-10
 */
@Data
public class CompilationBean implements Serializable {

    /**
     * 主键
     */
    private Long id;

    /**
     * 即时（JIT）编译器名称
     */
    private String name;

    /**
     * 总编译时间（毫秒）
     */
    private Long totalTime;

    /**
     * JVM是否支持对编译时间的监视
     */
    private Boolean isSupport;
}
