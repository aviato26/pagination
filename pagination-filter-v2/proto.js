// declare all the elements we will need to build our list and elements to append to
const list = document.querySelectorAll('li');
const div = document.createElement('div');
const parentUl = document.querySelector('ul');
const ul = document.createElement('ul');
div.className = 'pagination';
parentUl.append(div);
div.append(ul);

// this self envoking function fires automatically and hides all the list items except the first ten
(function(){
  list.forEach((c,i) => {
    let firstTen = (i < 10) ? c.style.display = 'block' : c.style.display = 'none';
    return firstTen;
  })
})();

// this function takes the length of a list and sections it into arrays of no more than 10 items each
let splicedList = (list) => {
  const arr = [...list];
  let splicedArr = [];
  while(arr.length){
    splicedArr.push(arr.splice(0,10))
  }
  return splicedArr
}

// a function that will append a li and a element for every item in our splicedArr
let showButtons = (cb) => {
  let filteredArr = cb(list);
  for(let i = 1; i <= filteredArr.length; i++){
    ul.insertAdjacentHTML('beforeend', `<li><a href=#>${i}</a></li>`);
  }
  return filteredArr;
}
showButtons(splicedList)

// this resetList function will reset our list to diplay none when we invoke it in the event listener
const resetList = () => {
  list.forEach(c => c.style.display = 'none');
}

/* this function will set our a elements with the active class name and also apply a event listener on the elements
so the class name and the spliced array holding our items of no more than 10 can be selected dynamically */
let showPage = (cb) => {
  let a = document.querySelectorAll('a');
  a[0].className = 'active';
  let buttons = cb(list);
  buttons.forEach((c,i) => {
    a[i].addEventListener('click', function(e){
      let current = document.getElementsByClassName('active');
      current[0].className = current[0].className.replace('active', '');
      this.className += 'active';
      resetList();
      c.forEach((c,i) => {
        c.style.display = 'block';
      })

    })
  })
}
showPage(splicedList)
