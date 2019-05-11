package cn.tycoding.entity;

import lombok.Data;

import java.io.Serializable;

/**
 * 类加载数据
 *
 * @author tycoding
 * @date 2019-05-10
 */
@Data
public class ClassLoaderBean implements Serializable {

    /**
     * 主键
     */
    private Long id;

    /**
     * JVM加载类的数量
     */
    private Integer count;

    /**
     * JVM已加载类数量
     */
    private Long loaded;

    /**
     * JVM未加载类数量
     */
    private Long unLoaded;

    /**
     * 是否启用类加载详细信息的输出
     */
    private Boolean isVerbose;
}
