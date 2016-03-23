var passengers = [{
  name: "Maxime St-jean",
  paid: true
}, {
  name: "Kristelle Delorme",
  paid: true
}, {
  name: "Big Henri",
  paid: false
}, {
  name: "Bob Orton",
  paid: true
}];

function processPassengers(passengers, testFunction) {
  for (var i = 0; i < passengers.length; i++) {
    if (testFunction(passengers[i])) {
      return false;
    }
  }
  return true;
}

function checkNoFlyList(passenger) {
  return (passenger.name === "Kristelle Delorme");
}

function checkNotPaid(passenger) {
  return (!passenger.paid);
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
  console.log("The plane can't take off: we have a passenger on the no-fly-list.");
}

var allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
  console.log("The plane can't take off: not everyone has paid.");
}

function printPassenger(passenger) {
  if (passenger.paid === true) {
    console.log(passenger.name + " has paid!");
  } else {
    console.log(passenger.name + " has not paid!");
  }
}

processPassengers(passengers, printPassenger);
