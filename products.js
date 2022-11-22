//LAB 9-DATA STORAGE: PRODUCTS PAGE
window.onload = goLive;

function goLive(){
    var msgOut = document.getElementById("newMsgBox");
    // msgOut.innerHTML = "Welcome: " + name_f;

    // document.cookie = "f_name; max-age=600";
    // console.log(document.cookie);


    // var formHandle = document.forms.infoForm;
    // formHandle.onsubmit = storeValue;

    // function storeValue(){
    //     var name_f = formHandle.f_name.value;
    //     var color_f = formHandle.f_color.value;

    //     localStorage.setItem("name_f", name_f);
    //     localStorage.setItem("color_f",color_f);
    // }
    var getName = localStorage.getItem("name_f");
    var getColor = localStorage.getItem("color_f");

    if(getColor !== null){
        document.body.style.backgroundColor = getColor;
    }
    if (getName !== null){
        msgOut.innerHTML = " Welcome " + getName;
    }
}



// window.onload = function(){
   




// //     //
// //     document.cookie ="language=enca;max-age=10";
// //     console.log(document.cookie);
// //     //
// //    var nameCookie = document.cookie;
// //    outMsg.innerHTML = "Full cookie: " + nameCookie;

// //    var startIndex = nameCookie.indexOf("e=");
// //    outMsg.innerHTML+= "<br/>Foun at: " + startIndex;

// //    var f_name = nameCookie.substring(startIndex + 2);
// //    outMsg.innerHTML = "First Name stored in cookie: " + f_name;

// //    document.cookie = "favTeam=Raptors; max-age=3600;";
// //    outMsg.innerHTML = "Mulitple Cookie: " +document.cookie;
// //    console.log(document.cookie);

// //    var cookieArray = document.cookie.split(";")
// //    console.log(cookieArray);

// //    var teamKeyValue = cookieArray[1];
// //    outMsg.innerHTML+="<br/>cookieArray[1]: " +teamKeyValue;

// //    var team = teamKeyValue.split("=")[1];
// //    console.log("fav Team: " + team);

// //    var shortCut = cookieArray[1].split("=")[1];
// //    console.log("Shortcut to Team: " +shortCut);

// }

