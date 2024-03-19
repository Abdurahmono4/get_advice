const API = "https://api.adviceslip.com/advice";
const number = document.querySelector(".number");
const text = document.querySelector(".text");
console.log(API);
const adviceBtn = document.querySelector(".adviceBtn");
// Create a new function
async function clickBtn() {
  const res = await fetch(API);
  const data = await res.json();
  number.textContent = data.slip.id;
  text.textContent = data.slip.advice;
  console.log(data);
}
// click main button
adviceBtn.addEventListener("click", () => {
  clickBtn();
});
