let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  //
  //DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the `#main-title` ID element. Remember there are a couple of ways to query **id**. Change the **text** of the title to something shorter.
 function changetitle(){
   const title = document.querySelector("#main-title");
   title.innerHTML = "Hi,Iam Tom!!!"
 }
   changetitle()

  // Part 2
  //Select the `body` and change the background-color to a new color of your choice.
function changebody(){
  document.body.style.backgroundColor = 'yellow';
}
  changebody()
  // Part 3
  //Select **DOM's Favorite Things** list and remove the last list item.
  //create function
  
  function removeFavThings(){
    // select the element favorite-things
  const list = document.getElementById('favorite-things');
  //select the last child list by using .lastElementChild

  const lastChild = list.lastElementChild;
  //use .removechild to remove the above mentioned'lastchild'
  list.removeChild(lastChild)

}
  removeFavThings()

  // Part 4
  //Select all `.special-title` class elements and change their `font-size` to `2rem`. Remember you might have to iterate through the list of elements
 
  

  function changeFont(){
    let font = document.querySelectorAll('.special-title');
    font.forEach(element => { element.style.fontSize = "2rem"
      
    });
  }

  changeFont()
  // Part 5
  //Turns out DOM never raced in **Chicago**. Access the **Past Races** list and remove **Chicago**.
  function removeChicago(){

    var past = document.getElementById("past-races");
    let a = document.querySelectorAll('li');
    a.forEach(element=> {
      if(element.innerHTML == 'Chicago') {
        past.removeChild(element);
      }})
    }
    removeChicago()



    //trial 3 passing:
    //past.removeChild(past.childNodes[7]);
    
    
    //trial 2
    // const remove = past.children[3]
    // past.removeChild(remove);
    //trial 1
    // past.forEach(element=> {
    // if(element.innerHTML == 'Chicago') past.removeChild(past.childNodes(element))})
  
  
// Part 6
//Let's add to DOM's **Past Races** list. Create a new `<li>` element, change the new `<li>` text to the name of a city, and append it to the **Past Races** list.
function addList(){
  let list = document.getElementById("past-races");
  var z = document.createElement('li');
  z.innerHTML = 'Chennai'
  list.appendChild(z);
}
  addList()
  


// Part 7
//Create a new `.blog-post` corresponding to the new city added in **Part 6**. You will have to create a new `<div>` with class of `.blog-post`, a new `<h1>` with text, and a new `<p>` with some text. Make the new element consistent with the other posts. Think about what order you want to create the elements, and what order you want to append them in.

function addDiv(){
  let div = document.querySelector('.main')
  let newDiv = document.createElement('div');
  newDiv.className = 'blog-post purple';
  
  var newH = document.createElement('h1');
  newH.innerText = 'Chennai';
  
  
  var newP = document.createElement('p');
  newP.innerText = 'I PARKED MY CAR IN THE MIDDLE OF RANGANATHAN STREET!!!'
  newDiv.appendChild(newH);
  newDiv.appendChild(newP);
  div.appendChild(newDiv);
}
  addDiv()



  
  // beforebegin - The HTML would be placed immediately before the element, as a sibling.
  // afterbegin - The HTML would be placed inside the element, before its first child.
  // beforeend - The HTML would be placed inside the element, after its last child.
  // afterend - The HTML would be placed immediately after the element, as a sibling.


}