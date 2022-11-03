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
});

const rates = document.querySelectorAll(".rate");
const rateCard = document.getElementById("rate__card");
const selected = document.getElementById("selected");
const thankYouCard = document.getElementById("thank__you__card");
const submitBtn = document.getElementById("btn");

submitBtn.addEventListener("click", (e) => {
  if (
    rate1.classList.contains("clicked") ||
    rate2.classList.contains("clicked") ||
    rate3.classList.contains("clicked") ||
    rate4.classList.contains("clicked") ||
    rate5.classList.contains("clicked")
  ) {
    for (let rate = 0; rate < rates.length; rate++) {
      if (rates[rate].classList.contains("clicked")) {
        switch (rate) {
          case 0:
            selected.innerText = 1;
            break;
          case 1:
            selected.innerText = 2;
            break;
          case 2:
            selected.innerText = 3;
            break;
          case 3:
            selected.innerText = 4;
            break;
          case 4:
            selected.innerText = 5;
            break;

          default:
            break;
        }
      }
      // console.log(result);
    }
    console.log("it worked");
    rateCard.style.display = "none";
    thankYouCard.style.display = "block";
  }
});
