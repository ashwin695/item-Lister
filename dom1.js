var itemList = document.querySelector('#items')

itemList.parentNode.style.backgroundColor = "#f4f4f4"
itemList.parentElement.style.backgroundColor = "#f4f4f4"

itemList.children[1].style.backgroundColor = "yellow"

itemList.firstElementChild.textContent = "Hello 1"
itemList.lastElementChild.textContent = "Hello 4"

itemList.previousElementSibling.style.color = "green"

var newDiv = document.createElement('div')
newDiv.className = "hello"
newDiv.id = "hello1"
newDiv.setAttribute('title', 'Hello Div')

var newDivText = document.createTextNode('Hello World')
newDiv.appendChild(newDivText)

var container = document.querySelector('header .container')
var h1 = document.querySelector('header h1')

newDiv.style.fontSize = '30px'

container.insertBefore(newDiv, h1)




var newLi = document.createElement('li')
newLi.className = "hello"
newLi.id = "hello1"
newLi.setAttribute('title', 'Hello Div')

var newLiText = document.createTextNode('Hello World')
newLi.appendChild(newLiText)

var containerLi = document.querySelector('header')
var item = containerLi.nextElementSibling.firstElementChild.firstElementChild
var item1 = item.nextElementSibling.nextElementSibling.nextElementSibling
var h2 = document.querySelector('ul li')


containerLi.insertBefore(newLi, h2)

