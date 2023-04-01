var headerTitle = document.getElementById('header-title')
var addItem = document.getElementById('add-item')
var item3 = document.getElementById('item-3')
var items = document.getElementById('items')
//console.log(headerTitle)
headerTitle.style.border = '2px solid #000'
headerTitle.style.padding = '10px'

addItem.style.color = 'green'
addItem.style.fontWeight = 'bold'

item3.style.backgroundColor = "green"
item3.style.color = "#fff"

items.style.fontWeight = "800"

for(var i = 0; i < items.length; i++)
{
    items[i].style.backgroundColor = "green"
}

/* var item = document.querySelector('.list-group-item:nth-child(2)')
item.style.backgroundColor = "green"
item.style.color = "white"

var thirdItem = document.querySelector('.list-group-item:nth-child(3)')
thirdItem.style.visibility = "hidden" */

var secondElement = document.querySelectorAll('.list-group-item')
secondElement[1].style.color = "green";

var odd = document.querySelectorAll('li:nth-child(odd)')

for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = "green"
}