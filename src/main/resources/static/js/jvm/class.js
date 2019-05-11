// Vue实例
let app = new Vue({
    el: '#app',
    data: {
        defaultActive: '类加载监控',
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
            this.$http.get(api.jvm.class.get).then(response => {
                if (response.body.code == 200) {
                    Highcharts.chart('class-count', {
                        chart: {
                            events: {
                                load: function () {
                                    var series = this.series[0];
                                    setInterval(function () {
                                        $this.$http.get(api.jvm.class.get).then(response => {
                                            if (response.body.code == 200) {
                                                var data = response.body.data;
                                                var x = (new Date()).getTime(),
                                                    y = data.count;
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
                            text: "JVM 加载类总数量",
                        },
                        series: [{
                            name: "JVM 加载类总数量",
                            data: (function () {
                                var data = [], time = (new Date()).getTime(), i;
                                for (i = -19; i <= 0; i += 1) {
                                    data.push({
                                        x: time + i * 1000,
                                        y: Math.random()
                                    });
                                }
                                return data;
                            }())
                        }]
                    });
                    Highcharts.chart('class-unLoaded', {
                        chart: {
                            events: {
                                load: function () {
                                    var series = this.series[0];
                                    setInterval(function () {
                                        $this.$http.get(api.jvm.class.get).then(response => {
                                            if (response.body.code == 200) {
                                                var data = response.body.data;
                                                var x = (new Date()).getTime(), y = data.unLoaded;
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
                            text: "JVM 未加载类数量",
                        },
                        series: [{
                            name: "JVM 未加载类数量",
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
                    Highcharts.chart('class-loaded', {
                        chart: {
                            events: {
                                load: function () {
                                    var series = this.series[0];
                                    setInterval(function () {
                                        $this.$http.get(api.jvm.class.get).then(response => {
                                            if (response.body.code == 200) {
                                                var data = response.body.data;
                                                var x = (new Date()).getTime(), y = data.loaded;
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
                            text: "JVM 已加载类数量",
                        },
                        series: [{
                            name: "JVM 已加载类数量",
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
    yAxis: {
        title: {
            text: "单位/个"
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: "#808080"
        }]
    },
    global: { useUTC: false },
    legend: {
        enabled: false
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
