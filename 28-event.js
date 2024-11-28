function demo() {
  console.log("Hey you clicked me...");
}

const techSkill = document.querySelector("#techSkill");

techSkill.addEventListener("click", () => {
  console.log("Hello..  My buddy ");
});

const alertPara = document.querySelector("#alert");

alertPara.addEventListener("click", () => {
  alert("This is alert");
});

const promptPara = document.querySelector("#prompt");

promptPara.addEventListener("click", () => {
  const input = prompt("Please enter number to get Square", 1);

  const square = input * input;

  console.log(square);

  alert(square);
});

const confirmPara = document.querySelector("#confirm");

confirmPara.addEventListener("click", () => {
  const confirmResult = confirm(
    "Are you sure, you want to submit information ?"
  );

  alert(confirmResult);

  console.log(confirmResult);
});
