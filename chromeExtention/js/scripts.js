// Utility function to change display value on array of elements
const changeElemDisplay = (elems, display = "none") => {
    for (let i = 0; i < elems.length; i++) {
      elems[i].style.display = display;
    }
  };
  
  (function () {
    // Store reference to elements
    const bgElem = document.getElementById("bg");
    const timeElem = document.getElementById("time");
    const welcomeElem = document.getElementById("welcome");
    const buttonElem = document.getElementById("submit");
    const inputElem = document.getElementById("name");
    const clearElem = document.getElementById("clear");
  
    // Choose a random BG here. You could also use something like the Unsplash API to randomly
    // find images for free. See https://unsplash.com/developers for more.
    bgElem.style.background = `url(../images/bg-${
      Math.floor(Math.random() * 7) + 1
    }.jpg)`;
  
    // Find the hours and minutes every 0.5s and update the time
    const setTime = () => {
      const current = new Date();
      const h = current.getHours();
      const m = current.getMinutes();
  
      timeElem.innerHTML = `${h % 12 || 12}:${m < 10 ? `0${m}` : m}`;
  
      setTimeout(function () {
        setTime();
      }, 500);
    };
  
    // Run the above function
    setTime();
  
    // Attempt to grab the stored name from Chrome sync storage initially
    chrome.storage.sync.get(["name"], function (result) {
      // If found in sync storage, update the welcome content and hide required elements
      // If not, hide required elements anyway
      if (result.name) {
        welcomeElem.innerHTML = `Hello, ${result.name}.`;
        const hiddenElems = document.getElementsByClassName("no-name");
        changeElemDisplay(hiddenElems);
      } else {
        const hiddenElems = document.getElementsByClassName("has-name");
        changeElemDisplay(hiddenElems);
      }
    });
  
    // Store the provided name and hide required elements
    buttonElem.addEventListener("click", function () {
      if (inputElem.value.length) {
        chrome.storage.sync.set({ name: inputElem.value }, function () {
          welcomeElem.innerHTML = `Hello, ${inputElem.value}.`;
          const hiddenElems = document.getElementsByClassName("no-name");
          const visibleElems = document.getElementsByClassName("has-name");
          changeElemDisplay(hiddenElems);
          changeElemDisplay(visibleElems, "block");
        });
      }
    });
  
    // Remove stored name and show the required elements
    clearElem.addEventListener("click", function () {
      chrome.storage.sync.remove(["name"], function () {
        welcomeElem.innerHTML = `Hello, what is your name?`;
        const hiddenElems = document.getElementsByClassName("has-name");
        const visibleElems = document.getElementsByClassName("no-name");
        changeElemDisplay(hiddenElems);
        changeElemDisplay(visibleElems, "inline-block");
      });
    });
  })();
  