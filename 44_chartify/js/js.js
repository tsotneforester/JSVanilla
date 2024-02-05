//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict"; //insert-content
//|||||||||||||||||||||||||||||||||| Selectors |||||||||||||||||||||||||||
const raw_data = document.getElementById("raw-data");

const generate_button = document.getElementById("generate-button");
const clear_button = document.getElementById("clear-button");

const escape_html = document.getElementById("escape-html");
const has_header = document.getElementById("has-header");
const html_tags = document.getElementById("html-tags");
const use_tab = document.getElementById("use-tab");

const visual_table = document.querySelector("footer");

//|||||||||||||||||||||||||||||||||| Generator |||||||||||||||||||||||||||
generate_button.addEventListener("click", function () {
  if (raw_data.value.trim() == "") {
    alert("No table data");
  } else {
    if (has_header.checked == true && use_tab.checked == true && escape_html.checked == true) {
      formatify(html_tags, tagGenerator("\t", true), true);
      clipboard(html_tags);
    }
    if (has_header.checked == true && use_tab.checked == true && escape_html.checked != true) {
      formatify(html_tags, tagGenerator("\t", true));
      clipboard(html_tags);
    }
    if (has_header.checked == true && use_tab.checked != true && escape_html.checked == true) {
      formatify(html_tags, tagGenerator(" ", true), true);
      clipboard(html_tags);
    }
    if (has_header.checked == true && use_tab.checked != true && escape_html.checked != true) {
      formatify(html_tags, tagGenerator(" ", true));
      clipboard(html_tags);
    }
    if (has_header.checked != true && use_tab.checked == true && escape_html.checked == true) {
      formatify(html_tags, tagGenerator("\t"), true);
      clipboard(html_tags);
    }
    if (has_header.checked != true && use_tab.checked == true && escape_html.checked != true) {
      formatify(html_tags, tagGenerator("\t"));
      clipboard(html_tags);
    }
    if (has_header.checked != true && use_tab.checked != true && escape_html.checked == true) {
      formatify(html_tags, tagGenerator(" "), true);
      clipboard(html_tags);
    }
    if (has_header.checked != true && use_tab.checked != true && escape_html.checked != true) {
      formatify(html_tags, tagGenerator(" "));
      clipboard(html_tags);
    }
  }
});

//|||||||||||||||||||||||||||||||||| Clear |||||||||||||||||||||||||||
clear_button.addEventListener("click", function () {
  raw_data.value = "";
  html_tags.value = "";
  visual_table.innerHTML = "";
});

//|||||||||||||||||||||||||||||||||| Functions |||||||||||||||||||||||||||
function escapeHTMLTags(text) {
  let i = text
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\&lt;tr\&gt;/g, "<tr>")
    .replace(/\&lt;\/tr\&gt;/g, "</tr>")
    .replace(/\&lt;td\&gt;/g, "<td>")
    .replace(/\&lt;\/td\&gt;/g, "</td>")
    .replace(/\&lt;th\&gt;/g, "<th>")
    .replace(/\&lt;\/th\&gt;/g, "</th>")
    .replace(/\&lt;table\&gt;/g, "<table>")
    .replace(/\&lt;\/table\&gt;/g, "</table>");
  return i;
}

function formatify(input, output, escape = false) {
  let tempNode;
  if (escape) {
    tempNode = escapeHTMLTags(output);
  } else {
    tempNode = output;
  }

  input.value = tempNode.replace(/(\r\n|\n|\r)/gm, "").trim();
}

function clipboard(x) {
  visual_table.innerHTML = x.value;
  window.navigator.clipboard.writeText(visual_table.innerHTML);
}

function tagGenerator(splitter, header = false) {
  let htmlTagContent = "";
  let table = raw_data.value.trim();
  let resultLines = table.split("\n");
  let resultTabs = resultLines[0].split(splitter);
  htmlTagContent += `<table>`;
  htmlTagContent += `<tr>`;
  if (header) {
    for (let i = 0; i < resultTabs.length; i++) {
      htmlTagContent += `<th>`;
      let resultTabs2 = resultLines[0].split(splitter);
      htmlTagContent += `${resultTabs2[i]}`;
      htmlTagContent += `</th>`;
    }
    htmlTagContent += `</tr>`;
  }

  for (let i = header ? 1 : 0; i < resultLines.length; i++) {
    htmlTagContent += `<tr>`;
    for (let a = 0; a < resultTabs.length; a++) {
      let resultTabs2 = resultLines[i].split(splitter);
      htmlTagContent += `<td>${resultTabs2[a] != undefined ? resultTabs2[a] : ""}</td>`;
    }
    htmlTagContent += `</tr>`;
  }
  htmlTagContent += `</table>`;
  return htmlTagContent;
}
