import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[wclTooltip]'
})
export class TooltipDirective {
  @Input() wclTooltip: string;
  element;
  node;
  textNode;
  tooltip = null;

  constructor(private elRef: ElementRef) {
    this.element = elRef.nativeElement;
  }

  ngOnInit() { }

  createTooltipNode() {
    this.node = document.createElement('wcl-tooltip');
    this.textNode = document.createTextNode(this.wclTooltip);
    this.node.appendChild(this.textNode);
    this.element.appendChild(this.node);
    this.tooltip = this.element.querySelector('wcl-tooltip');
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event) {
    if (this.tooltip) {
      this.tooltip.classList.add('bottom-tooltip');
      this.tooltip.style.top = (event.clientY + 15).toString() + 'px';
      this.tooltip.style.left = (event.clientX - 16).toString() + 'px';
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.createTooltipNode();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // destroy tooltip node
    this.tooltip = this.element.removeChild(this.node);
  }
}