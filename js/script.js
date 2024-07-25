const { createApp } = Vue

createApp({
    data() {
        return {
            random_mail: []
        }
    },
    created(){
        this.generate_random_mail();
    },
    methods: {
        generate_random_mail(){
            this.random_mail = []
            for (let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
                    this.random_mail.push(resp.data.response)
                });
            }
        }
    }
}).mount('#app');