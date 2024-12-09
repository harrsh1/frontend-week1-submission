document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const icon = document.getElementById('eye-icon');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeicon.src = 'open-eye.png';
        
    } else {
        passwordField.type = 'password';
        eyeicon.src = 'close-eye.png';
       
    }
});


const blurContainer = document.querySelector('.blur-main-container');

    if (blurContainer) {
        blurContainer.style.transition = 'backdrop-filter 0.5s ease-in-out'; 
        blurContainer.addEventListener('mouseover', () => {
            blurContainer.style.backdropFilter = 'blur(50px)'; 
        });
        blurContainer.addEventListener('mouseout', () => {
            blurContainer.style.backdropFilter = 'blur(25px)';
        });
    }

    const blurnavbar = document.querySelector('.nav-bar');
    if (blurnavbar) {
        blurnavbar.style.transition = 'backdrop-filter 0.5s ease-in-out'; 
        blurnavbar.addEventListener('mouseover', () => {
            blurnavbar.style.backdropFilter = 'blur(50px)'; 
        });
        blurnavbar.addEventListener('mouseout', () => {
            blurnavbar.style.backdropFilter = 'blur(25px)';
        });
    }    

    function submit_email() {
        if (document.getElementById("Username").value !== "" && document.getElementById("Username").value.includes("@gmail.com") && document.getElementById("password").value !== "") {
            alert("Logged in successfully!");
        }else if (document.getElementById("Username").value !== "" && document.getElementById("password").value !== ""){
            alert("Enter a valid gmail and password!");
        }
    }

