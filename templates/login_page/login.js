<!--

if(navigator.userAgent.indexOf("MSIE") >= 0 )
{
    document.write("Please use a sane browser ... Redirecting now!");    
    window.location = "http://www.mozilla.com/firefox/";
}

function msg(fld, msgtype, message)
{
    var dispmessage;
    dispmessage = message;
    //alert("msg function called!");
    var elem = document.getElementById(fld);
    elem.firstChild.nodeValue = message;  
    elem.className = "warn";   // set the CSS class to adjust appearance of message
}

function validate_username(field) {
    
    with (field) {    
 
        if (value==null||value=="") {
            msg("UsernameInfo", "error", "Required field cannot be left blank ");
            return false;
        }
        else {
            return true;
        }
    }   
}

function validate_password(field) {
    
    with (field) {    
 
        if (value==null||value=="") {
            msg("PasswordInfo", "error", "Required field cannot be left blank ");
            return false;
        }
        else {
            return true;
        }
    }   
}


function validateOnSubmit(thisform) {
    
    with (thisform) {
    
        //validate username
        validate_username(Username);
        
        //validate password
        validate_password(Password);
    }
    
    return false;
}



//-->