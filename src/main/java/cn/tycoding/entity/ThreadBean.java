package cn.tycoding.entity;

import lombok.Data;

import java.io.Serializable;

/**
 * 线程信息
 *
 * @author tycoding
 * @date 2019-05-10
 */
@Data
public class ThreadBean implements Serializable {

    /**
     * 主键
     */
    private Long id;

    /**
     * 当前线程执行时间（纳秒）
     */
    private Long currentTime;

    /**
     * 当前守护线程数量
     */
    private Integer daemonCount;

    /**
     * 当前线程总数量（包括守护线程和非守护线程）
     */
    private Integer count;
}
