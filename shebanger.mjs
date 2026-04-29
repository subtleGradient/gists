const el = (tag, text = "") => Object.assign(document.createElement(tag), { textContent: text });
const main = document.querySelector("main") || document.body.appendChild(el("main"));
const card = document.createElement("section");
const dl = el("dl");

document.documentElement.dataset.shebanger = "browser";
card.className = "shebanger-browser";
for (const [name, value] of [["Document", location.href], ["Module", import.meta.url]]) {
  dl.append(el("dt", name), el("dd", value));
}
card.append(el("h2", "Browser mode"), el("p", "shebanger.mjs loaded as a normal ES module."), dl);
main.append(card);
