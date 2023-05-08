Vue.component('hello-world', {
    template:`<header>
                <h1>{{ title }}</h1>
                <h3>{{ message }}</h3>
                <p>{{cancion}} </p>
                <h6>{{numero}}<h6>
            </header>  
                `,
    data() {
        return {
            title: 'Hola Munfgfgfgdo',
            message: 'Bienvenido al curso de Vuejs',
            cancion: 'desde my niño sleeped to much dinner',
            numero: '1121212'
        }
    }
})



