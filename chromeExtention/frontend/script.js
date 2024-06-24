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

    // Set a random background image
    const randomImageNumber = Math.floor(Math.random() * 4) + 1;
    const randomImagePath = `../images/bg-${randomImageNumber}.jpg`;
    console.log(`Setting background image to: ${randomImagePath}`); // Debug log
    bgElem.style.backgroundImage = `url(${randomImagePath})`;

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
