
let DirectiveOn = {
    template:`<header>
    <p v-show="mostrar" >  </p>
                <h1 v-text="title"></h1>
                <p v-text="message"></p>
                <p v-text="pelicula"></p>
                <button @click.stop.prevent="comprarEntrada">Comprar entrada</button> 
                <button @click.stop.prevent="quitarEntradas">Borrar entradas</button> 
                <input type="text" @keydown="decirHola" />
                <p v-show="entradas">
                disponibles <span v-text="entradas"></span> </p>
                <p v-show="!entradas">
                
                </p>

                <button @click.stop.prevent="agregarEntradas">+++++++++crear mas entradas+++++++</button> 


                <div>
                    <h1>Modificando Vista y Modelo</h1>
                    <input type="text" :value="textInput" @keyup="updateDataTextInput">
                </div>
            </header>  
                `,
    data() {
        return { 
                 mostrar: true,
            title: 'Directiva v-on',
            message: 'Hola desde directiva v-on',
            welcome_text: 'Bienvenido desde la data',
            exa: 'demaciada demanda',
            pelicula: 'Dora la exploradora',
            entradas:10,
 
            textInput: 'Valor por defecto del input text',
   
        }
    },
    methods: {
        updateDataTextInput (event) {
            this.textInput = event.target.value
        },
        decirHola () {
            alert(this.welcome_text)
        },agregarEntradas(){
            if(this.entradas) {
                this.entradas++
      
            } if (this.entradas =10) {
                alert(this.exa)
            }
        },
        quitarEntradas(){
            if(this.entradas){
                this.entradas--
            }
        },
        comprarEntrada () {
            if(this.entradas > 0) {
                this.entradas--
                return alert(`Entrada para ${this.pelicula} comprada`)
            } 
            return alert('Ya no hay entradas')
        },
        
    }
}