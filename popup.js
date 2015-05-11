
function checkForValidUrl(tabId, changeInfo, tab) {

if (tab.url.indexOf('https://mail.google.com/') == 0) {
chrome.pageAction.show(tabId);

}
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);
chrome.tabs.onHighlighted.addListener(checkForValidUrl);


chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
  console.log(token);
});










