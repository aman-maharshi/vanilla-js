let obj = new easyHTTP;
obj.get('https://jsonplaceholder.typicode.com/posts', function(err, response) {
    if (err) {
        console.log(err)
    } else {
        // console.log(response);
        let arr = JSON.parse(response);
        console.log(arr);
        arr.forEach(element => {
            // console.log(element.title)
            let li = document.createElement('li');
            li.innerHTML = `${element.title}`;
            document.getElementById('list').appendChild(li);
        });
    }
    
})

