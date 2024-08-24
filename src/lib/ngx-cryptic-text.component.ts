import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'om-cryptic-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./ngx-cryptic-text.component.html",
  styles: '',
})
export class NgxCrypticTextComponent implements OnInit {
  @Input("styleClass")
  styleClass?: string;

  @Input("text")
  set textInput(text: string) {
    this.text = text;
    this.generateText();
  }

  text!: string;

  templateText = '';

  @Input("animationSpeed")
  animationSpeed = 800;

  ngOnInit(): void {
    if (!this.text) {
      throw new Error('om-cryptic-text: No text provided!');
    }

    this.generateText();
  }

  generateText(): void {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    const getRandomInt = (max: number) => Math.floor(Math.random() * max);

    let interations = 0;

    const interval = setInterval(
      () => {
        if (interations < this.text.length) {
          let displayText = "";
          this.text.split('').forEach((char, index) => {
            displayText += char === " " ? char : index <= interations ? this.text[index] : alphabets[getRandomInt(26)];
          });
          this.templateText = displayText;
          interations = interations + 0.1;
        } else {
          clearInterval(interval);
        }
      },
      this.animationSpeed / (this.text.length * 10),
    );
  }
}
