// Holds value from input of todo list
document.getElementById('add').addEventListener('click', function() {
	var value = document.getElementById('item').value;
	if (value) addItemTodo(value);
	document.getElementById('item').value = '';
});


// Adds new tasks to list
function addItemTodo(text) {

	var list = document.getElementById('todoContainer');

	var item = document.createElement('div');
	item.classList.add('row-text');

	var img = document.createElement('img');
	img.src = '/img/Checkbox.png';
	img.classList.add('box');
// Click event for check tasks
	img.addEventListener('click', checkTask);

	var lines = document.createElement('div');
	lines.classList.add('lines');

	var task = document.createElement('p');
	task.innerText = text;

	var imgTrash = document.createElement('img');
	imgTrash.src = '/img/trash.png';
	imgTrash.classList.add('trash');
// Click event for removing tasks
	imgTrash.addEventListener('click', removeItem);

	list.appendChild(item);
	item.appendChild(img);
	item.appendChild(lines);
	item.appendChild(task);
	item.appendChild(imgTrash);
};

// Remove tasks from list
function removeItem(){
	var item = this.parentNode;
	var parent = this.parentNode.parentNode;

	parent.removeChild(item);
};

// Check task

function checkTask(){

var item = this.parentNode;
var img = document.createElement('img');
img.classList.add('checked');
img.src = '/img/ok.png';
item.appendChild(img);
}