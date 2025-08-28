const sideBtn = document.getElementById("sideBtn");
const asideBar = document.getElementById("asideBar");

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
