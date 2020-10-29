function myFunction() {
    var checkbox = document.getElementById("cbox");
    var chequeado = checkbox.checked;
    console.log(chequeado)

    var mensuales = document.getElementsByClassName("mensuales");
    var anuales = document.getElementsByClassName("anuales")
    console.log(mensuales);
     if (chequeado === true){

        var ocult = mensuales[0].style.display = "none";
       var show = anuales[0].style.display = "block";
        var ocult = mensuales[1].style.display = "none";
       var show = anuales[1].style.display = "block";
        var ocult = mensuales[2].style.display = "none";
       var show = anuales[2].style.display = "block";
     }else{
        ocult = mensuales[0].style.display = "block";
        show = anuales[0].style.display = "none";
        ocult = mensuales[1].style.display = "block";
        show = anuales[1].style.display = "none";
        ocult = mensuales[2].style.display = "block";
        show = anuales[2].style.display = "none";
     }

}
myFunction()

