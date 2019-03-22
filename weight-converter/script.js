
let dropdown = document.getElementById('units');
let inputWeight = document.getElementById('weight');
let output = document.getElementById('outputbox');


inputWeight.addEventListener('input', convertPounds);
dropdown.addEventListener('input', convertKg);


// default behaviour 
function convertPounds() {
    if(dropdown.value ==='kg') {
        let weight = inputWeight.value;
        weight = (weight*2.2).toFixed(2)
        output.innerHTML = `${weight} pounds`
    }
    if (dropdown.value === 'pounds') {
        let weight = inputWeight.value;
        weight = (weight/2.2).toFixed(2)
        output.innerHTML = `${(weight)} kilograms`
    }
}

// when drop down is toggled
function convertKg() {
    if (dropdown.value === 'pounds') {
        let weight = inputWeight.value;
        weight = (weight/2.2).toFixed(2)
        output.innerHTML = `${(weight)} kilograms`
    }
    if(dropdown.value ==='kg') {
        let weight = inputWeight.value;
        weight = (weight*2.2).toFixed(2)
        output.innerHTML = `${weight} pounds`
    }
}



