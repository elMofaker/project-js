let names = ['jo' , 'ali', 'gaml'];
let ages =['18 years old' ,'20 years old' ,'9 years old'];
let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center';

function elements(ages , names){

let card = document.createElement('div');
let title = document.createElement('h1');
let par = document.createElement('p');
let img = document.createElement('img');



img.style.width = '200px';
card.style.background = '#666';
card.style.padding = '20px';
card.style.display = 'inline-block';
card.style.margin = '5px';

let head = document.createTextNode(names);
let age = document.createTextNode(ages);
img.src = '/img/pepo1 (3).png';


title.appendChild(head);
par.appendChild(age);



card.appendChild(title);
card.appendChild(par);
card.appendChild(img);
container.appendChild(card);
    



}

for(let i = 0 ; i < 100; i++){
    elements(ages[i],names[i]);
}