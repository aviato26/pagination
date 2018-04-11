const people = document.querySelectorAll('h3');
const search = document.createElement("input");
const inputParent = document.querySelector('.page-header');
inputParent.appendChild(search);
let person;
let arr = [];

const listOfPeople = () => {
  let one;
for(x in people){
  if(typeof people[x].innerHTML === "string"){
    one = people[x].innerHTML;
    arr.push(one);
  }
}
return arr;
}

console.log(listOfPeople())

search.addEventListener('keyup', (e) => {
    person = e.target.value;
    console.log(listOfPeople().indexOf(person))
})
