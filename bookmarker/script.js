const urlInput = document.querySelector('.url');
const titleInput = document.querySelector('.title');
const btn = document.querySelector('.bookmark-btn');
const list = document.querySelector('.output-list');

btn.addEventListener('click', addToList);
document.addEventListener('DOMContentLoaded', loadFromLocalStorage);
list.addEventListener('click', deleteItem);
list.addEventListener('click', editItem);

// to add a new bookmark or edit an existing bookmark
function addToList(e) {
	e.preventDefault();
	let url = urlInput.value;
	let title = titleInput.value;
	let editedItem = document.querySelector('.marker');
	
	// for a new item
	if(!editedItem) {
		if(url != '' && title != '') {
			// creating the item
			let li = document.createElement('li');
			let a = document.createElement('a');
			a.setAttribute('href', url);
			a.setAttribute('target', '_blank');
			a.textContent = title;
			li.appendChild(a);
			
			// adding the edit and delete button to the item
			let edit = document.createElement('div');
			let cross = document.createElement('div');
			edit.textContent = "Edit";
			cross.textContent = "X";
			edit.setAttribute('class', 'edit');
			cross.setAttribute('class', 'cross');
			li.appendChild(edit);
			li.appendChild(cross);
			
			list.appendChild(li);
			//saveToLocalStorage(li);
			urlInput.value = '';
			titleInput.value = '';
		}	
	}
	// for an edited item
	else {
		console.log(editedItem);
		editedItem.firstChild.textContent = title;
		editedItem.firstChild.setAttribute("href", url);
		// removing the marker class after editing
		editedItem.classList.remove('marker');
		urlInput.value = '';
		titleInput.value = '';
	}
	
}

function saveToLocalStorage(li) {
	let storageItems = getFromLocalStorage();
	// Issue - unable to save the li node to the storageItems array in the line below
	storageItems.push(li);
	localStorage.setItem('bookmarks', JSON.stringify(storageItems));
}

// get an empty array or the array stored in local storage
function getFromLocalStorage() {
	let items = localStorage.getItem('bookmarks');
	if(items == null) {
		items = [];
	}
	else {
		items = JSON.parse(items);
	}
	return items;
}

function loadFromLocalStorage() {
	let items = JSON.parse(localStorage.getItem('bookmarks'));
	if(items != null) {
		console.log(items);
	}
	
}

function deleteItem(e) {
	if(e.target.classList.contains('cross')) {
		e.target.parentElement.remove();
	}
}

function editItem(e) {
	if(e.target.classList.contains('edit')) {
		let element = e.target.parentElement;
		let text = e.target.parentElement.textContent;
		let url = e.target.parentElement.firstChild.getAttribute('href');
		
		// add a 'marker' class to the edited element
		element.setAttribute('class', 'marker')
		urlInput.value = url;
		
		// remove the last 5 characters(EditX) from the text and show it in the input box
		titleInput.value = text.slice(0, text.length-5);
	}
}

function updateItem(e) {
	e.preventDefault();
	let editedItem = document.querySelector('.marker');
	if(editedItem) {
		url = urlInput.value;
		title = titleInput.value;
	}

}