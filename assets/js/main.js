const { createApp } = Vue

createApp({
    data() {
        return {
            message: "Ciao, Hello, Hola Vue!",
            randomImage:  "https://picsum.photos/200/300",
            color: "black",
            filter: "blurred"
        }
    },
    methods:{
        changeColor(){
            if ( this.color == "black") {
                this.color = "red"
            } else {
                this.color = "black"
            }
        },
        removeFilter(){
            if ( this.filter == "blurred") {
                this.filter = "noblurred"
            } else {
                this.filter = "blurred"
            }
        },
    }
}).mount('#app')