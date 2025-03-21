let passcode = "";
const correctPasscode = "032321";
const dots = document.querySelectorAll(".dot");

function enterDigit(digit) {
  if (passcode.length < 6) {
    passcode += digit;
    updateDots();
  }
}

function clearPasscode() {
  passcode = passcode.slice(0, -1);
  updateDots();
}

function updateDots() {
  dots.forEach((dot, index) => {
    if (index < passcode.length) {
      dot.classList.add("filled");
    } else {
      dot.classList.remove("filled");
    }
  });
}

function checkPasscode() {
  let message = document.getElementById("message");

  if (passcode === correctPasscode) {
    message.style.color = "lightgreen";
    message.innerText = "Welcomeee babyy!";
    setTimeout(() => {
      window.location.href = "landing.html";
    }, 1000);
  } else {
    message.style.color = "red";
    message.innerText = "Enggkk: Hint: It's our aniv";
  }
  setTimeout(() => {
    message.innerText = "";
  }, 1000);
  passcode = "";
  updateDots();
}
