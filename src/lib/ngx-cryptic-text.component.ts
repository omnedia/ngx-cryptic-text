import {CommonModule, isPlatformBrowser} from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  PLATFORM_ID,
  signal,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'om-cryptic-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./ngx-cryptic-text.component.html",
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxCrypticTextComponent implements AfterViewInit, OnDestroy {
  @ViewChild("OmCrypticTextElement") crypticTextElement!: ElementRef<HTMLElement>;

  @Input("styleClass")
  styleClass?: string;

  @Input("text")
  set textInput(text: string) {
    this.text = text;
    this.generateText();
  }

  text!: string;

  templateText = signal('');

  @Input("animationSpeed")
  animationSpeed = 800;

  @Input("animateOnce")
  animateOnce = false;
  animated = false;

  isInView = signal(false);
  private intersectionObserver?: IntersectionObserver;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object
  ) {
  }

  ngAfterViewInit(): void {
    if (!this.text) {
      throw new Error('om-cryptic-text: No text provided!');
    }

    if (isPlatformBrowser(this.platformId)) {
      this.intersectionObserver = new IntersectionObserver(([entry]) => {
        if (!this.isInView() && entry.isIntersecting && (!this.animateOnce || this.animateOnce && !this.animated)) {
          this.generateText();
        }

        this.isInView.set(entry.isIntersecting);
      });
      this.intersectionObserver.observe(this.crypticTextElement.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  generateText(): void {
    this.animated = true;
    this.templateText.set('');

    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    const getRandomInt = (max: number) => Math.floor(Math.random() * max);

    let iterations = 0;

    const interval = setInterval(
      () => {
        if (iterations < this.text.length) {
          let displayText = "";
          this.text.split('').forEach((char, index) => {
            displayText += char === " " ? char : index <= iterations ? this.text[index] : alphabets[getRandomInt(26)];
          });
          this.templateText.set(displayText);
          iterations = iterations + 0.1;
        } else {
          clearInterval(interval);
        }
      },
      this.animationSpeed / (this.text.length * 10),
    );
  }
}
