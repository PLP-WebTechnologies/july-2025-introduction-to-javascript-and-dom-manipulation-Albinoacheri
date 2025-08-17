// ===============================
// Part 1: Variables & Conditionals
// ===============================
let userLoggedIn = false;
let userName = "";

// Conditional check
if (!userLoggedIn) {
  console.log("User is not logged in.");
} else {
  console.log("Welcome back!");
}

// ===============================
// Part 2: Custom Functions
// ===============================

// Function 1: Change welcome text dynamically
function changeWelcome() {
  document.getElementById("welcome-text").textContent =
    "Keep learning and growing with Unity!";
}

// Function 2: Greet user based on input
function greetUser() {
  userName = document.getElementById("username").value;
  if (userName.trim() !== "") {
    document.getElementById("greeting").textContent = "Hello, " + userName + "! 🎉";
    userLoggedIn = true;
  } else {
    document.getElementById("greeting").textContent = "Please enter your name.";
  }
}

// ===============================
// Part 3: Loops
// ===============================

const courses = ["Web Development", "Graphic Design", "Digital Marketing", "Python Basics"];

function listCourses() {
  let list = document.getElementById("course-list");
  list.innerHTML = ""; // Clear old list

  // Loop 1: For loop
  for (let i = 0; i < courses.length; i++) {
    let li = document.createElement("li");
    li.textContent = courses[i];
    list.appendChild(li);
  }

  // Loop 2: For...of loop (just for console demo)
  for (let course of courses) {
    console.log("Available course:", course);
  }
}


