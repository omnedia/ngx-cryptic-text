# ngx-cryptic-text

`@omnedia/ngx-cryptic-text` is an Angular library that provides a cryptic text animation effect. The component animates text by randomly switching letters until the correct characters appear, creating a mysterious or glitchy effect that can be used for titles, headings, or any text content in your Angular applications.

## Features

- Cryptic text animation effect that gradually resolves into the target text.
- Customizable animation speed.
- Lightweight and easy to integrate as a standalone component.

## Installation

Install the library using npm:

```bash
npm install @omnedia/ngx-cryptic-text

Usage

Import the NgxCrypticTextComponent in your Angular module or component:

typescript

import { NgxCrypticTextComponent } from '@omnedia/ngx-cryptic-text';

@Component({
  ...
  imports: [
    ...
    NgxCrypticTextComponent,
  ],
  ...
})
```

Use the component in your template:

```html
<om-cryptic-text
  [text]="'Hello, World!'"
  [animationSpeed]="1000"
  styleClass="custom-cryptic-class"
></om-cryptic-text>
```

## API

```html
<om-cryptic-text
  [text]="text"
  [animationSpeed]="animationSpeed"
  styleClass="your-custom-class"
>
</om-cryptic-text>
```

- `text` (required): The target text to be revealed by the animation.
- `animationSpeed` (optional): The duration of the entire animation in milliseconds. Defaults to 800ms.
- `styleClass` (optional): A custom CSS class to apply to the text element for styling.

## Example

```html
<om-cryptic-text
  [text]="'Cryptic Text Effect!'"
  [animationSpeed]="1200"
  styleClass="cryptic-text-style"
></om-cryptic-text>
```

This will create a cryptic text animation where the text "Cryptic Text Effect!" is gradually revealed over a duration of 1200ms.

#Styling

You can apply custom styles to the text using the styleClass input. For example:

```css
.cryptic-text-style {
  font-size: 24px;
  color: #ff69b4;
  font-family: 'Courier New', Courier, monospace;
}
```

This will style the cryptic text with a custom font size, color, and font family.

## Contributing

Contributions are welcome. Please submit a pull request or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License.