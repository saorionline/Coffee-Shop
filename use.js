//Javascript
const mainGallery = document.getElementById('contain-text')
const thirdPart = document.getElementById('logo-menu')
const secondSection =document.getElementById('search-user-buy')
const firstCover = document.getElementById('promo-bar');

let announce
let brandIdifier
let glassUser
let launchNew

let importantBigs = []
let logoSealers = []
let treeOfIcons = []
let growerCards = []



//after promo, menu and logo, this part is an important link
class importantBig{
    constructor(name){
        this.name = name
    }
}
//menu of options
class logoSealer {
    constructor(name) {
        this.name = name
    }
}
//interactivity
class treeOfIcon {
    constructor(name){
        this.name = name
    }
}
// discounts
class growerCard {
    constructor(name) {
        this.name = name
    }
}
let mainSection = new importantBig('Coffee')
let firstLogoPart = new logoSealer('Centered')
let firstDesign = new treeOfIcon('Glam Beige')
let firstCard = new growerCard('January')

importantBigs.push(mainSection)
logoSealers.push(firstLogoPart)
treeOfIcons.push(firstDesign)
growerCards.push(firstCard)

function contentAttention(){
    importantBigs.forEach((importantBig) => {
        announce = ``
        mainGallery.innerHTML += announce
    })
}

function pasteLogo() {
    logoSealers.forEach((logoSealer) => {
        
    brandIdifier =`
            <ul class="nav-long-section">
                <li id="highInt">Tienda
                    <!--  <ul class="inner-menu">
                            <li id="me">Café Especial
                                <ul class="inner-menu">
                                    <li id="me">Blends</li>
                                    <li id="me">Single Origin</li>
                                    <li id="me">Cold Bred</li>
                                    <li id="me">Kits</li>
                                    <li id="me">Métodos</li>
                                </ul>
                            </li>
                            <li>Merch</li>
                        </ul> -->
                </li>      
                    <li> <canvas class="cube"></canvas></li>                    
                    <li class="logo-tibetano">
                        <img src="./assets/tibetano/main-logo.jpg" alt="this is just to learn">
                    </li>
                    <li>
                        <a>Nosotros</a>
                    </li>
                    <li>
                        <a >Reaprender</a>
                    </li> 
                    <li>
                        <a >Visítanos</a>
                    </li>       
                    <li> <canvas class="cube"></canvas></li>  
                    </ul>`
                
    thirdPart.innerHTML += brandIdifier
    })
    contentAttention()
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
            <li class="u-icon"></li>
            <li class="b-icon"></li> 
        </ul>`
    secondSection.innerHTML += glassUser
    })
    pasteLogo()
}
function promoBar() {

    //Promotions and interactive activities bar
    growerCards.forEach((growerCard) => {
        //marketPromo
        launchNew = `
        <header >
            <p> PIDE UNA 3C EN NUESTRAS TIENDAS LOCALES Y TEN UN 20% DE DESCUENTO SI ENCUENTRAS 9 CAFECULTORES
            </p>  
           
        </header>
        `
        firstCover.innerHTML += launchNew
    })
    orderBy()
}



window.addEventListener('load', promoBar)