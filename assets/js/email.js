//Send Email function
function sendMail(contactForm) {
  emailjs.send("gmail", "F1MemoryGame", {
    "from_name": contactForm.name.value,
    "from_email": contactForm.emailaddress.value,
    "bug_report": contactForm.bugreport.value
  })
  .then(
    function(response) {
        console.log("SUCCESS", response);
    },
    function(error) {
        console.log("FAILED", error);
    }
);
return false;
}
