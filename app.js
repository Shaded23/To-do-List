//adds items to end of jsToDoWrapper
const addToDoBtn = document.getElementById('js-add-todo');
addToDoBtn.addEventListener('click', function () {
	const li = document.createElement('li');
	li.className = 'js-todo todo base-s';
	li.textContent = 'new item';

	const jsToDoWrapper = document.getElementById('js-todo-wrapper');
	jsToDoWrapper.append(li);
});

//removes last item from jsToDoWrapper
const rmToDoBtn = document.getElementById('js-rm-todo');
rmToDoBtn.addEventListener('click', function () {
	const listItems = document.getElementsByClassName('js-todo');

	if (listItems.length >= 1) {
		listItems[listItems.length - 1].remove();
	}
});

//toggles line-through of list item
const jsToDoWrapper = document.getElementById('js-todo-wrapper');
jsToDoWrapper.addEventListener('click', (event) => {
	if (event.target.style.textDecoration === 'line-through') {
		event.target.style.textDecoration = 'none';
	} else {
		event.target.style.textDecoration = 'line-through';
	}
});
