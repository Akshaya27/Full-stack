   function fun(){
               var v1,v2;
               v1= document.getElementById("a1").value;
                 v2=/^[A-Z][a-z]{5,12}$/;
                if(v2.test(v1)){
                    window.alert('valid format first name');
                }
                else{
                    window.alert('Invalid');
                }
                var v3,v4;
                v3= document.getElementById("a2").value;
                v4= /^[+][9][1][6-9][0-9]{9}$/;
                if(v4.test(v3)){
                    window.alert('valid format for phone number');
                }
                else{
                    window.alert('Invalid format for phone number');
                }
            }