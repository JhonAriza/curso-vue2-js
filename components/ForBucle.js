
let ForBucle = {
    template: `<div>
            <h1 v-text="tii"></h1>

            <li v-for="(item, key, index ) in numerouno" :key="index">
            {{  key }}: {{ item }}
           </li>
        `,
    data () {
        return {
            tii: 'el orden del componente daña el comportamiento de la directiva ' ,
            numerouno:22,
            numero2:1,
        }
    } ,   
}