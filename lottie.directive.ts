import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import lottie from 'lottie-web';

@Directive({
  selector: '[appLottie]',
  standalone: true,
})
export class LottieDirective implements OnInit {
  @Input() lottiePath!: string;

  constructor(private el: ElementRef) {}

  async ngOnInit() {
    try {
      // Fetch the .lottie file as a binary blob
      const response = await fetch(this.lottiePath);
      const animationBlob = await response.blob();

      // Use a FileReader to read the blob as an array buffer (binary data)
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const arrayBuffer = event.target.result;

        // Parse the animation data and initialize Lottie
        lottie.loadAnimation({
          container: this.el.nativeElement,  // The HTML element to render the animation
          renderer: 'svg',                   // Rendering with SVG
          loop: true,                        // Loop the animation
          autoplay: true,                    // Automatically start the animation
          animationData: JSON.parse(new TextDecoder().decode(arrayBuffer))  // Decode the binary data
        });
      };

      // Read the blob as an array buffer
      reader.readAsArrayBuffer(animationBlob);
    } catch (error) {
      console.error('Error loading Lottie animation:', error);
    }
  }
}
