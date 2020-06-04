function fun(){
    var v1,v2;
    v1=document.getElementById("name").value;;
    v2=/^[A-Z][a-z]{5,12}$/;
    if(v2.test(v1)){
        window.alert('valid format  username');
    }
    else{
        window.alert('Invalid ....type again');
    }
        var v3=document.getElementById('pass').value;
        if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$]).{5,12}$/.test(v3))
        {
            window.alert('valid format password');

        }
        else{
            window.alert('Invalid format password');
        }
    }
