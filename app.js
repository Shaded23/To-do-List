const addToDo = document.getElementById('add-todo');

addToDo.addEventListener('click', () => {
	console.log('I have been clicked 0.0');
});

//you cannot use foreach over a node list
const listItems = document.querySelectorAll('li');
console.log(listItems);
listItems.forEach((item) => {
	console.log('1: ', item);
	item.addEventListener('click', () => {
		console.log('item clicked');
	});
});

const listItems2 = document.getElementsByClassName('todo');
for (let i = 0; i < listItems2.length; i++) {
	console.log('2: ', listItems2[i]);
	listItems2[i].addEventListener('click', () => {
		console.log('item clicked 2');
	});
}
