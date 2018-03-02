browser.contextMenus.create({
  id: "pass",
  title: "Autopass question"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "pass") {
    browser.tabs.executeScript({
      file: "./content-scripts/autoPass.js"
    });
  }
});
