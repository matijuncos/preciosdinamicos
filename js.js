function myFunction() {
    var checkbox = document.getElementById("cbox");
    var chequeado = checkbox.checked;

    var basic = document.getElementById('basic');
    var professional = document.getElementById("professional");
    var master = document.getElementById("master")

     if (!chequeado){
      basic.innerHTML = '19.99'
      professional.innerText = '24.99'
      master.innerText = '39.99'
     }else{
      basic.innerText = '199.99'
      professional.innerText = '249.99'
      master.innerText = '399.99'
     }

}

