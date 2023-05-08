
let DirectiveHtml = {
    template: `<div>
    <p v-text="parrafo">
            <h1 v-text="title"></h1>
            <h4 v-text="pais"></h4>
            <h3 v-text="planeta"> </h3>
            <p v-html="message"></p>
            <p v-html="'<b>'+ejemplojs+'</b>'"></p>
        </div>
        `,
    data () {
        return {
            parrafo:'v- si {{}} con las llaves se pude mostrar',
            title: 'Directiva v-html',
            message: '<b>Hola desde directiddve html</b>',
            ejemplojs:'ejemplo como en js concatenando',
            pais:'colombia',
            planeta:"marte"
        }
    },
}