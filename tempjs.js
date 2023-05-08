function convert() {
    const temperature = document.getElementById("temperature").value;
    const fromUnit = document.getElementById("from").value;
    const toUnit = document.getElementById("to").value;
    let result;
  
    if (isNaN(temperature)) {
      document.getElementById("result").innerHTML = "Please enter a valid number";
      return;
    }
  
    if (fromUnit === "celsius") {
      if (toUnit === "fahrenheit") {
        result = (temperature * 1.8) + 32;
      } else if (toUnit === "kelvin") {
        result = temperature + 273.15;
      } else {
        result = temperature;
      }
    } else if (fromUnit === "fahrenheit") {
      if (toUnit === "celsius") {
        result = (temperature - 32) / 1.8;
      } else if (toUnit === "kelvin") {
        result = (temperature - 32) * 5 / 9 + 273.15;
      } else {
        result = temperature;
      }
    } else if (fromUnit === "kelvin") {
      if (toUnit === "celsius") {
        result = temperature - 273.15;
      } else if (toUnit === "fahrenheit") {
        result = (temperature - 273.15) * 1.8 + 32;
      } else {
        result = temperature;
      }
    }
  
    document.getElementById("result").innerHTML = `${temperature} ${fromUnit.toUpperCase()} = ${result.toFixed(2)} ${toUnit.toUpperCase()}`;
  }
  