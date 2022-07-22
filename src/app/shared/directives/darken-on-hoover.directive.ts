import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[apDarkenOnHoover]'
})
export class DarkenOnHooverDirective {

  @Input() brigtness = '70%'
  constructor(private el: ElementRef, private render: Renderer) { }

  @HostListener('mouseover')
  darkenOn() {
    this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brigtness})`)
  }
  @HostListener('mouseleave')
  darkenOff() {
    this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)')
  }
}