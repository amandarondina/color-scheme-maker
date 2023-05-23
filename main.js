const btn = document.querySelector("#color-scheme-btn");
const color = document.querySelector(".seed-color-selector");
const scheme = document.querySelector("#color-scheme-selector");
const results = document.querySelector(".results");
let placeholder = document.querySelector(".color-placeholder");
let subtitle = document.querySelector(".subtitle");

const copyColorText = (event) => {
  const content = event.target.innerText;
  navigator.clipboard.writeText(content);
event.target.innerText = "copied!";
}

const getColors = function (e) {
  e.preventDefault();
  const seedColor = color.value.slice(1).toUpperCase();

  const render = (data) => {
    results.innerHTML = "";
    const colors = data.colors;
    for (let color in colors) {
      let bgColor = colors[color].hex.value;
      results.innerHTML += `<div class="result container">
            <div class="background-color container" style="background-color:${bgColor}" title="Copy!">
            <div class="subtitles container">
            <div class="sub-text" onclick="copyColorText(event)">
            <p>${bgColor}</p>
            </div>
        </div>
        </div>
        </div>
       `;


    }
  };



  const url = `https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${scheme.value}&count=5`;

  fetch(url)
    .then((res) => res.json())
    .then(render);
};


btn.addEventListener("click", getColors);
