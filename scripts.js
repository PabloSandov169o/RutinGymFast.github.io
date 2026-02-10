const dayButtons = document.querySelectorAll(".day-btn");
const dayMessage = document.getElementById("day-message");

dayButtons.forEach(button => {
  button.addEventListener("click", () => {
    const day = parseInt(button.dataset.day);

    if (day === 3 || day === 6) {
      dayMessage.textContent = "✅ Recomendado";
      dayMessage.style.color = "green";
    } 
    else if (day === 1 || day === 7) {
      dayMessage.textContent = "⚠️ No recomendado";
      dayMessage.style.color = "red";
    } 
    else {
      dayMessage.textContent = "";
    }
  });
});
