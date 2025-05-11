function addNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Por favor, insira números válidos.";
    } else {
        const sum = num1 + num2;
        document.getElementById("result").textContent = `Resultado: ${sum}`;
    }
}
