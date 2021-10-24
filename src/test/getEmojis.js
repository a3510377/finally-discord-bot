// https://tw.piliapp.com/emoji/list/

let data = {};
for (let domEmojis of document.querySelectorAll(".emojis")) {
  let name = domEmojis.parentNode.querySelector("h2 a")?.innerText;
  if (name)
    for (let domEmoji of domEmojis.querySelectorAll(".emoji[data-c]")) {
      emoji = domEmoji.getAttribute("data-c");
      data[name] ||= [];
      emoji in data[name] || data[name].push(emoji);
    }
}
