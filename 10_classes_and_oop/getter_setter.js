class User{
    constructor(email, password){
        this.password = password
        this.email = email
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const anmol = new User("anmol@n.ai", "123c")

console.log(anmol.password);
console.log(anmol.email);