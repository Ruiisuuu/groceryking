let items = [
    {
    "name": "CHHESSEE",
    "locationx": 30,
    "locationy": 50,
    }, {
    "name": "HAMMM",
    "location": "there",
    }
];

function renderItems(){
    items.forEach(item => {
        let a = document.createElement("a");
        a.className = "list-group-item list-group-item-action w-100";
        a.innerHTML = `${item.name}`;
        document.getElementById("items-list").appendChild(a);
    });
}

function renderPin(item){
    let pin = document.createElement('img');
    pin.setAttribute("src","https://img.icons8.com/color/32/000000/map-pin.png");
    pin.className = `class="position-absolute top: ${item.locationx}px; left: ${item.locationy}px; z-index: 2;"`
    document.getElementById('map').appendChild(pin);

}

function setPin(name){
    items.forEach(item => {
        if (name === item.name){
            renderPin(item);
        }
    });
}

// Event: On load
document.addEventListener('DOMContentLoaded', () => {
    renderItems();
});

document.getElementById("grocery-input").addEventListener("focusin", () => {
    document.getElementById("items-list").classList.remove("d-none");
    document.getElementById("items-list").classList.add("d-block");
    console.log('hey')
});

document.getElementById("grocery-input").addEventListener("focusout", () => {
    setTimeout(function(){
        document.getElementById("items-list").classList.add("d-none");
        document.getElementById("items-list").classList.remove("d-block");}, 200);
});

document.getElementById("grocery-input").addEventListener("keyup", () => {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('grocery-input');
    filter = input.value.toUpperCase();
    ul = document.getElementById("items-list");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
});

document.getElementById('items-list').addEventListener('click', (e) => {
    setPin(e.target.innerHTML);
});

// When the user clicks on <div>, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
