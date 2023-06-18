const cakes = ["Chocolate Cake", "Short Cake", "Red Velvet", "Carrot Cake"]; 
let favoriteCake = prompt("What kind of cake do you like? Chocolate Cake, Short Cake, Red Velvet, Carrot Cake" );
switch(favoriteCake) {
  case "Chocolate Cake":
    alert("Excellent choice! Chocolate is good for your soul.");
    break;
  case "Short Cake":
    alert("Short Cake is my favorite too!");
    break;
  case "Red Velvet":
    alert("Red Velvet is amazing. I thought it was just me");
    break;
  case "Carrot Cake":
    alert("Carrot Cake! Did you know carrots are good for your eye sight?");
    break;  
  default:
    alert("I have never heard of that kind of cake before!");
}
