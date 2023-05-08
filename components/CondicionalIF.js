let CondicionalIf = {
  template: `<div>
            <h6 v-text="title"></h6>
            <p>
            <label for="name">edad</label>
            <input
              id="edad"
              v-model="edad"
              type="text"
              name="edad"
            >
          </p>
            <button @click.stop.prevent="comprobar">Conprobar edad</button> 
 


            edad <span v-text="edad"></span> </p>
        </div>
        `,
  data() {
    return {
      title: "condiconal if else",
      edad: 19,
      emit: "disco",
    };
  },
  methods: {
    comprobar() {
      if (this.edad > 18) {
        return alert(`es mayor tiene  ${this.edad} años puede ingresar`);
      }
      if ((this.edad < 18) & (this.edad > 10)) {
        return alert(`es menor de edad solo tiene  ${this.edad} años`);
      }
      if (this.edad < 11) {
        return alert(`${this.edad}  es  un menor infante`);
      }
    },
  },
};
