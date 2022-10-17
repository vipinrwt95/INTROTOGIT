//examining document object//
//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title='Hello World';
//console.log(document.forms);

//let headertitle=document.getElementById('header-title');
//let header=document.getElementById('main-header');
//let title=document.getElementById('main');
//let title2=document.getElementsByClassName("title")
//console.log(headertitle.textContent);
//document.getElementById('header-title').innerText="SUPRERMO";
//title2[0].innerHTML='<h2><b>Add Items</b></h2>';
//title2[0].style.color="green";
//let items=document.getElementsByClassName("list-group-item")
//items[2].style.backgroundColor='green';
//for(i=0;i<items.length;i++)
//{
  // items[i].style.fontWeight="900"; 
//}
//let item=document.getElementsByTagName("li")
//let itemlist=document.getElementsByClassName("list-group-item")
//console.log(itemlist);
//console.log(itemlist[1])
//item[4].textContent="Changed li";
//let item = document.querySelectorAll('li');
//item[1].style.backgroundColor='green';
//let odd=document.querySelectorAll('li:nth-child(odd)');
//for(let i=0;i<odd.length;i++)
//{
//  odd[i].style.backgroundColor='green';
//}

let itemlist=document.querySelector('#items')
//console.log(itemlist.parentNode);
//itemlist.parentNode.style.backgroundColor='blue';
//console.log(itemlist.parentNode.parentNode)

//console.log(itemlist.parentNode.parentNode.parentNode)
//console.log(itemlist.parentElement);

//console.log(itemlist.childNodes);
//console.log(itemlist.children);
//itemlist.children[4].style.backgroundColor='yellow';
//first child
//console.log(itemlist.firstChild);--this includes empty text as well
//console.log(itemlist.firstElementChild)
//itemlist.firstElementChild.textContent="yooo";

//last child
//console.log(itemlist.lastChild);
//console.log(itemlist.lastElementChild);

//siblings

//console.log(itemlist.nextSibling);
//console.log(itemlist.nextElementSibling);

//console.log(itemlist.previousSibling);
//console.log(itemlist.previousElementSibling);
//itemlist.previousElementSibling.style.backgroundColor="grey";

// create element
// creating a div
let newDiv=document.createElement('div')
//adding class
newDiv.className='hello';
//adding id
newDiv.id='hello1';

//newDiv.setAttribute('id','hello1');
//add attr
newDiv.setAttribute('title','Hello div');

//creating a text node
let newDivtext=document.createTextNode('HELLO WORLD');

//adding this text to div

newDiv.appendChild(newDivtext);


let container=document.querySelector('header .container')
let h1=document.querySelector('header h1');

//console.log(newDiv); 

container.insertBefore(newDiv,h1);
let newele = document.getElementsByClassName('hello');
//console.log(newele);
newele[0].style.backgroundColor="pink"; 
//console.log(container);

// adding element; hello world
let newElement=document.createElement('h2');
newElement.id="newelemeent";
newElement.className="newelement";
newElement.setAttribute('title','new');

let newElementtext=document.createTextNode('hello world');

newElement.appendChild(newElementtext);
//console.log(newElement);

let target=document.querySelector('div .list-group');
let target2=document.querySelector('ul li');
console.log(target);
console.log(target2);
target.insertBefore(newElement,target2);




