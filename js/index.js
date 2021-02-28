const btn = document.querySelector(".shorten__btn");
const buttons = document.querySelectorAll(".results__result-btn");

btn.addEventListener("click", shortLink);
// btn2.addEventListener("click", copyText);

function shortLink() {
  const input = document.querySelector("input");
  callShortAPI(input.value);
  input.value = "";
}

async function callShortAPI(url) {
  const API_URL = `https://api.shrtco.de/v2/shorten?url=${url}`;
  const results = document.querySelector(".results");
  const { data } = await axios.get(API_URL);
  const div = document.createElement("div");
  div.classList.add("results__result");
  div.innerHTML = `
  <h4 class="original-url">${url}</h4>
  <span class="shorten-url">${data.result.short_link}</span>
  <button class="results__result-btn" onclick="copyText()">Copy</button>
  `;
  results.appendChild(div);
}

function copyText() {
  console.log("hi");
  console.log();

  //   navigator.clipboard.writeText(copyText.textContent).then(
  //     function () {
  //       /* clipboard successfully set */
  //       console.log(copyText);
  //     },
  //     function () {
  //       /* clipboard write failed */
  //       console.log("no");
  //     }
  //   );
  var copyText = document.querySelector(".shorten-url");
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);

  //   /* Select the text field */
  //   copyText.select();
}
