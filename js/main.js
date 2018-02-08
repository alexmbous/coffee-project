'use strict';

var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'}
];

var roastSelect = document.getElementById('roastSelection').value;

const roast = coffees.filter(coffee => coffees.roast === roastSelect);
console.log(roast);

function renderCoffee (coffee) {
  var div = '';
  div += `<div class="coffeeName">${coffee.name} <p class="roastLevel">${coffee.roast}</p></div>`;
  return div;
}

function renderCoffees (coffees) {
  var div = '';
  for (var i = coffees.length - 1; i >= 0; i--) {
    div += renderCoffee(coffees[i]);
  }
  return div;
}

function updateCoffees (e) {
  var selectedRoast = document.getElementById('roastSelection').value;
  var filteredCoffees = [];
  coffees.forEach(function (coffee) {
    if (coffee.roast === 'all') {
      divCoffee.innerHTML = renderCoffee ();
    } else if (coffee.roast === selectedRoast) {
      filteredCoffees.push(coffee);
    }
  });
  divCoffee.innerHTML = renderCoffees(filteredCoffees);
}

var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'}
];

var divCoffee = document.querySelector('#coffees');
var submitBtn = document.querySelector('#submit');
// var roastSelection = document.querySelector('#roastSelection');
var coffeeSearch = document.querySelector('#cofeeSearch');

divCoffee.innerHTML = renderCoffees(coffees);
// submitBtn.addEventListener('click', updateCoffees);
// coffeeSearch.addEventListener('onkeyup', updateCoffees);
