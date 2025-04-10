// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });
}

// Form Validation and Greeting (used only on contact.html)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const subject = document.getElementById("subjectInput").value.trim();
    const message = document.getElementById("messageInput").value.trim();

    if (!name || !email || !subject || !message) {
      alert("Please fill out all fields.");
    } else {
      document.getElementById("response").innerText = `Thanks, ${name}. We'll get back to you soon!`;
      e.target.reset();
    }
  });
}

// Fetch API to Load Custom Team Members
const loadUsersBtn = document.getElementById("loadUsersBtn");
if (loadUsersBtn) {
  loadUsersBtn.addEventListener("click", () => {
    const teamMembers = ["Kunda Mwandu", "Moses Mwale", "Bupe Mwape"];
    const userList = document.getElementById("userList");
    userList.innerHTML = "";
    teamMembers.forEach((name) => {
      const li = document.createElement("li");
      li.textContent = name;
      userList.appendChild(li);
    });
  });
}

// FAQ Toggle
const questions = document.querySelectorAll(".question");
questions.forEach((q) => {
  q.addEventListener("click", () => {
    q.nextElementSibling.classList.toggle("visible");
  });
});
// Back to Top Button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
