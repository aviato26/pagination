const people = document.querySelectorAll('h3');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');
const search = document.createElement("input");
const inputParent = document.querySelector('.page-header');
inputParent.appendChild(search);
let arr = [];

const listOfPeople = () => {
  for(x in people){
    if(typeof people[x].innerHTML === "string"){
      arr.push(people[x].innerHTML);
    }
  }
  return arr;
}

listOfPeople();

const buttonList = () => {
  for(x in li){
    let pages = parseInt(x) % 10;
    if(typeof li[x] === "object" && li[x].style.display === "block"){
        
    }
  }
}

search.addEventListener('keyup', (e) => {
    const person = e.target.value;
    arr.map((c,i) => {
      if(c.indexOf(person) > -1){
        li[i].style.display = "block";
      }
      else {
        li[i].style.display = "none";
        }
      }
    )
    buttonList();
  }
)
