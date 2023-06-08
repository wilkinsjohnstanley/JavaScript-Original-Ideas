let profanity = prompt("Please cuss me out using the f-word.");


var profanityRemoved = profanity.replace(/fuck/g, "duck");


console.log("Please don't say " + profanityRemoved + "!");
