let heart = document.querySelector(".heart");
let save = document.querySelector(".save");
let saved = document.querySelector(".saved");
let like = document.querySelector(".like");
let fill_heart = document.querySelector(".fill_heart");
let fill_save = document.querySelector(".fill_save");
let fill_comment = document.querySelector(".fill_comment");
let savePost = document.querySelector(".savePost");
let comment = document.querySelector(".comment");
let add = document.querySelector(".add");
let add1 = document.querySelector("#add");
let follow = document.querySelector(".f1");
let rebort = document.querySelector(".f2");
let person = document.querySelector(".person");
let following = document.querySelector(".following");
let personf = document.querySelector(".personf");
let side = document.querySelector(".side");
likeCounter = 0;

////////////////////////////////////////// heart//////////////////////////////////////////////////
heart.addEventListener("click", (e) => {
  heart.classList.toggle("fa-solid");

  heart.classList.toggle("fa-regular");
  if (heart.classList.contains("fa-solid")) {
    likeCounter++;
    like.innerHTML = likeCounter + " Likes";
    // heart.style.color = "red";
    heart.classList.add("fill_heart");
  } else {
    likeCounter--;
    like.innerHTML = likeCounter + " Likes";
    heart.classList.remove("fill_heart");
  }
});

// ////////////////////////////////////// save//////////////////////////////////////////////////

function SaveP() {
  saved.style.display = "none";
}

save.addEventListener("click", (e) => {
  save.classList.toggle("fa-solid");
  save.classList.toggle("fa-regular");
  if (save.classList.contains("fa-solid")) {
    saved.style.display = "block";
    myTimeout = setTimeout(SaveP, 2000);
  }
});
////////////////////////////////////// comment//////////////////////////////////////////////////
comment.addEventListener("click", (e) => {
  comment.classList.toggle("fa-solid");
  comment.classList.toggle("fa-regular");
  if (comment.classList.contains("fa-solid")) {
    window.location = "#add";
  }
});

follow.addEventListener("click", (e) => {
  person.style.border = "1px solid green";
});
rebort.addEventListener("click", (e) => {
  person.style.border = "1px solid red";
});

side.addEventListener("click", (e) => {
  let pressed = e.target;
  if (pressed.localName == "p" && pressed.className == "following") {
    let parent = pressed.parentElement;
    let img = parent.children[0];

    if (img.classList.contains("followed")) {
      img.classList.remove("followed");
      pressed.innerHTML = "follow";
    } else {
      img.classList.add("followed");
      pressed.innerHTML = "following";
    }
  }
});
