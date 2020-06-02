let result = document.querySelector('#result'),
        copyBtn = document.querySelector('.result-copy'),
        length = document.querySelector('#length'),
        uppercase = document.querySelector('#uppercase'),
        lowercase = document.querySelector('#lowercase'),
        numbers = document.querySelector('#numbers'),
        symbols = document.querySelector('#symbols'),
        generate = document.querySelector('#generate'),
        message = document.querySelector('.message');


generate.addEventListener('click', function(e) {
        e.preventDefault();
        passwordLength = length.value;
        if(passwordLength < 5 || passwordLength > 30) {
                message.textContent = 'Invalid Password Length';
                setTimeout(function() {
                        message.innerHTML = "&nbsp;";
                }, 3000)
        }
        else {
                console.log(uppercase.checked);
        }
});

copyBtn.addEventListener('click', function() {

});