// You run a chiringuito (the term for a bar on the beach) at Bogatell beach.

//Given an object that represents the inventory of your chiringuito, 
//add a method 'inventory' to your object that returns the current 
//value of the chiringuito's inventory.

//EXTRA CREDIT!
// Add a sale method that takes an order object, returns the price of the 
// order, updates the inventory of the purchased items, and adds the price of 
// the order to the company's cash property.

let chiringuito = {
  cava: {
    'aged': {cost: 2, quantity: 100},
    'classic': {cost: 1.5, quantity: 100}
  },

  bravas: {
    'salmon':{cost: 5, quantity: 100},
    'pesto': {cost: 5.5, quantity: 100},
    'sauce': {cost: 1.5, quantity: 100}
  },

  paella: {
    'mariscos': {cost: 1, quantity: 100}
  },

  estrella: {
    'damm': {cost: 0.5, quantity: 100},
    'galicia': {cost: 0.1, quantity: 100}
  },

  cash: 0
};


// write your code below ---->

chiringuito.inventory = function () {
  const inventoryNames = Object.keys(this).filter(key => typeof this[key] === 'object');
  let sumValue = 0;
  inventoryNames.forEach(inventoryName => {
    const inventType = this[inventoryName];
    Object.keys(inventType).forEach(productName => {
      sumValue = sumValue + this[inventoryName][productName].quantity * this[inventoryName][productName].cost;
    })
  })
  return sumValue
}

// //extra credit time ----> 

chiringuito.sale = function (order) {

}


module.exports = chiringuito;