export default class Adress{
    constructor(state, street, number){
        this.state = state,
        this.street = street,
        this.number = number
    }
}

export function fullAdress({state, street, number } = Adress){
    console.log(`State: ${state} Street: ${street} Number: ${number}`);
}