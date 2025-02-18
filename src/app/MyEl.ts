import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('my-el')
export class MyEl extends LitElement {
  render() {
    return html`<p>hi</p>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-el": MyEl;
  }
}
