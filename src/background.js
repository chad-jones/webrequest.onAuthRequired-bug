
var config = {
  mode: "pac_script",
  pacScript: {
    data: "function FindProxyForURL(url, host) {\n" +
      "  if (host == 'api.github.com')\n" +
      "    return 'PROXY 127.0.0.1:3128';\n" +
      "  return 'DIRECT';\n" +
      "}"
  }
};
chrome.proxy.settings.set(
  { value: config, scope: 'regular' },
  function () { }
);


chrome.webRequest.onAuthRequired.addListener(onAuthChromeHandler, { urls: ["<all_urls>"] }, ["asyncBlocking", "extraHeaders"]);
function onAuthChromeHandler (details, asyncCallback) {
  console.log("onAuthChromeHandler", details);
  asyncCallback({
    authCredentials: {
      username: "chrome",
      password: "onAuthEntered"
    }
  });
}


