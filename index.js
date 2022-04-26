// var selectedRow = null;

// function LocalDataStore(e) {
//   e.preventDefault();
//   var formData = readFormData();
//   if (selectedRow == null) insertNewRecord(formData);
//   else updateRecord(formData);
//   resetForm();
// }

// function readFormData() {
//   var formData = {};
//   formData["name"] = document.getElementById("name").value;
//   formData["age"] = document.getElementById("age").value;
//   formData["gender"] = document.getElementById("gender").value;
//   formData["city"] = document.getElementById("city").value;
//   return formData;
// }

// function insertNewRecord(data) {
//   var table = document.getElementById("table").getElementsByTagName("tbody")[0];
//   var newRow = table.insertRow(table.length);
//   cell1 = newRow.insertCell(0);
//   cell1.innerHTML = data.name;
//   cell2 = newRow.insertCell(1);
//   cell2.innerHTML = data.age;
//   cell3 = newRow.insertCell(2);
//   cell3.innerHTML = data.gender;
//   cell4 = newRow.insertCell(3);
//   cell4.innerHTML = data.city;
//   cell4 = newRow.insertCell(4);
//   cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>`;
// }

// function resetForm() {
//   document.getElementById("name").value = "";
//   document.getElementById("age").value = "";
//   document.getElementById("gender").value = "";
//   document.getElementById("city").value = "";
//   selectedRow = null;
// }

// function onEdit(td) {
//   selectedRow = td.parentElement.parentElement;
//   document.getElementById("name").value = selectedRow.cells[0].innerHTML;
//   document.getElementById("age").value = selectedRow.cells[1].innerHTML;
//   document.getElementById("gender").value = selectedRow.cells[2].innerHTML;
//   document.getElementById("city").value = selectedRow.cells[3].innerHTML;
// }
// function updateRecord(formData) {
//   selectedRow.cells[0].innerHTML = formData.name;
//   selectedRow.cells[1].innerHTML = formData.age;
//   selectedRow.cells[2].innerHTML = formData.gender;
//   selectedRow.cells[3].innerHTML = formData.city;
// }

// //load data to localstorage

let tableData1 = {
  name: "",
  age: "",
  gender: "",
  city: "",
  // obj: { name: name, age: age, gender: gender, city: city },
};

if (JSON.parse(localStorage.getItem("data"))) {
  var sData = JSON.parse(localStorage.getItem("data"));
  for (i = 0; i < sData.length; i++) {
    var row = document.getElementById("table").insertRow();
    row.insertCell(0).innerHTML = sData[i].name;
    row.insertCell(1).innerHTML = sData[i].age;
    row.insertCell(2).innerHTML = sData[i].gender;
    row.insertCell(3).innerHTML = sData[i].city;

    // var actionCell = row.insertCell(4);
    row.insertCell(4).innerHTML =
      "<button id='button' onCLick='tableText()'>Edit</button>";
  }
}

// Set data to localstorage
function LocalDataStore(index) {
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

  document.getElementById("btn").innerHTML === "Update Old Data" &&
    updateOldData();

  if (!JSON.parse(localStorage.getItem("data"))) {
    localStorage.setItem("data", JSON.stringify([dataData]));
  } else {
    var localStorageData = JSON.parse(localStorage.getItem("data"));
    localStorageData.push(dataData);
    localStorage.setItem("data", JSON.stringify(localStorageData));
  }

  function updateOldData() {
    var sData = JSON.parse(localStorage.getItem("data"));
    localStorage.clear();
    sData.map((element, index) => {
      element.name =
        element.name === tableData1.name
          ? document.getElementById("name").value
          : element.name;
    });
    localStorage.setItem("data", JSON.stringify(sData));
    location.reload();
  }
}

var table = document.getElementById("table");
if (table) {
  for (var i = 0; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      tableText(this);
    };
  }
}
function tableText(tableRow) {
  let btn1 = document.getElementById("btn");
  // btn1.style.display = "none";
  btn1.innerHTML = "Update Old Data";
  btn1.setAttribute("class", "btn btn-danger");

  let nameInput = document.getElementById("name");
  let ageInput = document.getElementById("age");
  let genderInput = document.getElementById("gender");
  let cityInput = document.getElementById("city");

  // btn1.setAttribute("onclick", "update2()");

  tableData1.name = tableRow.childNodes[0].innerHTML;
  tableData1.age = tableRow.childNodes[1].innerHTML;
  tableData1.gender = tableRow.childNodes[2].innerHTML;
  tableData1.city = tableRow.childNodes[3].innerHTML;
  // obj: { name: name, age: age, gender: gender, city: city },

  nameInput.value = tableData1.name;
  ageInput.value = tableData1.age;
  genderInput.value = tableData1.gender;
  cityInput.value = tableData1.city;
  console.log(tableData1);

  // if(tableData1){

  // }
  // const btn = document.getElementById("btn");
  // btn.addEventListener("click", function handleClick() {
  //   btn.textContent = "button clicked";
  //   console.log(
  //     "🚀 ~ file: index.js ~ line 76 ~ handleClick ~ btn.textContent ",
  //     btn
  //   );
  // });
}
// if (!JSON.parse(localStorage.getItem("data"))) {
//   localStorage.setItem("data", JSON.stringify([tableData1]));
// } else {
//   var localStorageData = JSON.parse(localStorage.getItem("data"));
//   localStorageData.push(tableData1);
//   localStorage.setItem("data", JSON.stringify(localStorageData));
// }

// function editButton() {
//   document.getElementById("button").disabled = true;
//   document.getElementById("button").disabled = false;
// }

// function getData() {
//   var arr = JSON.parse(localStorage.getItem("data"));
//   return arr;
// }
// function EditData(index) {
//   var row = getData();
//   document.getElementById("name").value = row.cells[0].innerHTML;
//   document.getElementById("age").value = row.cells[1].innerHTML;
//   document.getElementById("gender").value = row.cells[2].innerHTML;
//   document.getElementById("city").value = row.cells[3].innerHTML;
// }

// function updateRecord(formData) {
//   row.cells[0].innerHTML = formData.name;
//   row.cells[1].innerHTML = formData.age;
//   row.cells[2].innerHTML = formData.gender;
//   row.cells[3].innerHTML = formData.city;
// }
