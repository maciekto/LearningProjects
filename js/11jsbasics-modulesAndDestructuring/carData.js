export class CarData {
    constructor(height, width, weight, model, number){
        this.height = height,
        this.width = width,
        this.weight = weight,
        this.model = model,
        this.number = number
    }
    
}
function GiveNumberAndModel({number, model} = CarData){
    console.log(`${number} ${model}`);
}
function GiveWeight({ weight }= CarData){
    console.log(weight);
}
export { GiveNumberAndModel, GiveWeight } ;