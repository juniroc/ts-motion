export class PageComponent {
    constructor() {
        this.element = document.createElement("ul");
        this.element.setAttribute("class", "page");
        this.element.textContent = "This is PageComponent";
    }
    attachTo(parent, position = "afterbegin") {
        parent.insertAdjacentElement(position, this.element);
    }
}
export class ImageComponent {
    constructor(title, url) {
        const image = document.createElement("img");
        image.setAttribute("class", "image");
        image.setAttribute("src", url);
        image.setAttribute("alt", title);
    }
}
