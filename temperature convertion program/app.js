document.getElementById("submitButton").onclick = function () {
  let temp = document.getElementById("temperature").value;
  temp = Number(temp);

  if (document.getElementById("cBtn").checked) {
    temp = toCelcius(temp);
    document.getElementById("tempLabel").innerHTML = temp + "°C";
  } else if (document.getElementById("fBtn").checked) {
    temp = toFahrenheit(temp);
    document.getElementById("tempLabel").innerHTML = temp + "°F";
  } else {
    document.getElementById("tempLabel").innerHTML = "Select a unit";
  }
};

function toCelcius(temp) {
  return (temp - 32) * (5 / 9);
}

function toFahrenheit(temp) {
  return (temp * 9) / 5 + 32;
}
