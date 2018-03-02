browser.contextMenus.create({
  id: "pass",
  title: ""
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "pass") {
    browser.tabs.executeScript({
      file: "./content-scripts/autoPass.js"
    });
  }
});
