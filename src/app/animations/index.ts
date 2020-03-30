import { trigger, animate, transition, style, query, group } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.35s cubic-bezier(0.5, 0.31, 0.84, 0.05)', style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);
