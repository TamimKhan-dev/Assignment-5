const sideBtn = document.getElementById("sideBtn");
const asideBar = document.getElementById("asideBar");
const heartCount = document.getElementById('heartCount');
const hearts = document.getElementsByClassName('fa-heart');
const copyBtns = document.getElementsByClassName('copyBtns');
const copyCount = document.getElementById('copyCount');
const callBtns = document.getElementsByClassName('callBtns');
const availableCoins = document.getElementById('availableCoins');
const historyContainer = document.getElementById('historyContainer');
const clearBtn = document.getElementById('clearBtn');

clearBtn.addEventListener('click', (e) => {
  e.preventDefault();

  historyContainer.innerHTML = '';
});

for (let callBtn of callBtns) {
  callBtn.addEventListener('click', (e) => {
    e.preventDefault();

    function getTime() {
      const now = new Date();

      let hours = now.getHours();
      const minute = now.getMinutes();
      const second = now.getSeconds();
      
      const amPm = hours >= 12 ? 'PM' : 'AM';
      hours = (hours % 12 || 12).toString().padStart(2, '0');

      return `${hours}:${minute}:${second} ${amPm}`;
    }

    if (parseInt(availableCoins.innerText) >= 20) {
       availableCoins.innerText = parseInt(availableCoins.innerText) - 20;

       let cardContainer = callBtn.parentElement.parentElement;
       const h2 = cardContainer.querySelector('h2');
       const h3 = cardContainer.querySelector('h3');
       alert('Calling');
      historyContainer.innerHTML += `
            <div class="flex justify-between items-center bg-gray-200 p-3 rounded-lg mb-3">
                <div>
                    <h2 class="text-lg font-semibold">${h2.innerText}</h2>
                    <p>${h3.innerText}</p>
                </div>

                <p>${getTime()}</p>
            </div>
      `
    } else {
      alert('Insuffient Coins')
    }
    
  });
}

for (let btn of copyBtns) {
  btn.addEventListener("click", () => {

    let card = btn.parentElement;
    while (card && !card.querySelector("h3")) {
      card = card.parentElement;
    }

    const number = card.querySelector("h3").innerText;
    alert('Number is Copied: ' + number);
    copyCount.innerText = parseInt(copyCount.innerText) + 1;
    navigator.clipboard.writeText(number);
  });
}

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
