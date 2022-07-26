//Javascript
const mainBox = document.querySelector('.art-card');

const coffees = []
coffees.push( {
    name: 'Coffee',
    price: 5500,
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }
)

function renderMenu(array){
    for (coffee of coffees) {
        // coffee = { name, price, image} -> coffee.image
        const coffeeCard = document.createElement('div');
        const coffeeImage = document.createElement('img');

        coffeeCard.classList.add('coffee-card');
        coffeeImage.setAttribute('src', coffee.image);
        // moves the child from its current position to the new position
        coffeeCard.appendChild(coffeeImage);
        mainBox.appendChild(coffeeCard);

    }
}

renderMenu(coffees);
