import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "cta-button",
  styleUrl: "cta-button.css"
})
export class CtaButton {
  @Prop() buttonText: string;
  @Prop() imageUrl: string;
  @Prop() color: "green" | "blue";
  @Prop() textColor: "white";

  render() {
    return (
      <button
        class={`${this.color && this.color} ${this.textColor &&
          this.textColor}`}
      >
        {this.buttonText}
        {this.imageUrl && <img src={this.imageUrl}></img>}
      </button>
    );
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "cta-button": CtaButton;
    }
  }
}
