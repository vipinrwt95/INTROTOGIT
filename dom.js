//examining document object//
//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title='Hello World';
//console.log(document.forms);

let headertitle=document.getElementById('header-title');
let header=document.getElementById('main-header');
let title=document.getElementById('main');
let title2=document.getElementsByClassName("title")
//console.log(headertitle.textContent);
//document.getElementById('header-title').innerText="SUPRERMO";
title2[0].innerHTML='<h2><b>Add Items</b></h2>';
title2[0].style.color="green";
let items=document.getElementsByClassName("list-group-item")
items[2].style.backgroundColor='green';
for(i=0;i<items.length;i++)
{
   items[i].style.fontWeight="900"; 
}