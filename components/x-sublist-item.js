import { html, LitElement } from "lit-element"

class XSublistItem extends LitElement {
  render() {
    return html`
      <style>
        :host {
          display: block;
          padding: 8px;
          text-transform: capitalize;
          padding: 8px 24px;
          color: rgba(255, 255, 255, 0.7);
          font: normal 500 14px/20px Roboto;
        }

        :host(:hover) {
          background-color: #2b323c;
          cursor: pointer;
          color: #6ec2f2;
        }
      </style>
      <slot></slot>
    `
  }
}

customElements.define(`x-sublist-item`, XSublistItem)
