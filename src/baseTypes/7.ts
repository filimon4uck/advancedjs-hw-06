// import { concatenation } from "./concatenation";

// const button = document.querySelector("button")!;
// const input = document.querySelector("input")!;

// if (button && input) {
//   button.addEventListener("click", () => {
//     concatenation(input.value, "hello!");
//   });
// }
// enum hello {}

/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DaysOfWeek {
  Monday = "false",
  Tuesday = "false",
  Wendesday = "false",
  Thirsday = "false",
  Friday = "false",
  Suturday = "true",
  Sunday = "true",
}

function isWeekend(day: string): boolean {
  return DaysOfWeek[day] === "true";
}
