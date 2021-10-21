let enterEventCount = 0;
let leaveEventCount = 0;
let pressClickCount = 0;
const mouseTarget = document.getElementById('button');
const unorderedList = document.getElementById('text-here');
const output = document.getElementById('output');

output.addEventListener('onclick', e =>{
    pressClickCount++;
    addClickItem('I was pressed! ');
});


mouseTarget.addEventListener('mouseenter', e => {
  enterEventCount++;
  addListItem('Mouse on me! ');
});

mouseTarget.addEventListener('mouseleave', e => {
  leaveEventCount++;
  addListItem('Mouse is not on me! ');
});


function addListItem(text) {
  let newTextNode = document.createTextNode(text);

  let newListItem = document.createElement("p");


  newListItem.appendChild(newTextNode);

  unorderedList.appendChild(newListItem);
}
