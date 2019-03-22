let textInput = document.getElementById('search');
let names = document.querySelectorAll('.collection-item');
let heading = document.querySelectorAll('.collection-header');


textInput.addEventListener('input', filterList);

function filterList() {
    let inputValue = textInput.value.toUpperCase();
    inputLetter =  textInput.value.toUpperCase().substring(0,1);

    // hiding the name with matching letters
    for (var i=0; i < names.length; i++) {
        let link = names[i].querySelector('a');
        let content = link.textContent.toUpperCase();
        
        // if input item characters matches a name
         if (content.indexOf(inputValue) > -1) {
         }
         else {
             link.parentElement.style.display = "none";
         }         
    }
    
    // hiding the names heading
    for(var j=0; j<heading.length; j++) {
        let item = heading[j].querySelector('h5');
        let itemValue = item.textContent;

        if(inputLetter == itemValue) {
        }
        else {
            item.parentElement.style.display = 'none';
        }
    }
}
