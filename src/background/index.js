chrome.runtime.onInstalled.addListener(function (object) {
    if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.tabs.create({ url: "https://clydedsouza.net" });
    }
});

chrome.commands.onCommand.addListener((command) => {
    if(command === 'turn-on') {
        chrome.action.setBadgeText({ text: 'ON' });
        chrome.action.setBadgeBackgroundColor({ color: 'green' });
    }
    if(command === 'turn-off') {
        chrome.action.setBadgeText({ text: 'OFF' });
        chrome.action.setBadgeBackgroundColor({ color: 'red' });
    }
});

chrome.omnibox.onInputEntered.addListener((text) => {
    chrome.tabs.create({ url: 'https://facebook.com/' + encodeURIComponent(text) });
    chrome.tabs.create({ url: 'https://twitter.com/' + encodeURIComponent(text) });
    chrome.tabs.create({ url: 'https://instagram.com/' + encodeURIComponent(text) });
});