const person = {fname: 'john durairaj', id:'professor', age:43 , location:'chennai'};
let text ='';
for(let x in person){
    text += person[x] +" " + "<br>"
}
document.getElementById("para").innerHTML=text;




//for each

const numbers =[20,30,40,50];
let text1 ="";
numbers.forEach(myFunction);
document.getElementById("para").innerHTML=text;
function myFunction(value, index, array){
    text += value + "<br>"
}

