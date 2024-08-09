"use strict";
const rows = document.getElementsByTagName("tr");
const table = document.getElementsByTagName("tbody")[0];
const appendRowBtn = document.querySelector(".append-row");
const removeRowBtn = document.querySelector(".remove-row");
const appendColBtn = document.querySelector(".append-column");
const removeColBtn = document.querySelector(".remove-column");
const maxElems = 10;
const minElems = 2;
function updateButtons() {
    removeRowBtn.disabled = rows.length <= minElems;
    appendRowBtn.disabled = rows.length >= maxElems;
    appendColBtn.disabled = rows[0].children.length >= maxElems;
    removeColBtn.disabled = rows[0].children.length <= minElems;
}
appendRowBtn.addEventListener("click", (e)=>{
    if (rows.length < maxElems) {
        const newRow = document.createElement("tr");
        for(let index = 0; index < rows[0].children.length; index++)newRow.append(document.createElement("td"));
        table.append(newRow);
        updateButtons();
    }
});
removeRowBtn.addEventListener("click", (e)=>{
    if (rows.length > minElems) {
        rows[rows.length - 1].remove();
        updateButtons();
    }
});
appendColBtn.addEventListener("click", (e)=>{
    if (rows[0].children.length < maxElems) {
        for (const row of rows)row.append(document.createElement("td"));
        updateButtons();
    }
});
removeColBtn.addEventListener("click", (e)=>{
    if (rows[0].children.length > minElems) {
        for (const row of rows)row.children[0].remove();
        updateButtons();
    }
});

//# sourceMappingURL=index.f75de5e1.js.map
