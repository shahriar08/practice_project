//load data to localstorage
if (JSON.parse(localStorage.getItem("data"))) {
  var sData = JSON.parse(localStorage.getItem("data"));
  for (i = 0; i < sData.length; i++) {
    var row = document.getElementById("table").insertRow();
    row.insertCell(0).innerHTML = sData[i].name;
    row.insertCell(1).innerHTML = sData[i].age;
    row.insertCell(2).innerHTML = sData[i].gender;
    row.insertCell(3).innerHTML = sData[i].city;
  }
}

// Set data to localstorage
function LocalDataStore() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;
  var city = document.getElementById("city").value;

  var dataData = {
    name: name,
    age: age,
    gender: gender,
    city: city,
  };
  if (!JSON.parse(localStorage.getItem("data"))) {
    localStorage.setItem("data", JSON.stringify([dataData]));
  } else {
    var localStorageData = JSON.parse(localStorage.getItem("data"));
    localStorageData.push(dataData);
    localStorage.setItem("data", JSON.stringify(localStorageData));
  }
}
