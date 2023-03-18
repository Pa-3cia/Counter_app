const mainTitle = document.getElementById("title");
let count = 0;
mainTitle.textContent = 0;
const btnIncrement = document.getElementById("increment");
const btnReset = document.getElementById("reset");
const btnDecrement = document.getElementById("decrement");

const incrementFn = 
() => {
   console.log("debt")
count++;
mainTitle.textContent = count;
}

btnIncrement.addEventListener("click", incrementFn
);

btnDecrement.addEventListener("click", () => {
   count--;
   mainTitle.textContent = count;
   });

   btnReset.addEventListener("click", () => {
      count = 0;
      mainTitle.textContent = count;
      });


