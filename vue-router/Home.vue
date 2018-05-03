
// Home.vue
export default {
    computed: {
        username() {
            // 我们很快就会看到 `params` 是什么
            return this.$route.params.username
        }
    },
    methods: {
        goBack() {
            window.history.length > 1 ?
                this.$router.go(-1) :
                this.$router.push('/')
        }
    }
}
// 现在，应用已经启动了！