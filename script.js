// table columns
var table = document.querySelector("#table");
var shiftDate = document.querySelector(".shift-date");
var employeeFirst = document.querySelector(".employee-first");
var employeeLast = document.querySelector(".employee-last");
var dept = document.querySelector(".dept");
var shiftStart = document.querySelector(".shift-start");
var shiftEnd = document.querySelector(".shift-end");
var shiftLength = document.querySelector(".shift-length");

// form input
var shiftDateInput = document.querySelector("#shift-date-input");
var deptInput = document.querySelector("#dept-input");
var employeeFirstInput = document.querySelector("#employee-first-input");
var employeeLastInput = document.querySelector("#employee-last-input");
var shiftStartInput = document.querySelector("#shift-start-input");
var shiftEndInput = document.querySelector("#shift-end-input");
var shiftLengthInput = document.querySelector("#shift-length-input");

// submit button
var addShiftButton = document.querySelector("#add-shift-button");

var firebaseConfig = {
    apiKey: "AIzaSyBKbvRnxPDc3bcXwLD0QI-N2tDL5re21tk",
    authDomain: "employee-scheduler-f95d7.firebaseapp.com",
    databaseURL: "https://employee-scheduler-f95d7.firebaseio.com",
    projectId: "employee-scheduler-f95d7",
    storageBucket: "employee-scheduler-f95d7.appspot.com",
    messagingSenderId: "966902632080",
    appId: "1:966902632080:web:5512c0d69789a1011c9215",
    measurementId: "G-50MK3QSY47"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var shifts = firebase.database();

addShiftButton.addEventListener("click", (e) => {
    e.preventDefault();
    var newShift = {
        date: shiftDateInput.value,
        dept: deptInput.value,
        firstName: employeeFirstInput.value,
        lastName: employeeLastInput.value,
        start: shiftStartInput.value,
        end: shiftEndInput.value,
        length: shiftLengthInput.value
    }
    console.log(newShift);

    shifts.ref().push(newShift);

    shiftDateInput.value="";
    deptInput.value="";
    employeeFirstInput.value="";
    employeeLastInput.value="";
    shiftStartInput.value="";
    shiftEndInput.value="";
    shiftLengthInput.value="";
});

shifts.ref().on("child_added", function(childSnapshot, prevChildKey){
    console.log(childSnapshot.val());

    var shiftDate = childSnapshot.val().date;
    var shiftDept = childSnapshot.val().dept;
    var empFirst = childSnapshot.val().firstName;
    var empLast = childSnapshot.val().lastName;
    var empStart = childSnapshot.val().start;
    var empEnd = childSnapshot.val().end;
    var empLength = childSnapshot.val().length;

    var newRow = table.insertRow(-1);
    var newDate = newRow.insertCell(0).innerHTML = shiftDate;
    var newFirst = newRow.insertCell(1).innerHTML = empFirst;
    var newLast = newRow.insertCell(2).innerHTML = empLast;
    var newDept = newRow.insertCell(3).innerHTML = shiftDept;
    var newStart = newRow.insertCell(4).innerHTML = empStart;
    var newEnd = newRow.insertCell(5).innerHTML = empEnd;
    var newLength = newRow.insertCell(6).innerHTML = empLength;

});
