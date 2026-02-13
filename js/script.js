let userName = prompt("Masukkan nama anda:");

if (userName && userName.trim() !== "") {
  document.getElementById("welcomeText").innerText =
    "Hi " + userName + ", Welcome To Website";
}

document.getElementById("messageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let birthdate = document.getElementById("birthdate").value;
  let message = document.getElementById("messageText").value.trim();
  let gender = document.querySelector('input[name="gender"]:checked');

  if (!name || !birthdate || !message || !gender) {
    alert("Semua field harus diisi!");
    return;
  }
  
  let formattedDate = new Date(birthdate).toLocaleDateString();

  let currentTime = new Date().toString();

  document.getElementById("currentTime").innerText = currentTime;
  document.getElementById("resultName").innerText = name;
  document.getElementById("resultBirth").innerText = formattedDate;
  document.getElementById("resultGender").innerText = gender.value;
  document.getElementById("resultMessage").innerText = message;
});

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;

    if (top < trigger) {
      section.classList.add("show");
    }
  });
});

window.dispatchEvent(new Event("scroll"));