document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const unitInput = document.getElementById('unitInput').value;
    const resultValue = document.getElementById('temperatureValue');
    const resultUnit = document.getElementById('temperatureUnit');

    if (isNaN(temperatureInput)) {
        resultValue.textContent = "Please enter a valid value.";
        resultUnit.textContent = ""; // Clear the unit
        return;
    }

    let convertedTemperature;
    let targetUnit;
    let z;

    if (unitInput === "Celsius") {
        convertedTemperature = (temperatureInput * 9/5) + 32; // Celsius to Fahrenheit
        targetUnit = "°F";
        z = temperatureInput + 273.15; // Celsius to Kelvin
    } else if (unitInput === "Fahrenheit") {
        convertedTemperature = (temperatureInput - 32) * 5/9; // Fahrenheit to Celsius
        targetUnit = "°C";
        z = convertedTemperature + 273.15; // Converted temperature to Kelvin
    } else if (unitInput === "Kelvin") {
        convertedTemperature = temperatureInput - 273.15; // Kelvin to Celsius
        targetUnit = "°C";
        convertedTemperature = (convertedTemperature * 9/5) + 32; // Celsius to Fahrenheit
        z = temperatureInput; // Kelvin stays the same
        targetUnit = "°F"; // Set to Fahrenheit for the output
    }

    resultValue.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${targetUnit}`;
    resultUnit.textContent = `(or ${z.toFixed(2)} K)`;
});
