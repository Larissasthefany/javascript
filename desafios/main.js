function btn_click() {
    if(document.getElementById("user").value > document.getElementById("password").value){
        alert("Tudo ok!");
        return
        console.log("cadastro")
   }
   document.getElementById("cadastro").onsubmit();
}