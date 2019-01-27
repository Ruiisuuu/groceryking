let items = [
    {
        "name": "Mozerella cheese",
        "description": "A slice of cheese from italy it's pretty gooood",
        "locationx": 14,
        "locationy": 15,
        "image" : "./images/cheese.jpg",
        "price": "2.95$"
    } ,
    {
        "name": "Sliced white bread",
        "description": "BREEEAAAAAADDDDDDDD",
        "locationx" : 313/10.5,
        "locationy" : 212/8.11,
        "image" : "./images/bread.jpg",
        "price": "3.95$"
    },
    {
        "name": "Doritos",
        "description": "For the big of bone",
        "locationx": 335/10.5 ,
        "locationy": 373/8.11,
        "image" : "./images/doritos.png",
        "price": "5.95$"
    },
    {
        "name": "Frozen bread",
        "description": "Why would anyone buy frozen bread",
        "locationx" : 850/10.5 ,
        "locationy":  123/8.11,
        "image" : "/images/fbread.jpg",
        "price": "4.95$"
    },
    {
        "name": "Canned tuna",
        "description": "Tuna sandwich incoming",
        "locationx": 373/10.5 ,
        "locationy" : 250/8.11,
        "image" : "/images/tuna.jpg",
        "price": "0.95$"
    },
    {
        "name": "Almonds",
        "description": "Nuts n stuff, the worst kind tho",
        "locationx": 260/10.5,
        "locationy" : 303/8.11,
        "image" : "/images/almonds.jpg",
        "price": "0.55$"
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
            container.style.position = "absolute";
            container.style.top = `${item.locationy}%`;
            container.style.left = `${item.locationx}%`;
            let pin = document.createElement('img');
            pin.className="click position-absolute";
            pin.setAttribute("src","https://img.icons8.com/color/32/000000/map-pin.png");
            let popover = document.createElement('div');
            popover.className = 'yeet position-absolute d-none';
            popover.innerHTML = `<div class="popuptext" id="myPopup">
                                    <h5><u>${item.name}</u></h5>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-sm">
                                                <img src="${item.image}" width=100px ></img>
                                            </div>
                                            <div class="col-sm">
                                                <p>
                                                <u>Description:</u><br>
                                                ${item.description}<br>
                                                <u>Price: </u> ${item.price}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
            container.appendChild(popover);
            container.appendChild(pin);
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
