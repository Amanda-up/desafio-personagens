class hero{
    constructor(name, age, tipe, attack){
        this.name = name
        this.age = age
        this.tipe = tipe
        this.attack = attack
    }

    atacar(){
        console.log(`- O ${this.tipe} atacou usando ${this.attack}`)
    }
    
}

let heroes = new hero("Capitão", "32", "guerreiro")
let heroes1 = new hero("Doutor Estranho", "28", "mago")
let heroes2 = new hero("Diablo 3", "75", "monge")
let heroes3 = new hero("Tartarugas", "22", "ninja")


heroes.attack = "espada"
heroes1.attack = "magia"
heroes2.attack = "artes marciais"
heroes3.attack = "shuriken"


heroes.atacar()
heroes1.atacar()
heroes2.atacar()
heroes3.atacar()

