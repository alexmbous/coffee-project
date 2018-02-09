'use strict';

  // Current inventory
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

  // Targets the ID of coffees to reference when rendering
  var divCoffee = document.querySelector('#coffees');
  // Function used to create each seperate div for individual coffee names
  function renderCoffee (coffee) {
    var div = '';
    div += `<div class="coffeeName">${coffee.name} <p   class="roastLevel">${coffee.roast}</p></div>`;
    return div;
  }

  // Function that takes the temporary array created in updateCoffees and generates utilizes the renderCoffee helper function to create individual divs from array of remaining coffees
  function renderCoffees (coffees) {
    var div = '';
    for (var i = coffees.length - 1; i >= 0; i--) {
      div += renderCoffee(coffees[i]);
    }
    return div;
  }

  // Function that controls dynamic population of renderCoffee functions
  function updateCoffees (e) {
    var input = document.getElementById('coffeeSearch').value.toLowerCase();
    var selectedRoast = document.getElementById('roastSelection').value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
      var name = coffee.name;
      name = name.toLowerCase();
      if (name.indexOf(input) === '' && selectedRoast === 'all') {
        filteredCoffees.push(coffee);
      } else {
        if (name.indexOf(input) !== -1 && selectedRoast === 'all') {
          filteredCoffees.push(coffee);
        } else if (coffee.roast === selectedRoast && name.indexOf(input) !== -1) {
          filteredCoffees.push(coffee);
        } else if (name.indexOf(input) === '' && coffee.roast === selectedRoast) {
          filteredCoffees.push(coffee);
        } else {
          console.log('filtered');
        }
      }
      divCoffee.innerHTML = renderCoffees(filteredCoffees);
    });
  }

function addBean () {
  var newBeanStrength = document.getElementById('roastStrength').value;
  var newBeanName = document.getElementById('addBean').value;
  var addNewBean = {};
  addNewBean.id = coffees.length + 1;
  addNewBean.name = newBeanName;
  addNewBean.roast = newBeanStrength;
  coffees.push(addNewBean);
  coffees.sort(compareRoast);
  return coffees;
}

// Compare for name of bean
function compareName (a, b) {
  if (a.roast === b.roast) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
  return 0;
}

// Compare for name of roast
function compareRoast (a, b) {
  if (a.roast > b.roast) {
    return -1;
  }
  if (a.roast < b.roast) {
    return 1;
  }
  return 0;
}

console.log(coffees.sort(compareRoast).sort(compareName));
