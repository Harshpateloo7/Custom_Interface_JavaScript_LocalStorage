//LAB 9-DATA STORAGE: INDEX PAGE
window.onload = goLive;

function goLive(){
    var msgOut = document.getElementById("newMsgBox");
    
    // Not the part of Program
    // msgOut.innerHTML = "Welcome: " + name_f;
    // document.cookie = "name_f; max-age=600";
    // console.log(document.cookie);
    // document.cookie ="color_f; max-age=600";
    // console.log(document.cookie); 


    var formHandle = document.forms.infoForm;
    formHandle.onsubmit = storeValue;
    //STore value funcation for the storing value of Name and color
    function storeValue(){
        var name_f = formHandle.f_name.value;
        var color_f = formHandle.f_color.value;
        // Set the value on local storage
        localStorage.setItem("name_f", name_f);
        localStorage.setItem("color_f",color_f);
    }
    // Get the value from user and store in local storage
    var getName = localStorage.getItem("name_f");
    var getColor = localStorage.getItem("color_f");
    // checking if color and name if not equal to null 
    if(getColor !== null){
        document.body.style.backgroundColor = getColor;
    }
    if (getName !== null){
        msgOut.innerHTML = " Welcome " + getName;
    }
    // Detele storage value function
    var del = document.getElementById("btnDel");
    del.onclick = removeI;
    
    function removeI(){
    window.location.reload(); 
    localStorage.removeItem("name_f");
    localStorage.removeItem("color_f");
      
    }

}
