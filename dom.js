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

//let itemlist=document.querySelector('#items')
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
/*let newDiv=document.createElement('div')
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
target.insertBefore(newElement,target2);*/


//adding EDIT button 













/*form.addEventListener('submit',addItem);

//adding item function

function addItem(e)
{
  e.preventDefault();
  //GET Input value
  let newitem=document.getElementById('item').value; 
  if(newitem=="")
  { 
    alert("fill item please")
    return;
  }
  
  //create new li items
  let li=document.createElement('li')
  //add class
  li.className='list-group-item';
  console.log(li);
  // add textnode with input value
  li.appendChild(document.createTextNode(newitem));
  // create delete button element
  let delbutton=document.createElement('button');
  let editbutton=document.createElement('button2');

  //add classe to del button
   
  delbutton.className='btn btn-danger btn-sm float-right delete'; 
  editbutton.className="buuutton";
  //APPEND TEXT NODE

  delbutton.appendChild(document.createTextNode('x'));
  editbutton.appendChild(document.createTextNode('EDIT'));

  //append button to li
  li.appendChild(delbutton);
  li.appendChild(editbutton)

  //append li to list
  itemlist.appendChild(li); 
}

//delete event
//removing last child when clicked on delete button

//itemlist.addEventListener('click',removeItem)

function removeItem(e)
{
  if(e.target.classList.contains('delete'))
  {
    if(confirm('Are you sure'))
    {
      let last=itemlist.lastElementChild;
      //console.log(li);
      itemlist.removeChild(last);
    }
    
  }

} */

// adding one more box for adding description of item;
let desctarget=document.querySelectorAll('#addForm');
let desc = document.createElement('input');
let submit=document.querySelector('.btn btn-dark');
desc.id="description";
desc.className="form-control mr-2";
//console.log(desctarget);


const list1 = document.getElementById("addForm");
let target=list1.lastElementChild;
//console.log(list1);
//console.log(desctarget);
list1.insertBefore(desc,target)

//adding text to list and adding description below the item on list;

let form=document.getElementById('addForm');
let itemlist=document.getElementById('items');

form.addEventListener('submit',addItem)

function addItem(e)
{ // PREVENTING DEFAULT
  e.preventDefault();

  // COLLECTING VALUE OF INPUT ELEMENT

  let newitem=document.getElementById('item').value;
  
  let desc = document.getElementById('description').value;

  if(newitem==""||desc=="")
  {
    alert("fill both");
  }

  // after filling both add these to list which will be displayed
  let del=document.createElement('button')
  let li=document.createElement('li')
  let info=document.createElement('text')
  //add class
  li.className='list-group-item';
  //console.log(li);
  info.className='info';

  del.className='btn btn-danger btn-sm float-right delete';
  // add textnode with input value
  li.appendChild(document.createTextNode(newitem));
  info.appendChild(document.createTextNode(desc));
  del.appendChild(document.createTextNode('x'))

  
  let itemlist=document.querySelector('#items');

  itemlist.appendChild(li);
  itemlist.appendChild(li).appendChild(del)
  itemlist.appendChild(info);
  
}

let search = document.getElementById('filter');
search.addEventListener('keyup',searchitem)

function searchitem(e)
{
   let word=e.target.value.toLowerCase();
  console.log(word);
  let itemlist=document.querySelector('#items');

  let items=itemlist.getElementsByTagName('li')
  let desc=itemlist.getElementsByClassName('info');
  
  Array.from(items).forEach(function(item)
  {
    let itemname=item.firstChild.textContent;

   if(itemname.toLowerCase().indexOf(word)!=-1)
   {
    item.style.display='block';
   }
   else
   item.style.display='none';
  }); 
 Array.from(desc).forEach(function(item)
{
let description=item.firstChild.textContent;

if(description.toLowerCase().indexOf(word)!=-1)
{
  item.style.display="block";
}
else item.style.display="none";

});


}













