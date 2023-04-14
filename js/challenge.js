const counter = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");

window.addEventListener("DOMContentLoaded", () => {
  // function to increment counter
  function incrementCounter() {
    counter.textContent++;
  }

  //handle counter increment
  const interval = setInterval(incrementCounter, 1000);

  //function to minus counter by 1
  minus.addEventListener("click", () => {
    counter.textContent--;
  });

  //function to plus counter by 1
  plus.addEventListener("click", () => {
    counter.textContent++;
  });

  //function to like the counter
  const obj = {};
  const ul = document.querySelector(".likes");
  heart.addEventListener("click", () => {
    let currentCount = counter.textContent;
    if (Object.keys(obj).includes(currentCount)) {
      obj[currentCount] += 1;
      document.querySelector(`#count-${currentCount}`).textContent =
        obj[currentCount];
    } else {
      obj[currentCount] = 1;
      const li = document.createElement("li");
      let txt = `${currentCount} has been liked <span id='count-${currentCount}'>${obj[currentCount]}</span> times`;
      li.innerHTML = txt;
      ul.appendChild(li);
    }
  });

  //Function to add comment
  const commentDisplay = document.querySelector(".comments");
  const form = document.getElementById("comment-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const comment = form.querySelector("#comment-input");
    const p = document.createElement("p");
    const snap = comment.value;
    console.log(snap);
    p.textContent = snap;

    commentDisplay.appendChild(p);
    comment.value = "";
  });
});
