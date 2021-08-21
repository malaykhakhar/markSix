var textInput = document.querySelector("#inputArea");
var btnTranslate = document.querySelector("#btn-translate");
var output = document.querySelector("#outputArea");

var URL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function constructURL(text) {
  return (URL + "?text=" + text);
}

function clickEventHandler() {
  fetch(constructURL(textInput.value))
    .then(response => response.json())
    .then(json => {
      output.innerHTML = json.contents.translated;
    })
}

btnTranslate.addEventListener("click", clickEventHandler)