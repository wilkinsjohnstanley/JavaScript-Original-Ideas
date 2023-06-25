const existingMethUser = {
    userEmail: "methluver69@gmail.com",
    password: "methingWithSasquatch"
}
const existingMethUser2 = { userEmail: "methisthebest@gmail.com", password: "dontmethwithtexas" }


const user = new Object();

alert("New to MethFlix? Sign up now.")

var question = prompt("Do you have an account?")
if (question == "Yes"){
    console.log(existingMethUser)
    alert("Welcome back " + existingMethUser.userEmail + "!")
    console.log(existingMethUser)
}
else {
    user.userEmail = prompt("Ready to watch? Enter your email to create or restart your membership." )
    alert("Methflix is personalized for you. Create a password to watch on any device at any time.")
    user.password = prompt("Create a password to start your membership. Just a few more steps and you're done! We hate paperwork, too.")
    
    alert("Welcome to Methflix, " + user.userEmail)
    console.log(user);
}



