chrome.runtime.onInstalled.addListener(function () {
  // Listen for clicks to the extension icon
  chrome.action.onClicked.addListener(function () {
    // When the icon is clicked, create a new tab pointing to the index page
    chrome.tabs.create({
      url: chrome.runtime.getURL("/index.html"),
    });
  });
});
