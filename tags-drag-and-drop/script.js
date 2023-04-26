/*
    INITIALIZAITON
*/
let tags = ["HTML", "CSS", "JavaScript"]

let tagsContainer = document.querySelector(".tags__container")
let addTagInput = document.querySelector(".add-tag__input")
let addTagBtn = document.querySelector(".add-tag__btn")

let draggables = document.querySelectorAll(".tag")
let containers = document.querySelectorAll(".box")

addTagBtn.addEventListener("click", addNewTag)

// add new tag to the array
function addNewTag() {
    let newTagContent = addTagInput.value
    if (newTagContent != "") {
        tags.push(newTagContent)
        showTags()
    }
    addTagInput.value = ""
}

// build tag DOM Elements from the array and show them
function showTags() {
    let tagString = ""
    tags.forEach(item => {
        tagString += `<div class="tag" draggable="true">${item}</div>`
    })
    tagsContainer.innerHTML = tagString
    draggables = document.querySelectorAll(".tag")
    implementDrag()
}

// show the initial tags
showTags()

/* 
    DRAG FUNCTIONALITY
*/

function implementDrag() {
    let draggedFrom, draggedTo
    draggables.forEach(item => {
        item.addEventListener("dragstart", () => {
            item.classList.add("dragging")
            draggedFrom = item.parentElement
        })
        item.addEventListener("dragend", () => {
            item.classList.remove("dragging")
            draggedTo = item.parentElement
            if (draggedFrom != draggedTo) {
                // removing the moved item from the array
                tags.splice(tags.indexOf(item.textContent), 1)
            }
        })
    })

    containers.forEach(item => {
        item.addEventListener("dragover", e => {
            e.preventDefault
            const draggingItem = document.querySelector(".dragging")
            item.appendChild(draggingItem)
        })
    })
}

// reload btn
document.querySelector(".refresh").addEventListener("click", () => {
    location.reload()
})
