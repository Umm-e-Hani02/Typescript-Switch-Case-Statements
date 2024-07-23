/*-------------------------------------------------------------------------------------------------------------
 *---------------------------------------------- SWITCH CASES -------------------------------------------------
 *-------------------------------------------------------------------------------------------------------------*/

// In TypeScript, a switch case statement is a control flow structure that allows you to execute different blocks
// of code based on the value of a given expression. It is an alternative to using multiple if-else statements and is
// often more readable when dealing with multiple conditions.

// Here's a brief overview of how it works:

// Expression Evaluation: The switch statement evaluates an expression.

// Case Matching: It compares the result of the expression to the values specified in each case.

// Execution: If a match is found, the block of code associated with that case is executed.

// Break Statement: The break statement is used to exit the switch block and prevent the execution of subsequent cases.

// Default Case: An optional default case can be added to handle situations where none of the specified cases match
// the expression.

// Example 1: Using switch case for menu items
let menu = "Pizza fries";

switch (menu) {
  case "Burger":
    console.log("Adding Burger to the order");
    break;
  case "Pizza":
    console.log("Adding Pizza to the order");
    break;
  case "Pasta":
    console.log("Adding Pasta to the order");
    break;
  case "Pizza fries":
    console.log("Adding Pizza fries to the order");
    break;
  case "Fries":
    console.log("Adding Fries to the order");
    break;
  default:
    console.log("Item not available in the menu");
}
// OUTPUT: Adding Pizza fries to the order

// Example 2: Using switch case for travel modes
let travelMode = "bicycle";
let message: string;

switch (travelMode) {
  case "car":
    message = "You are traveling by car. Please drive safely!";
    break;
  case "bus":
    message = "You are traveling by bus. Remember to buy a ticket!";
    break;
  case "train":
    message = "You are traveling by train. Enjoy the ride!";
    break;
  case "bicycle":
    message = "You are traveling by bicycle. Wear a helmet!";
    break;
  case "walking":
    message = "You are walking. Watch out for traffic!";
    break;
  default:
    message = "Unknown mode of travel.";
}

console.log(message);
// Output: You are traveling by bicycle. Wear a helmet!
