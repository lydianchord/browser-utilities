// ==UserScript==
// @name         print-external-links
// @namespace    https://github.com/ahuanguchi
// @version      0.1
// @description  none
// @author       ahuanguchi
// @match        http*://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

window.addEventListener("load", function () {
  function splitHref(givenHref) {
    return givenHref.replace(/^https?:\/\//, "").split("/");
  }
  var i, currentA, currentHref, anchorParts, locationParts;
  var anchors = document.getElementsByTagName("a");
  var numAnchors = anchors.length;
  for (i = 0; i < numAnchors; i += 1) {
    currentA = anchors[i];
    currentHref = currentA.href;
    anchorParts = splitHref(currentHref);
    locationParts = splitHref(window.location.href);
    if (currentHref.slice(0, 4) === "http" && anchorParts[0] !== locationParts[0]) {
      currentA.innerHTML = currentA.innerHTML + "<small> (<u>" + currentHref + "</u>)</small>";
    }
  }
});