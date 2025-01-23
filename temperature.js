document.getElementById("convertBtn").addEventListener("click", function() {
  let tempInput = document.getElementById("tempInput").value;
  let unitSelect = document.getElementById("unitSelect").value;
  let convertedTemp = document.getElementById("convertedTemp");

  // Validate input is a number
  if (isNaN(tempInput) || tempInput === "") {
    alert("Please enter a valid number!");
    return;
  }

  let result;
  
  // Convert the temperature based on the selected unit
  if (unitSelect === "Celsius") {
    result = convertToCelsius(tempInput);
  } else if (unitSelect === "Fahrenheit") {
    result = convertToFahrenheit(tempInput);
  } else if (unitSelect === "Kelvin") {
    result = convertToKelvin(tempInput);
  }

  // Display the result
  convertedTemp.textContent = `Converted Temperature: ${result.value} ${result.unit}`;
});

// Conversion functions
function convertToCelsius(temp) {
  let fahrenheit = (temp - 32) * 5/9;
  let kelvin = parseFloat(temp) + 273.15;
  return { value: fahrenheit.toFixed(2), unit: "°C" };
}

function convertToFahrenheit(temp) {
  let celsius = (temp * 9/5) + 32;
  let kelvin = (temp * 9/5) + 459.67;
  return { value: celsius.toFixed(2), unit: "°F" };
}

function convertToKelvin(temp) {
  let celsius = temp - 273.15;
  let fahrenheit = (temp - 273.15) * 9/5 + 32;
  return { value: parseFloat(temp).toFixed(2), unit: "K" };
}
