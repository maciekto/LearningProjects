import UserData, {WriteNameAndSurename as FullName, Age} from '/userData.js';
import { CarData, GiveNumberAndModel, GiveWeight } from '/carData.js';
import Adress, { fullAdress as yourAdress} from '/adressData.js';


const user1 = new UserData('Dominika','Głuszkowska',20);
const user2 = new UserData('Maciej','Tomaszewski',20);
console.log(user1);
FullName(user2);
Age(user2);

const car1 = new CarData(50, 40, 2, 'Porshe', 78543);

console.log(car1);
GiveNumberAndModel(car1);
GiveWeight(car1);

const adress1 = new Adress('Sialalala', 'Sialolo', 16);

yourAdress(adress1);
