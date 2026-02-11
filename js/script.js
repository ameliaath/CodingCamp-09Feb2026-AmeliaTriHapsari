// ===== WELCOME SPEECH =====
let userName = prompt("Masukkan nama anda:");

if (userName && userName.trim() !== "") {
  document.getElementById("welcomeText").innerText =
    "Hi " + userName + ", Welcome To Website";
}

// ===== FORM VALIDATION & SHOW RESULT =====
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

  // Format tanggal 
  let formattedDate = new Date(birthdate).toLocaleDateString();

  // Current time
  let currentTime = new Date().toString();

  document.getElementById("currentTime").innerText = currentTime;
  document.getElementById("resultName").innerText = name;
  document.getElementById("resultBirth").innerText = formattedDate;
  document.getElementById("resultGender").innerText = gender.value;
  document.getElementById("resultMessage").innerText = message;
});