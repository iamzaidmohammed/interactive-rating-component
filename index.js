const rates = document.querySelectorAll(".rate");
const rate1 = document.getElementById("rate1");
const rate2 = document.getElementById("rate2");
const rate3 = document.getElementById("rate3");
const rate4 = document.getElementById("rate4");
const rate5 = document.getElementById("rate5");

rate1.addEventListener("click", (e) => {
  if (
    rate2.classList.contains("clicked") ||
    rate3.classList.contains("clicked") ||
    rate4.classList.contains("clicked") ||
    rate5.classList.contains("clicked")
  ) {
    rate3.classList.remove("clicked");
    rate2.classList.remove("clicked");
    rate4.classList.remove("clicked");
    rate5.classList.remove("clicked");
    rate1.classList.add("clicked");
  } else {
    rate1.classList.toggle("clicked");
  }
});

rate2.addEventListener("click", (e) => {
  if (
    rate1.classList.contains("clicked") ||
    rate3.classList.contains("clicked") ||
    rate4.classList.contains("clicked") ||
    rate5.classList.contains("clicked")
  ) {
    rate1.classList.remove("clicked");
    rate3.classList.remove("clicked");
    rate4.classList.remove("clicked");
    rate5.classList.remove("clicked");
    rate2.classList.add("clicked");
  } else {
    rate2.classList.toggle("clicked");
  }
  //   rate2.classList.toggle("clicked");
});

rate3.addEventListener("click", (e) => {
  if (
    rate1.classList.contains("clicked") ||
    rate2.classList.contains("clicked") ||
    rate4.classList.contains("clicked") ||
    rate5.classList.contains("clicked")
  ) {
    rate1.classList.remove("clicked");
    rate2.classList.remove("clicked");
    rate4.classList.remove("clicked");
    rate5.classList.remove("clicked");
    rate3.classList.add("clicked");
  } else {
    rate3.classList.toggle("clicked");
  }
  //   rate3.classList.toggle("clicked");
});

rate4.addEventListener("click", (e) => {
  if (
    rate1.classList.contains("clicked") ||
    rate2.classList.contains("clicked") ||
    rate3.classList.contains("clicked") ||
    rate5.classList.contains("clicked")
  ) {
    rate1.classList.remove("clicked");
    rate2.classList.remove("clicked");
    rate3.classList.remove("clicked");
    rate5.classList.remove("clicked");
    rate4.classList.add("clicked");
  } else {
    rate4.classList.toggle("clicked");
  }
  //   rate4.classList.toggle("clicked");
});

rate5.addEventListener("click", (e) => {
  if (
    rate2.classList.contains("clicked") ||
    rate3.classList.contains("clicked") ||
    rate4.classList.contains("clicked") ||
    rate1.classList.contains("clicked")
  ) {
    rate1.classList.remove("clicked");
    rate2.classList.remove("clicked");
    rate3.classList.remove("clicked");
    rate4.classList.remove("clicked");
    rate5.classList.add("clicked");
  } else {
    rate5.classList.toggle("clicked");
  }
  //   rate5.classList.toggle("clicked");
});

// const rates = document.querySelectorAll(".rate");

// rates.forEach((rate) => {
//   rate.addEventListener("click", () => {
//     if (rate.classList.contains("clicked")) {
//       rate.classList.add("changeColor");
//     } else {
//       rate.classList.remove("changeColor");
//     }
//   });
// });
