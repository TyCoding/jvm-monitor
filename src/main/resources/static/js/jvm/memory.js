// Vue实例
let app = new Vue({
    el: '#app',
    data: {
        defaultActive: '内存监控',
        memory: {},
    },
    created() {
        this.init(); //初始化
    },
    mounted() {
        this.$refs.loader.style.display = 'none';
    },
    methods: {
        _notify(message, type) {
            this.$message({
                message: message,
                type: type
            })
        },
        /**
         * 初始化
         */
        init() {
            let $this = this;
            this.$http.get(api.jvm.memory.get).then(response => {
                if (response.body.code == 200) {
                    Highcharts.chart('heap-commit', {
                        chart: {
                            events: {
                                load: function () {
                                    var series = this.series[0];
                                    setInterval(function () {
                                        $this.$http.get(api.jvm.memory.get).then(response => {
                                            if (response.body.code == 200) {
                                                var data = response.body.data;
                                                var x = (new Date()).getTime(), y = (data.committed / 1024 / 1024);
                                                series.addPoint([x, y], true, true);
                                            } else {
                                                this._notify(response.body.data, 'error')
                                            }
                                        })
                                    }, 6e3);
                                }
                            }
                        },
                        title: {
                            text: "堆区已申请内存大小（Heap）",
                        },
                        legend: {
                            enabled: false
                        },
                        series: [{
                            name: "堆区已申请内存大小（Heap）",
                            data: function () {
                                var data = [], time = new Date().getTime(), i;
                                for (i = -19; i <= 0; i++) {
                                    data.push({
                                        x: time + i * 1e3,
                                        y: 0
                                    });
                                }
                                return data;
                            }()
                        }]
                    });
                    Highcharts.chart('heap-used', {
                        chart: {
                            events: {
                                load: function () {
                                    var series = this.series[0];
                                    setInterval(function () {
                                        $this.$http.get(api.jvm.memory.get).then(response => {
                                            if (response.body.code == 200) {
                                                var data = response.body.data;
                                                var x = (new Date()).getTime(), y = (data.used / 1024 / 1024);
                                                series.addPoint([x, y], true, true);
                                            } else {
                                                this._notify(response.body.data, 'error')
                                            }
                                        })
                                    }, 6e3);
                                }
                            }
                        },
                        title: {
                            text: "堆区已使用内存大小（Heap）",
                        },
                        legend: {
                            enabled: false
                        },
                        series: [{
                            name: "堆区已使用内存大小（Heap）",
                            data: function () {
                                var data = [], time = new Date().getTime(), i;
                                for (i = -19; i <= 0; i++) {
                                    data.push({
                                        x: time + i * 1e3,
                                        y: 0
                                    });
                                }
                                return data;
                            }()
                        }]
                    });
                    Highcharts.chart('nonheap-commit', {
                        chart: {
                            events: {
                                load: function () {
                                    var series = this.series[0];
                                    setInterval(function () {
                                        $this.$http.get(api.jvm.memory.get).then(response => {
                                            if (response.body.code == 200) {
                                                var data = response.body.data;
                                                var x = (new Date()).getTime(), y = (data.nonCommitted / 1024 / 1024);
                                                series.addPoint([x, y], true, true);
                                            } else {
                                                this._notify(response.body.data, 'error')
                                            }
                                        })
                                    }, 6e3);
                                }
                            }
                        },
                        title: {
                            text: "非堆已申请内存大小（NonHeap）",
                        },
                        legend: {
                            enabled: false
                        },
                        series: [{
                            name: "非堆区已申请内存大小（NonHeap）",
                            data: function () {
                                var data = [], time = new Date().getTime(), i;
                                for (i = -19; i <= 0; i++) {
                                    data.push({
                                        x: time + i * 1e3,
                                        y: 0
                                    });
                                }
                                return data;
                            }()
                        }]
                    });
                    Highcharts.chart('nonheap-used', {
                        chart: {
                            events: {
                                load: function () {
                                    var series = this.series[0];
                                    setInterval(function () {
                                        $this.$http.get(api.jvm.memory.get).then(response => {
                                            if (response.body.code == 200) {
                                                var data = response.body.data;
                                                var x = (new Date()).getTime(), y = (data.nonUsed / 1024 / 1024);
                                                series.addPoint([x, y], true, true);
                                            } else {
                                                this._notify(response.body.data, 'error')
                                            }
                                        })
                                    }, 6e3);
                                }
                            }
                        },
                        title: {
                            text: "非堆区已使用内存大小（NonHeap）",
                        },
                        legend: {
                            enabled: false
                        },
                        series: [{
                            name: "非堆区已使用内存大小（NonHeap）",
                            data: function () {
                                var data = [], time = new Date().getTime(), i;
                                for (i = -19; i <= 0; i++) {
                                    data.push({
                                        x: time + i * 1e3,
                                        y: 0
                                    });
                                }
                                return data;
                            }()
                        }]
                    });
                } else {
                    this._notify(response.body.data, 'error');
                }
            })
            this.$http.get(api.jvm.gc.getPools).then(response => {
                if (response.body.code == 200) {
                    let data = [];
                    response.body.data.forEach(bean => {
                        let obj = {
                            name: bean.name,
                            data: function () {
                                var data = [], time = new Date().getTime(), i;
                                for (i = -19; i <= 0; i++) {
                                    data.push({
                                        x: time + i * 1e3,
                                        y: 0
                                    });
                                }
                                return data;
                            }()
                        }
                        data.push(obj)
                    })
                    Highcharts.chart('pools-commit', {
                        chart: {
                            events: {
                                load: function () {
                                    var series = this.series[0];
                                    var series1 = this.series[1];
                                    var series2 = this.series[2];
                                    var series3 = this.series[3];
                                    var series4 = this.series[4];
                                    var series5 = this.series[5];
                                    setInterval(function () {
                                        $this.$http.get(api.jvm.gc.getPools).then(response => {
                                            if (response.body.code == 200) {
                                                var data = response.body.data[0];
                                                var x = (new Date()).getTime(), y = (data.committed / 1024 / 1024);
                                                series.addPoint([x, y], true, true);

                                                var data1 = response.body.data[1];
                                                var x1 = (new Date()).getTime(), y1 = (data1.committed / 1024 / 1024);
                                                series1.addPoint([x1, y1], true, true);

                                                var data2 = response.body.data[2];
                                                var x2 = (new Date()).getTime(), y2 = (data2.committed / 1024 / 1024);
                                                series2.addPoint([x2, y2], true, true);

                                                var data3 = response.body.data[3];
                                                var x3 = (new Date()).getTime(), y3 = (data3.committed / 1024 / 1024);
                                                series3.addPoint([x3, y3], true, true);

                                                var data4 = response.body.data[4];
                                                var x4 = (new Date()).getTime(), y4 = (data4.committed / 1024 / 1024);
                                                series4.addPoint([x4, y4], true, true);

                                                var data5 = response.body.data[5];
                                                var x5 = (new Date()).getTime(), y5 = (data5.committed / 1024 / 1024);
                                                series5.addPoint([x5, y5], true, true);
                                            } else {
                                                this._notify(response.body.data, 'error')
                                            }
                                        })
                                    }, 6e3);
                                }
                            }
                        },
                        title: {
                            text: "各内存区监控（已申请内存）",
                        },
                        series: data,
                    });
                    Highcharts.chart('pools-used', {
                        chart: {
                            events: {
                                load: function () {
                                    var series = this.series[0];
                                    var series1 = this.series[1];
                                    var series2 = this.series[2];
                                    var series3 = this.series[3];
                                    var series4 = this.series[4];
                                    var series5 = this.series[5];
                                    setInterval(function () {
                                        $this.$http.get(api.jvm.gc.getPools).then(response => {
                                            if (response.body.code == 200) {
                                                var data = response.body.data[0];
                                                var x = (new Date()).getTime(), y = (data.used / 1024 / 1024);
                                                series.addPoint([x, y], true, true);

                                                var data1 = response.body.data[1];
                                                var x1 = (new Date()).getTime(), y1 = (data1.used / 1024 / 1024);
                                                series1.addPoint([x1, y1], true, true);

                                                var data2 = response.body.data[2];
                                                var x2 = (new Date()).getTime(), y2 = (data2.used / 1024 / 1024);
                                                series2.addPoint([x2, y2], true, true);

                                                var data3 = response.body.data[3];
                                                var x3 = (new Date()).getTime(), y3 = (data3.used / 1024 / 1024);
                                                series3.addPoint([x3, y3], true, true);

                                                var data4 = response.body.data[4];
                                                var x4 = (new Date()).getTime(), y4 = (data4.used / 1024 / 1024);
                                                series4.addPoint([x4, y4], true, true);

                                                var data5 = response.body.data[5];
                                                var x5 = (new Date()).getTime(), y5 = (data5.used / 1024 / 1024);
                                                series5.addPoint([x5, y5], true, true);
                                            } else {
                                                this._notify(response.body.data, 'error')
                                            }
                                        })
                                    }, 6e3);
                                }
                            }
                        },
                        title: {
                            text: "各内存区监控（已使用内存）",
                        },
                        series: data,
                    });
                } else {
                    this._notify(response.body.data, 'error');
                }
            })
        },
    },
});
Highcharts.setOptions({
    chart: {
        type: "spline",
        animation: Highcharts.svg,
        marginRight: 10,
    },
    title: {
        style: {
            "font-size": "1.2rem"
        }
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
    },
    global: { useUTC: false },
    yAxis: {
        title: {
            text: "单位/Mb"
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: "#808080"
        }]
    },
    plotOptions: {
        line: {
            dataLabels: {
                // 开启数据标签
                enabled: true
            },
            // 关闭鼠标跟踪，对应的提示框、点击事件会失效
            enableMouseTracking: false
        }
    },
    tooltip: {
        formatter: function () {
            return "<b>" + this.series.name + "</b><br/>" + Highcharts.dateFormat("%Y-%m-%d %H:%M:%S", this.x) + "<br/>" + Highcharts.numberFormat(this.y, 2) + "Mb";
        }
    },
});