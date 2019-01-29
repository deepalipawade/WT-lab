function validate()	{
				var p = document.getElementById("pass").value;
				var f = document.getElementById("fname").value;
				var l = document.getElementById("lname").value;
				var n = p.length;
				if(f==="")
				alert("Enter name");
				else if(l==="")
				alert("Enter last name");
				else if(p==="")
				alert("Enter Password");
				else if (!/^[a-zA-Z0-9]+$/.test(p) && p.includes("@") && n>=5) {
    				alert(f +" , You Have Successfully Registered ");
    			}
				else 
				alert("incorrect Password ");
			
			}
