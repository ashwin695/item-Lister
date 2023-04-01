var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newDescription = document.getElementById('desc1').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';

  // Create new span element for item name
  var itemName = document.createElement('span');
  // Add text node with input value
  itemName.appendChild(document.createTextNode(newItem));
  // Append span to li
  li.appendChild(itemName);

  //Create new span element for item desc
  var itemDesc = document.createElement('span');
  // Add class
  itemDesc.className = 'ml-2 text-muted';
  // Add text node with input value
  itemDesc.appendChild(document.createTextNode(newDescription));
  // Append span to li
  li.appendChild(itemDesc);


  // Create del button element
  var deleteBtn = document.createElement('button');
  var editBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editBtn.className = 'btn btn-primary btn-sm float-right mr-2 edit';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('Delete'));
  editBtn.appendChild(document.createTextNode('Edit'));

  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}