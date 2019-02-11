import { html, LitElement } from "lit-element"

class XNavlistSubheading extends LitElement {
  static get properties() {
    return { isopen: { type: Boolean } }
  }

  constructor() {
    super()
    this.isopen = false
  }

  clickHandler(e) {
    this.isopen = !this.isopen
    let event = new CustomEvent(`subheading`, { detail: { open: this.isopen } })
    this.dispatchEvent(event)
  }

  render() {
    return html`
      <style>
        /* :host {
          display: block;
        } */

        div {
          display: flex;
          align-items: center;
          /* position: relative; */
          justify-content: space-between;
          padding: 20px 24px;
          color: #fff;
          font-size: 16px;
          text-transform: capitalize;
          border-top: 1px solid #404854;
          /* border-bottom: 1px solid #ffffff; */
          background-color: #272f3c;
        }

        div:hover {
          background-color: #383f4b;
          cursor: pointer;
        }

        .navlist--open:hover {
          background-color: #1A212A;
          cursor: pointer;
        }

        .navList__subheading-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
          width: 12px;
        }

        .navList__subheading-title {
          font: normal 500 15px/20px Roboto;
          color: #ffffff;
        }

        .test {
          /* position: absolute; */
          height: 6px;
          width: 6px;
          /* right: 25px; */
          border-left: 1px solid rgba(255, 255, 255, 0.5);
          border-bottom: 1px solid rgba(255, 255, 255, 0.5);
          transform: rotate(225deg);
          transition: all 0.2s;
        }

        .open {
          transform: rotate(315deg);
        }

        .navlist--open {
          background-color: #1A212A;
        }

      </style>
      <div @click="${e => this.clickHandler(e)}" class="${this.isopen ? `navlist--open` : ``}"">
        <!-- <span class="navList__subheading-icon"><i class="fas fa-briefcase-medical"></i></span> -->
        <span class="navList__subheading-title"><slot></slot></span>
        <span class="test ${this.isopen ? `open` : ``}"></span>
      </div>
      <!-- <slot></slot> -->
    `
  }
}

customElements.define(`x-navlist-subheading`, XNavlistSubheading)
