// Vue实例
let app = new Vue({
    el: '#app',
    data: {
        defaultActive: '概述',
        data: {},
        loading: true,
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
            this.loading = true;
            this.$http.get(api.jvm.runtime.get).then(response => {
                this.data = response.body.data;
                this.loading = false;
            })
        },
        strFormat(value) {
            return value.replace(/[;:]/g, "<br/>");
        },
        dateFormat(millisecond) {
            if (millisecond != undefined) {
                return (new Date(millisecond).toLocaleDateString()) + " " + (new Date(millisecond).toTimeString());
            }
        }
    },
});
