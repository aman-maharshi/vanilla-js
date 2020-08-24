const accordionHeaders = document.querySelectorAll(".accordion-item-header")
const accordionBodies = document.querySelectorAll(".accordion-item-body")

accordionHeaders.forEach(item => {
    item.addEventListener("click", e => {
        itemHeader = e.target
        itemBody = e.target.nextElementSibling
        itemHeader.classList.toggle("active")
        itemBody.classList.toggle("hide")
    })
})

// hiding all on page load / refresh
document.addEventListener("DOMContentLoaded", () => {
    accordionBodies.forEach(item => {
        item.classList.add("hide")
    })
})
