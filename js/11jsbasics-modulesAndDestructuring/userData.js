export default class UserData {
    constructor(name, surename, age){
        this.name = name,
        this.surename = surename,
        this.age = age

    }
}

export function WriteNameAndSurename({ name, surename }){
    console.log(`${name} ${surename}`);
}
export function Age({age}){

    console.log(`${age}`);
}