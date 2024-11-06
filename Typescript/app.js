console.log("welcome to typecript");
// script.ts
// Function to display a greeting based on the time of day
function displayGreeting() {
    var _a;
    var greetingElement = document.createElement("p");
    var hours = new Date().getHours();
    var greeting;
    if (hours < 12) {
        greeting = "Good Morning!";
    }
    else if (hours < 18) {
        greeting = "Good Afternoon!";
    }
    else {
        greeting = "Good Night!";
    }
    greetingElement.textContent = greeting;
    greetingElement.classList.add("greeting");
    (_a = document.querySelector("header .container")) === null || _a === void 0 ? void 0 : _a.appendChild(greetingElement);
}
// Function to animate elements on scroll
function animateOnScroll() {
    var elements = document.querySelectorAll(".animate");
    elements.forEach(function (element) {
        var rect = element.getBoundingClientRect();
        var isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (isVisible) {
            element.classList.add("visible");
        }
        else {
            element.classList.remove("visible");
        }
    });
}
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["New"] = 1] = "New";
    ProjectStatus[ProjectStatus["Active"] = 2] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 3] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
var currentStatus = ProjectStatus.Active;
console.log(currentStatus);
console.log(ProjectStatus[3]);
var randomValue = 10;
console.log(randomValue.name);
// type assertion
var someVar = 10;
someVar = 'Hello';
someVar = 20;
var myNumber;
myNumber = someVar;
console.log(myNumber);
// type guard
var x = 10;
if (typeof x === "number") {
    console.log(x + 10);
}
var b = true;
if (typeof b === "boolean") {
    console.log(b);
}
//Union and Intersection types
//Union types
var numberOrBoolean;
numberOrBoolean = 10;
numberOrBoolean = true;
//function-union types
function add(x, y) {
    var returnValue = 0;
    if (typeof x === 'number' && typeof y === 'number') {
        returnValue = x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        returnValue = x.concat(y);
    }
    return returnValue;
}
console.log(add(10, 20));
console.log(add('Hello', 'World'));
// Add event listeners
window.addEventListener("load", displayGreeting);
window.addEventListener("scroll", animateOnScroll);
