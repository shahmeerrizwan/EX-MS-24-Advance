// What is TypeScript ?

// ) TypeScript is a programing language develops by microsoft that enhances the capability of JavaScript by INtroducing Static typing & others features.



 // *) TypeScript use for Dynamic Work 

 // TypeScript mai hum sabki type Define krke code likhte hain .
 // TypeScript mai Agr hum "any" ka keyword use karaingai tou sari type restriction khatam ho jaingi type ki . 
 /*

 FOR VARIABLES :
 
 jese k humne 1 variable banaya or oski type number hai tou tou wo number hi rahegi hum oski type update nhi kr sakhte 
 
 Example ;
 
 let a = 124;  // type is number
 a="shahmeer"  // error aiga q k humne upper variable mai number likha hai ab wo variable ki default type number ho gai .

 a = 567; // Correct only numbers can be updated
 
 console.log(a)
 
 
 Aesi hi hum agr variable initialize krte time oski value string rakhain tou oski default type string hi rahegi
 oski type ko hum number se replace nhi kr sakhte 
 
 */

/*

FOR ARRAY

Array mai bhi yehi seen hai jis type ka array hoga wohi type ka data hum push kr sakhte hain 

Example ;

let arr = [1,2,3,4,5]; // type = number ab hum isme number hi push kr sakhte hain

Syntax For Array :

// TypeScript mai Or k sign ki jaga ye lagega " | " 

let arr:(string | number)[]=["shah",2,"meer",3,"Rizwan","4"] // ab is array mai hum string or number bhi add kr sakhte hain

console.log(arr);

*/



/*

OBJECT IN TS

SYNTAX ;

type objType={  // humne jo inki type initialize kari hai bss wohi put krwa sakhte data mai dusri data type mai error aiga 
    id:number,
    name:string,
    age:number
}
let obj:objType = {
    id:10,
    name:"shahmeer",
    age:18
};


*/


/*

FUNCTIONS;

type of void = void;

let a =()=>{
    // iski type hai void
}
a();


let func = (a,b)=>{
console.log(a,b)
}
func();  // ERROR AIGA BECZ HUMNE ISKO PARAMETER PASS NHI KIYE JO K ZARORI HAI    // WRONG 
func("shah",18); // CORRECT



Function Mai Parameter :

let abc = (a:string,b?:number)=>{  // ? ISKA MTLB YE OPTIONAL HAI ISKI VALUE DE BHI SAKHTE HAIN NHI BHI ERROR NHI AIGA
    console.log(a,b)
}
abc("shah") // CORRECT


NOTE : FIRST PARAMETER HUM OPTIONAL NHI DE SAKHTE SECOND DE SAKHTE HAIN AGR FIRST PARAMETER OPTIONAL DAINGAI TOU ERROR AIGA
*/

