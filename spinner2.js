// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r|   '); 
// }, 900);

const spinner = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ', ];
let delay = 100;

for (let string of spinner) {
  setTimeout(() => {
    process.stdout.write(string)
  }, delay += 200)
}