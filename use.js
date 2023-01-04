//Javascript
const secondSection =document.getElementById('search-user-buy')
const firstCover = document.getElementById('promo-bar');

let glassUser
let launchNew

let treeOfIcons = []
let growerCards = []
//interactivity
class treeOfIcon {
    constructor(name){
        this.name = name
    }
}
let firstDesign = new treeOfIcon('Glam Beige')
treeOfIcons.push(firstDesign)
// discounts
class growerCard {
    constructor(name) {
        this.name = name
    }
}
let firstCard = new growerCard('January')
growerCards.push(firstCard)
function promoBar() {

    //Promotions and interactive activities bar
    growerCards.forEach((growerCard) => {
        //marketPromo
        launchNew = `
        <header >
            <p> ASK FOR A 3C IN OUR LOCAL STORES AND HAVE A 20% DISCOUNT IF YOU FIND +9 COFFEE GROWERS 
            </p>  
           
        </header>
        `
        firstCover.innerHTML += launchNew
    })
    orderBy()
}

function orderBy() {
    //Search, user and buy bag
    treeOfIcons.forEach((treeOfIcon) => {
        // order one
        glassUser = `
        <ul class="nav-right-section">
            <li class="main-input-box">    
                <span class="s-icon" ></span>
                <input type="text" placeholder="Buscar" >
            </li>
            
            <li>
                <i class="u-icon" ></i>
            </li>
            <li>
                <i class="b-icon" ></i>
            </li> 
        </ul>`
    secondSection.innerHTML += glassUser
    })
}

window.addEventListener('load', promoBar)