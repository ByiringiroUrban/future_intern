// Popup for additional information
function showPopup(type) {
  const data = {
      education: "Bachelor's degree in Software Engineering, Adventist University of Central Africa(AUCA) (2023 - Present).",
      certifications: "CCNA Routing and Switching, Digital Marketing, ALX Visual Assistant, Udacity Programming Fundamentals.",
      "work-experience": "Instructor and Project Coordinator, January 2023 - Present.",
      skills: "Proficient in React JS, Node.js, HTML, CSS, MySQL, C, and MongoDB.",
      achievements: "Developed robotics projects addressing public health challenges., WISE Academy founder",
      hobbies: "Coding, participating in hackathons, and contributing to open-source.",
      references: "References available upon request."
  };

  const popup = document.getElementById("popup");
  const popupData = document.getElementById("popup-data");
  popupData.textContent = data[type] || "No data available.";
  popup.classList.remove("hidden");
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.classList.add("hidden");
}

// Photo popup
function showPhotoPopup(photoSrc) {
  const popup = document.getElementById("photo-popup");
  const popupPhoto = document.getElementById("popup-photo");
  popupPhoto.src = photoSrc;
  popup.classList.remove("hidden");
}

function closePhotoPopup() {
  const popup = document.getElementById("photo-popup");
  popup.classList.add("hidden");
}


