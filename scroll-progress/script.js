const progressBar = document.querySelector('.progress')
let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight


window.addEventListener('scroll', () => {
    let windowScroll = document.documentElement.scrollTop
    let scroll = (windowScroll / windowHeight) * 100
    progressBar.style.width = scroll + '%'
})