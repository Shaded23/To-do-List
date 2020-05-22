const addToDo = document.getElementById('add-todo');

addToDo.addEventListener('click', () => {
	console.log('I have been clicked 0.0');
});

const listItems = document.getElementsByClassName('todo');
for (let i = 0; i < listItems.length; i++) {
	listItems[i].addEventListener('click', (event) => {
		const item = event.target;

		if (item.style.textDecoration === 'line-through') {
			item.style.textDecoration = 'none';
		} else {
			item.style.textDecoration = 'line-through';
			// item.style.display = 'none';
		}
	});
}
