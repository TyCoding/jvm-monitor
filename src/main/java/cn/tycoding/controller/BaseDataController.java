package cn.tycoding.controller;

import cn.tycoding.service.*;
import cn.tycoding.utils.ResultCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author tycoding
 * @date 2019-05-10
 */
@RestController
public class BaseDataController {

    @Autowired
    private ClassLoaderService classLoaderService;

    @GetMapping("/class/get")
    public ResultCode getClassLoader() {
        try {
            return new ResultCode(200, classLoaderService.get());
        } catch (Exception e) {
            e.printStackTrace();
            return new ResultCode(500, e.getMessage());
        }
    }

    @Autowired
    private CompilationService compilationService;

    @GetMapping("/compilation/get")
    public ResultCode getCompilation() {
        try {
            return new ResultCode(200, compilationService.get());
        } catch (Exception e) {
            e.printStackTrace();
            return new ResultCode(500, e.getMessage());
        }
    }

    @Autowired
    private MemoryService memoryService;

    @GetMapping("/memory/get")
    public ResultCode getMemory() {
        try {
            return new ResultCode(200, memoryService.get());
        } catch (Exception e) {
            e.printStackTrace();
            return new ResultCode(500, e.getMessage());
        }
    }

    @Autowired
    private RuntimeInfoService runtimeInfoService;

    @GetMapping("/runtime/get")
    public ResultCode getRuntimeInfo() {
        try {
            return new ResultCode(200, runtimeInfoService.get());
        } catch (Exception e) {
            e.printStackTrace();
            return new ResultCode(500, e.getMessage());
        }
    }

    @Autowired
    private SystemInfoService systemInfoService;

    @GetMapping("/system/get")
    public ResultCode getSystemInfo() {
        try {
            return new ResultCode(200, systemInfoService.get());
        } catch (Exception e) {
            e.printStackTrace();
            return new ResultCode(500, e.getMessage());
        }
    }

    @Autowired
    private ThreadInfoService threadInfoService;

    @GetMapping("/thread/get")
    public ResultCode getThreadInfo() {
        try {
            return new ResultCode(200, threadInfoService.get());
        } catch (Exception e) {
            e.printStackTrace();
            return new ResultCode(500, e.getMessage());
        }
    }

    @Autowired
    private GarbageCollectorService garbageCollectorService;

    @GetMapping("/gc/get")
    public ResultCode getGC() {
        try {
            return new ResultCode(200, garbageCollectorService.get());
        } catch (Exception e) {
            e.printStackTrace();
            return new ResultCode(500, e.getMessage());
        }
    }

    @GetMapping("/gc/getPools")
    public ResultCode getGCPools() {
        try {
            return new ResultCode(200, garbageCollectorService.getPools());
        } catch (Exception e) {
            e.printStackTrace();
            return new ResultCode(500, e.getMessage());
        }
    }
}
