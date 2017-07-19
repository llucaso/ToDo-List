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

	var checkbox = document.createElement('input');
	checkbox.type = ('checkbox');
	checkbox.value = ('None');
	checkbox.classList.add('fancy-checkbox');
	checkbox.id = ('fancy-checkbox');
	checkbox.name = ('fancy-checkbox');
	var checkbox2 = document.createElement('label');
	checkbox2.classList.add('fancy-checkbox-label');
	checkbox2.setAttribute = ('for', 'fancy-checkbox');
// Click event for check tasks
	//checkbox.addEventListener('click', checkTask);

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
	item.appendChild(checkbox);
	item.appendChild(checkbox2);
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

//function checkTask(){

// var item = this.parentNode;
// var img = document.createElement('img');
// img.classList.add('checked');
// img.src = '/img/ok.png';
//item.appendChild(img);
//}