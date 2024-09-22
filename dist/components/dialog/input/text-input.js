import { BaseComponent } from "../../component.js";
export class MediaInputDialog extends BaseComponent {
    constructor() {
        super(`<div>
        <div class="form__container">
            <label for="title">Title</label>
            <input type="text" id="title"/>
        </div>
        <div class="form__container">
            <label for="body">Body</label>
            <textarea type="text" id="body" row="3"/>
        </div>
        </div>`);
    }
    get title() {
        const element = this.element.querySelector("#title");
        return element.value;
    }
    get body() {
        const element = this.element.querySelector("#body");
        return element.value;
    }
}
