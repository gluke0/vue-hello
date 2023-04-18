const { createApp } = Vue

createApp({
    data() {
      return {
        message: "Ciao, Hello, Hola Vue!",
        randomImage:  "https://picsum.photos/200/300"
      }
    },
}).mount('#app')