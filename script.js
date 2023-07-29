const inDay = document.querySelector(".day");
const inMonth = document.querySelector(".month");
const inYear = document.querySelector(".year");
const btn = document.querySelector(".button");
const outDay = document.querySelector(".day-output");
const outMonth = document.querySelector(".month-output");
const outYear = document.querySelector(".year-output");
const outError = document.querySelector(".error");

function ageFunction() {
  const day = inDay.value;
  const month = inMonth.value;
  const year = inYear.value;

  if (day < 0 || day > 31 || month < 0 || month > 12 || year < 0) {
    document.getElementById("error").innerHTML =
      "INCORRECT DATA PLEASE TRY AGAIN";
  } else {
    const birthDate = new Date(`${year}-${month}-${day}`);
    const currentDate = new Date();
    let ageInMilliseconds = currentDate - birthDate;
    let ageDate = new Date(ageInMilliseconds);
    let years = ageDate.getUTCFullYear() - 1970;
    let months = ageDate.getUTCMonth();
    let days = ageDate.getUTCDate() - 1;
    outYear.innerHTML = years + "  years";
    outMonth.innerHTML = months + "  months";
    outDay.innerHTML = days + "  days";
  }
}
btn.addEventListener("click", function () {
  ageFunction();
  outYear.style.color = "#83a7ed";
  outMonth.style.color = "#83a7ed";
  outDay.style.color = "#83a7ed";
});
