function sendMail(){
    let parms = {
        first: document.getElementById('first').value,
        last: document.getElementById('last').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        msg: document.getElementById('msg').value,
    }
    emailjs.send("service_jidteea","template_zz6cskd",parms);
}