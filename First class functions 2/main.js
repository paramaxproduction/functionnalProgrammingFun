var passengers = [{
  name: "Maxime St-jean",
  paid: true,
  ticket: "coach"
}, {
  name: "Kristelle Delorme",
  paid: true,
  ticket: "firstclass"
}, {
  name: "Big Henri",
  paid: false,
  ticket: "firstclass"
}, {
  name: "Bob Orton",
  paid: true,
  ticket: "premiumeconomy"
}];

function createDrinkOrder(passenger) {
  var orderFunction;

  if (passenger.ticket === "firstclass") {
    orderFunction = function() {
      alert("Would you like a cocktail or wine?");
    };
  } else if (passenger.ticket === "premiumeconomy") {
    orderFunction = function() {
      alert("Would you like wine, cola or water?");
    };
  } else {
    orderFunction = function() {
      alert("Your choice is cola or water.");
    };
  }
  return orderFunction;
}

function createDinerOrder(passenger) {
  var orderFunction;

  if (passenger.ticket === "firstclass") {
    orderFunction = function() {
      alert("Would you like chicken or pasta?");
    };
  } else if (passenger.ticket === "premiumeconomy") {
    orderFunction = function() {
      alert("Would you like a snack box or cheese plate?");
    };
  } else {
    orderFunction = function() {
      alert("Your choices are peanuts or pretzels.");
    };
  }
  return orderFunction;
}

function serveCustomer(passenger) {
  var getDrinkOrderFunction = createDrinkOrder(passenger);
  var getDinerOrderFunction = createDinerOrder(passenger);
  getDrinkOrderFunction();
  getDinerOrderFunction();
}

function servePassengers(passengers) {
  for (var i = 0; i < passengers.length; i++) {
    serveCustomer(passengers[i]);
  }
}

servePassengers(passengers);
