// GLOBAL VARIABLES
const urlInput = document.querySelector('.url');
const titleInput = document.querySelector('.title');
const btn = document.querySelector('.bookmark-btn');
const list = document.querySelector('.output-list');

// EVENT LISTENERS
btn.addEventListener('click', addToList);
document.addEventListener('DOMContentLoaded', loadFromLocalStorage);
list.addEventListener('click', deleteItem);
list.addEventListener('click', editItem);

// FUNCTIONS
// to add a new bookmark or edit an existing bookmark
function addToList(e) {
	e.preventDefault();
	let url = urlInput.value;
	let title = titleInput.value;
	let editedItem = document.querySelector('.marker');
	
	// for a new item
	if(!editedItem) {
		if(url != '' && title != '') {
			showListItem(url, title);
			
			saveToLocalStorage(url, title);
			urlInput.value = '';
			titleInput.value = '';
		}	
	}
	// for an edited item
	else {
		// make changes to the local storage
		let tempTitle = editedItem.firstChild.textContent;
		let storageUrls = getFromLocalStorage('url');
		let storageTitles = getFromLocalStorage('title');
		let index = storageTitles.indexOf(tempTitle);
		storageTitles[index] = title;
		storageUrls[index] = url;
		localStorage.setItem('url', JSON.stringify(storageUrls));
		localStorage.setItem('title', JSON.stringify(storageTitles));
		
		// make changes to the DOM
		editedItem.firstChild.textContent = title;
		editedItem.firstChild.setAttribute("href", url);
		
		// removing the marker class after editing
		editedItem.classList.remove('marker');
		urlInput.value = '';
		titleInput.value = '';
	}
}

function showListItem(url, title) {
	// creating the list item
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
}

function saveToLocalStorage(url, title) {
	let storageItemsUrl = getFromLocalStorage('url');
	let storageItemsTitle = getFromLocalStorage('title');
	storageItemsUrl.push(url);
	storageItemsTitle.push(title);
	localStorage.setItem('url', JSON.stringify(storageItemsUrl));
	localStorage.setItem('title', JSON.stringify(storageItemsTitle));
}

// get an empty array (for the very first item) or the array stored in local storage
function getFromLocalStorage(item) {
	let items = localStorage.getItem(item);
	if(items == null) {
		items = [];
	}
	else {
		items = JSON.parse(items);
	}
	return items;
}

function loadFromLocalStorage() {
	let url = JSON.parse(localStorage.getItem('url'));
	let title = JSON.parse(localStorage.getItem('title'));
	if(url.length != 0 && url.length != 0) {
		for(let i = 0; i < url.length; i++) {
			showListItem(url[i], title[i]);
		}	
	}	
}

function deleteItem(e) {
	if(e.target.classList.contains('cross')) {
		let title = e.target.parentElement.firstChild.textContent;
		let url = e.target.parentElement.firstChild.getAttribute('href');
		removeFromLocalStorage(url, title);
		e.target.parentElement.remove();
	}
}

function removeFromLocalStorage(url, title) {
	let storageUrls = getFromLocalStorage('url');
	let storageTitles = getFromLocalStorage('title');
	
	// modifing the above arrays to remove the clicked content (title and url)
	storageUrls.splice(storageUrls.indexOf(url), 1);
	storageTitles.splice(storageTitles.indexOf(title), 1);
	
	localStorage.setItem('url', JSON.stringify(storageUrls));
	localStorage.setItem('title', JSON.stringify(storageTitles));
	
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