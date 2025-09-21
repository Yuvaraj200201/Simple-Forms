var name = document.getElementById("names");
var age = document.getElementById("age");
var male = document.getElementById("male");
var female = document.getElementById("female");
var course = document.getElementById("courses");
var email = document.getElementById("mail");



var list = document.getElementById("list");
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!form.checkValidity()) return;
  const tr = document.createElement("tr");
  tr.innerHTML = `
          <td>${names.value}</td>
          <td>${age.value}</td>
          <td>${male.checked ? "Male" : female.checked ? "Female" : ""}</td>
          <td>${course.value}</td>
          <td>${email.value}</td>
          <td>
            <button class="deleteBtn">Delete</button>
          </td>
        `;
  tr.querySelector(".deleteBtn").addEventListener("click", function () {
    tr.remove();
  });
  list.append(tr);
});
