let moment = require("moment");

let myDate = new Date();
let myCoolDate = moment(myDate).format('LL');

console.log(myCoolDate);