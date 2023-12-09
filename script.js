function accept(element) {
    let bottom = document.querySelector('#bottom')
    bottom.remove();
    element.remove();
}


function change() {
    let temperature = document.querySelector('#temperature');
    let degrees1 = document.querySelector('#degrees1');
    let degrees12 = document.querySelector('#degrees12');
    let degrees123 = document.querySelector('#degrees123');
    let degrees1234 = document.querySelector('#degrees1234');
    let degrees6 = document.querySelector('#degrees6');
    let degrees67 = document.querySelector('#degrees67');
    let degrees678 = document.querySelector('#degrees678');
    let degrees6789 = document.querySelector('#degrees6789');
    if(temperature = 'F') {
        degrees1.innerText = "75";
        degrees12.innerText = "80";
        degrees123.innerText = "69";
        degrees1234.innerText = "78";
        degrees6.innerText = "65";
        degrees67.innerText = "66";
        degrees678.innerText = "61";
        degrees6789.innerText = "70";

    }
}