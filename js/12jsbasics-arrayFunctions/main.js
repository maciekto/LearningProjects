 const hair = 'HEHEHHE';
 
 // Arrow functions
class Doma{
    constructor(hair, nails, eye){
        this.hair = hair,
        this.nails = nails,
        this.eye = eye
    }
    Arrow(){
        setTimeout(()=>{
            console.log(this.hair);
        },11)
    }
    getDoma(){
        setTimeout(function(){
            console.log(this.hair);
        },11)
    }
}
const DOMA = new Doma('black', 'not done', 'beautiful');

 

DOMA.Arrow(); // arrow function takes her context in 'this' keyword
DOMA.getDoma(); // normal function takes global context as 'this' keyword so its undefined
console.log(this.hair);


