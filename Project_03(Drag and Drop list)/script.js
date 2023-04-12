const item = Document.querySelectorAll(".items")

item.forEach(item => {
    item.addEventListener("dragstart",()=>{
        item.classList.add("dragging");
    });
});