window.onload = function(){
    var form= document.getElementById("frm");
    var name= document.getElementById("name");
    
    var type = document.getElementById("type");
    var legArray = document.getElementsByClassName("numLeg");
    var abilitiesArray = document.getElementsByClassName("abi");
    var email = document.getElementById("email");
    var pass = document.getElementById("pass");
    var desc = document.getElementById("desc");

    var submit = document.getElementById("submitBtn");
console.log(name,type,legArray, abilitiesArray, email, pass, desc);
    var pet = {
            petName: "",
            petType: "",
            legs: "",
            abilities: "",
            petEmail:"",
            password:"",
            description:""

    }
    submit.addEventListener("click", 
    function(){
        pet.petName = name.value;
        pet.petType = type.value;
        pet.petEmail = email.value;
        pet.password = pass.value;
        pet.description = desc.value;
        for(let i=0; i<abilitiesArray.length; i++ ){
            if(abilitiesArray[i].checked ==true){
                pet.abilities = abilitiesArray[i].value;
            }
        }
        for(let i=0; i<legArray.length; i++ ){
            if(legArray[i].checked ==true){
                pet.legs = legArray[i].value;
            }
        form.innerHTML ="You have a pet " + pet.petType + " named " +pet.petName+ ". They "+ pet.abilities+ ".";
        }
        console.log(pet);

    }
    )
}