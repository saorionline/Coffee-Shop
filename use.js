//Javascript
const mainBox = document.querySelector('.cards-container');

const coffees = []
coffees.push( {
    name: 'Coffee',
    price: 5500,
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    });
coffees.push( {
        name: 'Coffee',
        price: 5500,
        image: 'https://images.pexels.com/photos/849645/pexels-photo-849645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    });
coffees.push( {
    name: 'Coffee',
    price: 5500,
    image: 'https://images.pexels.com/photos/133553/pexels-photo-133553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

coffees.push( {
    name: 'Coffee',
    price: 5500,
    image: 'https://images.pexels.com/photos/6312318/pexels-photo-6312318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1\n',
});
coffees.push( {
    name: 'Coffee',
    price: 5500,
    image: 'https://images.pexels.com/photos/12821516/pexels-photo-12821516.jpeg?auto=compress&cs=tinysrgb&w=600',
});

coffees.push( {
    name: 'Coffee',
    price: 5500,
    image: '            https://images.pexels.com/photos/1131373/pexels-photo-1131373.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
});
coffees.push( {
    name: 'Coffee',
    price: 5500,
    image: 'https://images.pexels.com/photos/302888/pexels-photo-302888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
coffees.push( {
    name: 'Coffee',
    price: 5500,
    image: ' https://images.pexels.com/photos/6377344/pexels-photo-6377344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
coffees.push( {
    name: 'Coffee',
    price: 5500,
    image: 'https://images.pexels.com/photos/10065062/pexels-photo-10065062.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
});
coffees.push( {
    name: 'Coffee',
    price: 5500,
    image: 'https://images.pexels.com/photos/8205418/pexels-photo-8205418.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load\n',
});



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
