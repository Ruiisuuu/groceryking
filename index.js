let items = [
    {
        "name": "Mozerella cheese",
        "locationx": 14,
        "locationy": 15
    } ,
    {
        "name": "Sliced white bread",
        "locationx" : 313/10.5,
        "locationy" : 212/8.11
    },
    {
        "name": "Doritos",
        "locationx": 335/10.5 ,
        "locationy": 373/8.11
    },
    {
        "name": "Frozen bread",
        "locationx" : 850/10.5 ,
        "locationy":  123/8.11
    },
    {
        "name": "Canned tuna",
        "locationx": 373/10.5 ,
        "locationy" : 250/8.11
    },
    {
        "name": "Almonds",
        "locationx": 260/10.5,
        "locationy" : 303/8.11
    },

    {
        "name": "Sliced cheese",
        "locationx" : 205/10.5 ,
        "locationy": 130/8.11
    }
    ];

function renderItems(){
    items.forEach(item => {
        let a = document.createElement("a");
        a.className = "list-group-item list-group-item-action w-100 item";
        a.innerHTML = `${item.name}`;
        document.getElementById("items-list").appendChild(a);
    });
}

function setPin(name){
    items.forEach(item => {
        if (name === item.name){
            let container = document.createElement('div');
            let pin = document.createElement('img');
            pin.className="click";
            pin.setAttribute("src","https://img.icons8.com/color/32/000000/map-pin.png");
            container.style.position = "absolute";
            container.style.top = `${item.locationy}%`;
            container.style.left = `${item.locationx}%`;
            container.className = "pin popover data-toggle=\"popover\" title=\"Popover Header\" data-content=\"Some content inside the popover\"";
            let popover = document.createElement('div');
            popover.className = 'yeet d-none';
            popover.innerHTML = "<div class=\"popuptext\" id=\"myPopup\">Popup text...</div>";
            container.appendChild(pin);
            container.appendChild(popover);
            document.getElementById('map').appendChild(container);
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
    div = document.getElementById("items-list");
    links = div.getElementsByTagName('a');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < links.length; i++) {
        txtValue = links[i].textContent || links[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1){
            links[i].style.display = "";
        } else {
            links[i].style.display = "none";
        }
    }
});

document.getElementById('items-list').addEventListener('click', (e) => {
    setPin(e.target.innerHTML);
});

document.addEventListener('click', (e) => {
    console.log('yee')
    if(e.target.classList.contains("click")){
        console.log('hello')
        e.target.parentElement.getElementsByClassName('yeet')[0].classList.toggle("d-none");
    }
});
