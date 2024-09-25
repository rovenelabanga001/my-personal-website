let age = 20;
let hasID = true;

// Using the AND (&&) operator
if (age >= 18 && hasID) {
  console.log("You are allowed to enter.");
} else {
  console.log("You cannot enter.");
}

// Using the OR (||) operator
let hasTicket = false;
let isVIP = true;

if (hasTicket || isVIP) {
  console.log("You can attend the event.");
} else {
  console.log("You cannot attend the event.");
}

// Using the NOT (!) operator
let isRainy = false;

if (!isRainy) {
  console.log("You don't need an umbrella.");
} else {
  console.log("Take an umbrella!");
}
