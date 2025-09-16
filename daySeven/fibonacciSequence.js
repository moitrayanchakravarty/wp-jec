// Program to calculate and print the first 20 Fibonacci numbers

// First two numbers of the Fibonacci sequence
let a = 0, b = 1;

// Print the first two numbers
console.log(a);
console.log(b);

// Loop from 3rd to 20th number
for (let i = 3; i <= 20; i++) {
    let next = a + b;    // Calculate next Fibonacci number
    console.log(next);   // Print it
    a = b;               // Move forward in the sequence
    b = next;
}
