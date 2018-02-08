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
    var lower = coffee.name;
    lower = lower.toLowerCase();
    var expression = `^[${input}]`;
    var rx = new RegExp(expression, 'i');
    if (rx.test(coffee.name) && selectedRoast === 'all') {
      filteredCoffees.push(coffee);
    } else {
      if (rx.test(coffee.name) && selectedRoast === 'all') {
        filteredCoffees.push(coffee);
      } else if (coffee.roast === selectedRoast && lower.indexOf(input.match(rx)) === null) {
        filteredCoffees.push(coffee);
      } else if (lower.indexOf(input.match(rx)) !== null && coffee.roast === selectedRoast) {
        filteredCoffees.push(coffee);
      } else {
        console.log('error');
      }
    }
    divCoffee.innerHTML = renderCoffees(filteredCoffees);
  });
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
// submitBtn.addEventListener('click', updateCoffees)
