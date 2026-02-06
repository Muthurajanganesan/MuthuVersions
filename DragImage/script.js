let images = document.querySelectorAll(".image");
let boxes = document.querySelectorAll(".box");

let draggedImage = null;
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("dragstart", function () {
        draggedImage = images[i];
    });
}

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    boxes[i].addEventListener("drop", function () {
        if (boxes[i].childElementCount > 0) return;

        boxes[i].appendChild(draggedImage);
    });
}
