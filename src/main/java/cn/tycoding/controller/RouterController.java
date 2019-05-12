package cn.tycoding.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @author tycoding
 * @date 2019-05-10
 */
@Controller
public class RouterController {

    /**
     * 首页
     *
     * @return
     */
    @GetMapping({"/", "/index"})
    public String index() {
        return "index";
    }

    /**
     * 概述页
     *
     * @return
     */
    @GetMapping("/overview")
    public String overview() {
        return "jvm/overview";
    }

    /**
     * 类加载监控页
     *
     * @return
     */
    @GetMapping("/class")
    public String monitor() {
        return "jvm/class";
    }

    /**
     * GC监控页
     *
     * @return
     */
    @GetMapping("/gc")
    public String gc() {
        return "jvm/gc";
    }

    /**
     * 内存监控页
     *
     * @return
     */
    @GetMapping("/memory")
    public String memory() {
        return "jvm/memory";
    }

    /**
     * 线程监控页
     *
     * @return
     */
    @GetMapping("/thread")
    public String thread() {
        return "jvm/thread";
    }
}
