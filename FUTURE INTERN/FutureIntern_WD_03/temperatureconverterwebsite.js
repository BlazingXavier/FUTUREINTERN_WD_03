document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const unitInput = document.getElementById('unitInput').value;
    const resultAreaValue = document.getElementById('temperatureValue');
    const resultAreaUnit = document.getElementById('temperatureUnit');

    if (isNaN(temperatureInput)) {
        resultAreaValue.textContent = "Please enter a valid number.";
        resultAreaUnit.textContent = ""; // Clear the unit
        return;
    }

    let convertedTemperature;
    let targetUnit;
    let kelvin;

    if (unitInput === "Celsius") {
        convertedTemperature = (temperatureInput * 9/5) + 32; // Celsius to Fahrenheit
        targetUnit = "°F";
        kelvin = temperatureInput + 273.15; // Celsius to Kelvin
    } else if (unitInput === "Fahrenheit") {
        convertedTemperature = (temperatureInput - 32) * 5/9; // Fahrenheit to Celsius
        targetUnit = "°C";
        kelvin = convertedTemperature + 273.15; // Celsius to Kelvin
    } else if (unitInput === "Kelvin") {
        convertedTemperature = temperatureInput - 273.15; // Kelvin to Celsius
        targetUnit = "°C";
        kelvin = (convertedTemperature * 9/5) + 32; // Celsius to Fahrenheit
    }

    resultAreaValue.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)}${targetUnit}`;
    resultAreaUnit.textContent = `(or ${kelvin.toFixed(2)} K)`;
});
