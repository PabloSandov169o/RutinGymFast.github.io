const dayButtons = document.querySelectorAll(".day-btn");
const dayMessage = document.getElementById("day-message");

// 👉 Variable donde se guardará el día seleccionado
let selectedDays = null;

dayButtons.forEach(button => {
  button.addEventListener("click", () => {
    const day = parseInt(button.dataset.day);

    // Quitar selección de todos los botones
    dayButtons.forEach(btn => btn.classList.remove("selected"));

    // Añadir selección al botón clicado
    button.classList.add("selected");

    // Guardar el día elegido en la variable
    selectedDays = day;
    console.log("Días seleccionados:", selectedDays); // Para que lo veas en consola

    // Mensajes según el día
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
