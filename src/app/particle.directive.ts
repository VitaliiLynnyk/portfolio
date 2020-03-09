import { Directive, ElementRef, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare let particlesJS: any; // Required to be properly interpreted by TypeScript.

@Directive({
  selector: '[appParticle]'
})

export class ParticleDirective implements OnInit {

  particlesConfig: any = {
    'particles': {
      'number': {
        'value': 35,
        'density': {
          'enable': false,
          'value_area': 2000
        }
      },
      'color': {
        'value': '#094BFF'
      },
      'shape': {
        'type': [ 'circle', 'polygon' ],
        'stroke': {
          'width': 0,
          'color': '#094BFF'
        },
        'polygon': {
          'nb_sides': 5
        },
        'image': {
          'src': 'images/github.svg',
          'width': 100,
          'height': 100
        }
      },
      'opacity': {
        'value': 0.5,
        'random': false,
        'anim': {
          'enable': true,
          'speed': 0.3,
          'opacity_min': 0.2,
          'sync': false
        }
      },
      'size': {
        'value': 2,
        'random': true,
        'anim': {
          'enable': false,
          'speed': 10,
          'size_min': 0.75,
          'sync': false
        }
      },
      'line_linked': {
        'enable': true,
        'distance': 150,
        'color': '#094BFF',
        'opacity': 0.3,
        'width': 1
      },
      'move': {
        'enable': true,
        'speed': 2,
        'direction': 'none',
        'random': false,
        'straight': false,
        'out_mode': 'out',
        'bounce': true,
        'attract': {
          'enable': true,
          'rotateX': 600,
          'rotateY': 1200
        }
      }
    },
    'interactivity': {
      'detect_on': 'window',
      'events': {
        'onhover': {
          'enable': false,
          'mode': 'grab'
        },
        'onclick': {
          'enable': false,
          'mode': 'push'
        },
        'resize': true
      },
      'modes': {
        'grab': {
          'distance': 200,
          'line_linked': {
            'opacity': 0.4
          }
        },
        'bubble': {
          'distance': 400,
          'size': 40,
          'duration': 2,
          'opacity': 8,
          'speed': 3
        },
        'repulse': {
          'distance': 200,
          'duration': 0.4
        },
        'push': {
          'particles_nb': 3
        },
        'remove': {
          'particles_nb': 2
        }
      }
    },
    'retina_detect': true
  };

  constructor(private el: ElementRef, @Inject(DOCUMENT) private doc: Document) {}

  ngOnInit() {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    this.el.nativeElement.id = 'particles-js';
    particlesJS('particles-js', this.particlesConfig, () => {});
  }
}
