


var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

function getValues() {
    regEmail = document.getElementById("regEmail").value;
    regPass = document.getElementById("regPass").value;
    regAddr = document.getElementById("regAddr").value;
    regCity = document.getElementById("regCity").value;
    regZip = document.getElementById("regZip").value;

}

function register() {
    getValues();

    if (regEmail.trim() === "") {
        alert("Please enter your email");
    } else {
        if (regPass.trim() === "") {
            alert("Please enter your password")
        } else {
            if (regAddr.trim() === "") {
                alert("Please enter your address")
            } else {
                if (regCity.trim() === "") {
                    alert("Please enter your city")
                } else {
                    if (regZip.trim() === "") {
                        alert("Please enter your postal code")
                    } else {
                        if (regex.test(regEmail) == false) {
                            alert("Please enter a valid email")
                        } else {
                            //const auth = getAuth();
                            createUserWithEmailAndPassword(regEmail, regPass)
                                .then((userCredential) => {
                                    // Signed up 
                                    const user = userCredential.user;
                                    // ...
                                })
                                .catch((error) => {
                                    const errorCode = error.code;
                                    const errorMessage = error.message;
                                    // ..
                                    if (errorCode === 'auth/email-already-in-use') {
                                        alert('Email already in use!');
                                        } else {
                                        alert(errorMessage);
                                        }
                                        console.log(error);
                                }
                                    
                                );
                        }
                    }
                }
            }
        }
    }
}