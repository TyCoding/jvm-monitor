// Vue实例
let app = new Vue({
    el: '#app',
    data: {
        defaultActive: '首页',
        data: {}
    },
    created() {
        this.init(); //初始化
    },
    mounted() {
        this.$refs.loader.style.display = 'none';
    },
    methods: {
        /**
         * 初始化
         */
        init() {
            this.$http.get(api.jvm.runtime.get).then(response => {
                this.data = response.body.data;
            })
        },
    },
});
