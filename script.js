let username = prompt("Enter Name : \"Kasem or Esraa: \"");
switch(username){
    case "Kasem":
        document.getElementById("name").innerHTML =
        "\""+ username +"\"" + " Say's Love You Esraa !";
        break;
    case "Esraa":
        document.getElementById("name").innerHTML =
        "Hello\"" + username + "\" I Love You  !";
        break;
        default:
        alert("You entered a wrong name");
            
}
