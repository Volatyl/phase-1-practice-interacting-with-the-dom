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

  heart.addEventListener("click", () => {
    const ul = document.querySelector(".likes");
    const snap = counter.textContent;
    const likedNum = [...ul.children].map((a) => a.dataset.num);
    if (likedNum.includes(snap)) {
      console.log(likedNum);
    } else {
    }
    const li = document.createElement("li");
    li.textContent = counter.textContent;
    ul.appendChild(li);
  });


 /*  heart.addEventListener("click", () => {
   
    let counterValue = counter.textContent;;
    const likedItems = toArray(likesList.children).map(item => parseInt(item.dataset.num));
    if (likedItems.includes(counterValue)) {
      const likedItem = document.querySelector(`[data-num="${counterValue}"]`);
      let likedCount = parseInt(likedItem.children[0].innerText);
      likedItem.innerHTML = `${counterValue} has been liked <span>${likedCount + 1}</span> times`;
    } else {
      const newItem = document.createElement("li");
      newItem.setAttribute("data-num", counterValue);
      newItem.innerHTML = `${counterValue} has been liked <span>1</span> time`;
      likesList.appendChild(newItem);
    }
  }); */


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
