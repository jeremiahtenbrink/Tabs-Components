class Carousel {
    constructor() {
        this.rightButton = document.querySelector("#right-button");
        this.leftButton = document.querySelector("#left-button");
        this.boxes = document.querySelectorAll(".box");
        this.selectedBox = 0;

        this.leftButton.addEventListener("click", () => this.leftClick());

        this.rightButton.addEventListener('click', () => this.rightClick())

    }

    leftClick() {
        this.boxes[this.selectedBox].classList.remove("box-selected");
        this.selectedBox--;
        if (this.selectedBox < 0) {
            this.selectedBox = this.boxes.length - 1;
        }
        this.boxes[this.selectedBox].classList.add('box-selected');
    }

    rightClick() {
        this.boxes[this.selectedBox].classList.remove("box-selected");
        this.selectedBox++;
        if (this.selectedBox >= this.boxes.length) {
            this.selectedBox = 0;
        }
        this.boxes[this.selectedBox].classList.add('box-selected');

    }
}

new Carousel();