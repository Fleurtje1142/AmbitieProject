function updateHeading(city, temperature) {
    let heading = document.querySelector("h1");
    
    if (temperature <= 0) {
        heading.innerHTML = "😣<br/>Currently " + temperature + "° in " + city;
    } else {
        heading.innerHTML = "😊<br/> Currently " + temperature + "° in " + city;
    }
}

function different() {
    let city = prompt("What city do you live in?");
    let temperature = prompt("What temperature is it?");

    // Convert temperature to a number
    temperature = parseFloat(temperature);

    // Check if the temperature is a valid number
    if (!isNaN(temperature)) {
        updateHeading(city, temperature);
    } else {
        alert("Please enter a valid temperature.");
    }
}

let contactButton = document.querySelector("#contactButton");

contactButton.addEventListener("click", different);
