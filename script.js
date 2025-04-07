//create data arrays

const subjects = [
"Your left sock",
  "A wise chicken",
  "The ghost in your Wi-Fi",
  "An unpaid intern",
  "That talking banana",
  "A penguin in a suit",
  "Your last brain cell",
  "A suspiciously confident snail"
];

const actions = [
"believes in your potential",
  "screams ‘just do it!’",
  "demands you take a break",
  "dares you to fight a cloud",
  "suggests deep breathing and deeper pizza",
  "warns you not to trust squirrels",
  "encourages chaos",
  "wants you to dance like your fridge is watching"
];

const endings = [
"before the tacos expire.",
  "under a full moon wearing Crocs.",
  "in an IKEA parking lot.",
  "because failure is a myth invented by cats.",
  "until your eyebrows declare independence.",
  "without ever blinking.",
  "while humming the national anthem of Mars.",
  "unless you’re allergic to success."
];

// create a function that randomly selects from each array
function chooseRandomly(arr){
let randomIndex = Math.floor(Math.random() * arr.length);
return arr[randomIndex];

};

//combining the messages
function generateMessage(){
const message = `${chooseRandomly(subjects)} ${chooseRandomly(actions)} ${chooseRandomly(endings)}`;
return message;
}

// Select the button and the paragraph to display the message
const button = document.getElementById('generateMessageBtn');
const messageOutput = document.getElementById('messageOutput');

// Event listener to trigger the message generation on button click
button.addEventListener('click', () => {
    const randomMessage = generateMessage();  // Call the function to generate the message
    messageOutput.textContent = randomMessage; // Display the message in the paragraph
});


