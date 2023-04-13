window.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("counter");

  // function to increment counter
  function incrementCounter() {
    counter.textContent++;
  }

  //handle counter increment
  const interval = setInterval(incrementCounter, 1000);

  //function to minus counter by 1
  const minus = document.getElementById("minus");
  minus.addEventListener("click", () => {
    counter.textContent--;
  });

  //function to plus counter by 1
  const plus = document.getElementById("plus");
  plus.addEventListener("click", () => {
    counter.textContent++;
  });

  //function to like the counter
  const heart = document.getElementById("heart");
  const ul = document.querySelector(".likes");
  heart.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = counter.textContent;
    ul.appendChild(li);
  });

  //Function to add comment
  const commentDisplay = document.querySelector(".comments");
  const form = document.getElementById("comment-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const comment = form.querySelector("#comment-input");
    const p = document.createElement("p");
    p.textContent = comment.value;
    commentDisplay.appendChild(p);
    comment.value = "";
  });
});
