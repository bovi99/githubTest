console.log("welcome to typecript");

// script.ts

// Function to display a greeting based on the time of day
function displayGreeting(): void {
    const greetingElement = document.createElement("p");
    const hours = new Date().getHours();
    let greeting: string;

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Night!";
    }

    greetingElement.textContent = greeting;
    greetingElement.classList.add("greeting");
    document.querySelector("header .container")?.appendChild(greetingElement);
}

// Function to animate elements on scroll
function animateOnScroll(): void {
    const elements = document.querySelectorAll(".animate");

    elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isVisible) {
            element.classList.add("visible");
        } else {
            element.classList.remove("visible");
        }
    });
}

enum ProjectStatus {
    New = 1,
    Active= 2,
    Finished =3,

}

let currentStatus = ProjectStatus.Active;

console.log(currentStatus);
console.log(ProjectStatus[3]);

let randomValue : any=10;
console.log(randomValue.name);

// type assertion
let someVar : unknown =10;
someVar = 'Hello';
someVar =20;

let myNumber : number;
myNumber =someVar as number;
console.log(myNumber);

// type guard
let x : number = 10;
if(typeof x === "number"){
    console.log(x +10);
}

let b : boolean =true;

if(typeof b === "boolean"){
    console.log(b);
}

//Union and Intersection types

//Union types
let numberOrBoolean : number | boolean;

numberOrBoolean =10;
numberOrBoolean =true;

//function-union types
function add(x: number | string , y: number | string): number | string {
let returnValue : number | string =0;

if (typeof x === 'number' && typeof y === 'number') {
    returnValue = x+y;
}

if (typeof x === 'string' && typeof y === 'string') {
    returnValue = x.concat(y);
}
return returnValue;
}

console.log(add(10,20));
console.log(add('Hello', 'World'));


// Add event listeners
window.addEventListener("load", displayGreeting);
window.addEventListener("scroll", animateOnScroll);
