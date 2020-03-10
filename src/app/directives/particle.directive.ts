import { Directive, ElementRef, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { particlesConfig } from '../../assets/particles';

declare let particlesJS: any; // Required to be properly interpreted by TypeScript.

@Directive({
  selector: '[appParticle]'
})

export class ParticleDirective implements OnInit {

  constructor(
    private el: ElementRef,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit() {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    this.el.nativeElement.id = 'particles-js';
    particlesJS('particles-js', particlesConfig, () => {});
  }
}
