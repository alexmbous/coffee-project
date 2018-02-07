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

const roastSelect = document.getElementById('roastSelection').value.addEventListener('onchange');

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

var coffeeResults = document.getElementById('coffeeResults');
function updateCoffees (e) {
  e.preventDefault(); // don't submit the form, we just want to update the data
  var selectedRoast = roastSelection.value;
  var filteredCoffees = [];
  coffees.forEach(function (coffee) {
    if (coffee.roast === selectedRoast) {
      filteredCoffees.push(coffee);
    }
  });
  coffeeResults.appendChild(filteredCoffees).innerHTML = renderCoffees(filteredCoffees);
}
coffeeResults.innerHTML = renderCoffees(coffees);
