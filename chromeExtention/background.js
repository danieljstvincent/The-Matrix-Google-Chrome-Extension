const menuItemMap = {
SELECTION: "selection-click"
PAGE: "page-click",
}:


chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        id: "my-id",
        title: "New Context Menu Item",
        contexts: ["page"],
    });

 chrome.contextMenus.create({
    id: menuItemMap.PAGE,
    title: "New Context Menu Item - Page",
    contexts: ["page"],
    });
});

//hello :)