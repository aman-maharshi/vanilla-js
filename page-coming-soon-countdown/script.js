const element = document.querySelector(".countdown")
const launchDate = new Date("Aug 21, 2021 09:00:00")

// Launch Date (ms)
const end = launchDate.getTime()

// Update every second
const interval = setInterval(function() {
    // Get todays date and time (ms)
    const start = new Date().getTime()
    const distance = end - start

    // Calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const sec = Math.floor((distance % (1000 * 60)) / 1000)
    // console.log(days, hours, min, sec);

    // Update DOM
    element.innerHTML = `
        <div>${days} <p class="sub">days</p></div>
        <div>${hours} <p class="sub">hours</p></div>
        <div>${min} <p class="sub">minutes</p></div>
        <div>${sec} <p class="sub">seconds</p></div>
    `

    if (days <= 0) {
        // stop countdown
        clearInterval(interval)
        element.previousElementSibling.textContent = ""
        element.textContent = "Launch Date Passed"
        element.style.color = "cyan"
    }
}, 1000)
