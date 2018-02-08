'use strict';

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
  var input = document.getElementById('coffeeSearch').value.toLowerCase();
  var selectedRoast = document.getElementById('roastSelection').value;
  var filteredCoffees = [];
  coffees.forEach(function (coffee) {
    var expression = `^[" + ${input} + "]`;
    var rx = new RegExp(expression, 'i');
    if (input.match(rx) !== null) {
      filteredCoffees.push(input);
    }
    if (input.match(rx) === null && selectedRoast === 'all') {
      filteredCoffees.push(coffee);
    } else {
      if (coffee.roast === selectedRoast && input === '') {
        filteredCoffees.push(coffee);
      } else if (input.match(rx) !== -1 && coffee.roast === selectedRoast) {
        filteredCoffees.push(coffee);
      }
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
var coffeeSearch = document.querySelector('#coffeeSearch').value.toLowerCase();
// submitBtn.addEventListener('click', updateCoffees);
coffeeSearch.addEventListener('oninput', updateCoffees(coffeeSearch));
