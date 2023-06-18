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


/* The HTML File:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="pieceOfCake.js"></script> 
</body>
</html>



*/
