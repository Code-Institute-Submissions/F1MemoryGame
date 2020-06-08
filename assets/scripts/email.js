//Send Email function
function sendMail(contactForm) {
  emailjs.send("gmail", "F1MemoryGame", {
    "from_name": contactForm.name.value,
    "from_email": contactForm.emailaddress.value,
    "bug_report": contactForm.bugreport.value
  })
  .then(
    function(response) {
        $("#contact-form").slideUp("slow")
        $('#success').addClass('visible')
    },
    function(error) {
        $("#contact-form").slideUp("slow")
        $('#failed').addClass('visible')
    }
);
return false;
}
