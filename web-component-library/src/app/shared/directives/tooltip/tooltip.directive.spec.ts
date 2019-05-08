import { TooltipDirective } from './tooltip.directive';
import { ElementRef } from '@angular/core';

describe('TooltipDirective', () => {
  let element: ElementRef;

  it('should create an instance', () => {
    const directive = new TooltipDirective(element);
    expect(directive).toBeTruthy();
  });
});
