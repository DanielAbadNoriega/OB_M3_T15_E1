let name = "Daniel";
let surname = "Abad";

let person = {
  name: name,
  surname: surname,
};

//Session Storage
/* sessionStorage.setItem("person", JSON.stringify(person));
console.log(JSON.parse(sessionStorage.getItem("person"))); */

//Local Storage
/* localStorage.setItem("person", JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem("person"))); */

/* 
If you want remove:
//Session Storage
sessionStorage.removeItem("person");

//Local Storage
localStorage.removeItem("person");
*/
let fecha = Date.now();
let cookieExpiration = new Date(fecha + ((60 *2) * 1000));
//document.cookie = `person = ${JSON.stringify(person)};expires= ${cookieExpiration}`;
//console.log(document.cookie);
