if (JSON.parse(localStorage.getItem("task"))) {
    var sData = JSON.parse(localStorage.getItem("task"));
    for (i = 0; i < sData.length; i++) {
      var row = document.getElementById("table").insertRow();
      row.insertCell(0).innerHTML = sData[i].name;
      row.insertCell(1).innerHTML = sData[i].age;
      row.insertCell(2).innerHTML = sData[i].gender;
      row.insertCell(3).innerHTML = sData[i].city;
    }
  }

  // Store data to local storage
  function LocalDataStore() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var city = document.getElementById("city").value;

    var taskData = {
      name: name,
      age: age,
      gender: gender,
      city: city,
    };
    if (!JSON.parse(localStorage.getItem("task"))) {
      localStorage.setItem("task", JSON.stringify([taskData]));
    } else {
      var localStorageData = JSON.parse(localStorage.getItem("task"));
      localStorageData.push(taskData);
      localStorage.setItem("task", JSON.stringify(localStorageData));
    }
  }