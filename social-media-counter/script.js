const counters = document.querySelectorAll('.counter');
const speed = 250;

counters.forEach(item => {
    function updateCount() {
        // + will convert the string (data-attribute and innerText(0)) to number
        const target = +item.getAttribute('data-target');
        const count = +item.innerText;

        const inc = target / speed;

        if(count < target) {
            item.innerText = count + inc;
            // run the updateCount every 1ms
            setTimeout(updateCount, 1);
        }
        else {
            item.innerText = target;
        }
    }
    updateCount();
})