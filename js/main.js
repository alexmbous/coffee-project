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


var coffeeSearch = document.querySelector('#coffeeSearch');
var submitButton = document.querySelector('#submit');
var roastSelect = document.querySelector('#roastSelection');
coffeeSearch.addEventListener('onkeyup', updateCoffees);
submitButton.addEventListener('click', updateCoffees);

roastSelect.addEventListener('onchange', roast);
const roast = coffees.filter(coffee => coffee.roast === roastSelect.value);
console.log(roast);
function renderCoffee (coffee) {
  var div = '<div id="coffeeResults">';
  div += '<div class="coffeeName">' + coffee.name + '</div>';
  div += '<p class="roastLevel">' + coffee.roast + '</p>';
  div += '</div>';
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
