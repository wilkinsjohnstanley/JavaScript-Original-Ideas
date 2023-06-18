const cakes = ["Chocolate Cake", "Short Cake", "Red Velvet", "Carrot Cake"]; 
let favoriteCake = prompt("What kind of cake do you like?");
switch(favoriteCake) {
  case "Chocolate Cake":
    text = "Excellent choice! Chocolate is good for your soul.";
    break;
  case "Short Cake":
    text = "Short Cake is my favorite too!";
    break;
  case "Red Velvet":
    text = "Red Velvet is amazing. I thought it was just me";
    break;
  case "Carrot Cake":
    text = "Carrot Cake! Did you know carrots are good for your eye sight?";
    break;  
  default:
    text = "I have never heard of that kind of cake before!";
}

