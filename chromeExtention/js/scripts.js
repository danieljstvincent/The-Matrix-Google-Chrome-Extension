const changeElemDisplay = (elems, display = "none") => {
  for (let i = 0; i < elems.length; i++) {
      elems[i].style.display = display;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const bgElem = document.getElementById("bg");
  const timeElem = document.getElementById("time");
  const welcomeElem = document.getElementById("welcome");
  const buttonElem = document.getElementById("submit");
  const inputElem = document.getElementById("name");
  const clearElem = document.getElementById("clear");

  const unsplashAccessKey = 'w0JcBvPdQhfPiTMJV3aOTS25LCX-VUv4yY2ULsMyzzQ'; // Replace with your Unsplash Access Key

  // Fetch a random image from Unsplash
  fetch(`https://api.unsplash.com/photos/random?client_id=${unsplashAccessKey}&count=1`)
      .then(response => response.json())
      .then(data => {
          if (data.length > 0) {
              const randomImageUrl = data[0].urls.full;
              console.log(`Setting background image to: ${randomImageUrl}`); // Debug log
              bgElem.style.backgroundImage = `url(${randomImageUrl})`;
          } else {
              console.error('No images found in the Unsplash API response');
          }
      })
      .catch(error => {
          console.error('Error fetching image from Unsplash:', error);
      });

  const setTime = () => {
      const current = new Date();
      const h = current.getHours();
      const m = current.getMinutes();

      timeElem.innerHTML = `${h % 12 || 12}:${m < 10 ? `0${m}` : m}`;
  };

  setInterval(setTime, 500);
  setTime();

  chrome.storage.sync.get(["name"], function (result) {
      if (chrome.runtime.lastError) {
          console.error("Error getting name:", chrome.runtime.lastError);
          return;
      }
      if (result.name) {
          welcomeElem.innerHTML = `Hello, ${result.name}.`;
          const hiddenElems = document.getElementsByClassName("no-name");
          changeElemDisplay(hiddenElems);
      } else {
          const hiddenElems = document.getElementsByClassName("has-name");
          changeElemDisplay(hiddenElems);
      }
  });

  buttonElem.addEventListener("click", function () {
      if (inputElem.value.length) {
          chrome.storage.sync.set({ name: inputElem.value }, function () {
              if (chrome.runtime.lastError) {
                  console.error("Error setting name:", chrome.runtime.lastError);
                  return;
              }
              welcomeElem.innerHTML = `Hello, ${inputElem.value}.`;
              const hiddenElems = document.getElementsByClassName("no-name");
              const visibleElems = document.getElementsByClassName("has-name");
              changeElemDisplay(hiddenElems);
              changeElemDisplay(visibleElems, "block");
          });
      }
  });

  clearElem.addEventListener("click", function () {
      chrome.storage.sync.remove(["name"], function () {
          if (chrome.runtime.lastError) {
              console.error("Error removing name:", chrome.runtime.lastError);
              return;
          }
          welcomeElem.innerHTML = "";
          inputElem.value = "";
          const hiddenElems = document.getElementsByClassName("has-name");
          const visibleElems = document.getElementsByClassName("no-name");
          changeElemDisplay(hiddenElems);
          changeElemDisplay(visibleElems, "block");
      });
  });
});
