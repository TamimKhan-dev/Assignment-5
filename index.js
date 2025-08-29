const sideBtn = document.getElementById("sideBtn");
const asideBar = document.getElementById("asideBar");
const heartCount = document.getElementById('heartCount');
const hearts = document.getElementsByClassName('fa-heart');

for (let heart of hearts) {
  heart.addEventListener('click', (e) => {
    e.preventDefault();
    heartCount.innerText = parseInt(heartCount.innerText) + 1;
    if (heart.classList.contains('fa-regular')) {
      heart.classList.toggle('fa-solid');
      heart.classList.toggle('text-red-500');
    } 
  });
};


sideBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (asideBar.classList.contains("hidden")) {
    asideBar.classList.remove("hidden");
    asideBar.classList.add("absolute", "top-12", "right-12", "w-2/3", "min-h-[700px]", 'shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]');
  } else {
    asideBar.classList.add("hidden");
    asideBar.classList.remove("absolute", "top-12", "right-12", "w-[250px]", "h-[250px]", 'shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]');
  }
});
