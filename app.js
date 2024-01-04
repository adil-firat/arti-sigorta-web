const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});




function validateAndSendEmail() {
  var userAge = document.getElementById('userAge').value;
  var userPhoneNumber = document.getElementById('userPhoneNumber').value;
  var userEmail = document.getElementById('userEmail').value;

  if (userAge == "" || userPhoneNumber == "" || userEmail == "") {
      alert("All fields are required!");
      return false;
  }

  var toEmail = "adilzero444@gmail.com"; //Replace with your email
  var subject = "Artı Sigorta Web Sitesinden Bir Yeni Mesaj";
  var emailBody = "User Age: " + userAge + "\nUser Phone Number: " + userPhoneNumber + "\nUser Email: " + userEmail;
  

  window.location.href = "mailto:" + toEmail + "?subject=" + subject + "&body=" + emailBody;

}

  // Teklif hesaplandıktan sonra sonucu ekrana gösterelim.
  var quoteResult = "Merhaba, " + name + "! Sigorta teklifiniz hesaplandı. Teklifimiz en kısa sürede e-posta adresinize gönderilecektir.";
  document.getElementById("quoteResult").textContent = quoteResult;


  let fullName = prompt("Bizi Nereden Duydunuz ? ")
  let title = document.querySelector("#title")
  title.innerHTML =  `${title.innerHTML} <small style="color:red">${fullName}</small>`
  document.getElementById("title").style.display = "none"
