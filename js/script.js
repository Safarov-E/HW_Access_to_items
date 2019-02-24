let menu = document.querySelector('.menu'),
 	li = document.createElement('li'),
 	title = document.querySelector('.title'),
 	adv = document.querySelector('.adv'),
 	column = document.querySelectorAll('.column'),
 	prompt_1 = document.querySelector('.prompt'),
 	prompt_2 = prompt('Что вы думаете о технике apple?', '');  
 

 // prompt = document.getElementById('prompt'),
//  prompt1 = prompt('Как вы относитесь к технике apple ?', '');


 	 

li.classList.add("menu-item");
li.textContent = "Пятый Пункт";
menu.insertBefore(li, menu[0]);

 document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';
title.textContent = "Мы продаем только подлинную технику Apple";
column[1].removeChild(adv);

prompt_1.innerHTML = `<h1>${prompt_2}</h1>`;

 