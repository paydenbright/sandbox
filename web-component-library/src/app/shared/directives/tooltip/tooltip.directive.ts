import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[wclTooltip]'
})
export class TooltipDirective {
  @Input() wclTooltip: string;
  element;
  node;
  textNode;
  elBound;
  tooltip;

  constructor(private elRef: ElementRef) {
    this.element = elRef.nativeElement;
  }

  ngOnInit() { }

  createTooltipNode() {
    this.node = document.createElement('wcl-tooltip');
    this.textNode = document.createTextNode(this.wclTooltip);
    this.node.appendChild(this.textNode);
    this.element.appendChild(this.node);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.createTooltipNode();
    this.tooltip = this.element.querySelector('wcl-tooltip');
    this.elBound = this.element.getBoundingClientRect();

    // show tooltip at the bottom of the element => if the element is near the top of the view
    if (this.elBound.top < 200) {
      this.tooltip.classList.add('bottom-tooltip');
      this.tooltip.style.top = (this.elBound.top + 20).toString() + 'px';
      this.tooltip.style.left = this.elBound.left.toString() + 'px';
    }
    // show the tooltip at the top of the element => if the element is NOT near the top of the view
    else {
      this.tooltip.classList.add('top-tooltip');
      this.tooltip.style.top = ((this.elBound.top - this.tooltip.getBoundingClientRect().height) - 10).toString() + 'px';
      this.tooltip.style.left = this.elBound.left.toString() + 'px';
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // destroy tooltip node
    this.tooltip = this.element.removeChild(this.node);
  }
}
