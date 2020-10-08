class Usuarios {
    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {
        let persona = {
            id,
            nombre,
            sala
        }
        this.personas.push(persona);
        return this.personas;
    }

    getPersona(id) {
        //ESTA FUNCIÓN ES ÚTIL PARA BUSCAR A UNA PERSONA POR SU ID
        let persona = this.personas.filter(persona => {
            return persona.id === id;
        })[0];
        return persona;
    }

    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(persona => {
            return persona.sala === sala;
        });
        return personasEnSala;
    }

    borrarPersona(id) {
        let personaBorrada = this.getPersona(id);
        //ESTA FUNCION VA A REGRESAR EL ARREGLO SIN EL ID ENVIADO Y LO ASIGNA DE NUEVO A PERSONAS
        this.personas = this.personas.filter(persona => {
            return persona.id != id
        });

        return personaBorrada;
    }
}

module.exports = {
    Usuarios
}