const person = {fname: 'john durairaj', id:'professor', age:43 , location:'chennai'};
let text ='';
for(let x in person){
    text += person[x] +" " + "<br>"
}
document.getElementById("para").innerHTML=text 
