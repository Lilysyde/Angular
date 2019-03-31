import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective implements OnInit {
  @HostListener('style.backgroundColor') myBackgroundColor:string;

  constructor() {}

  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'black');

  }
  @HostListener('mouseover') onMouseHoverEvent (eventData:Event) {
    this.myBackgroundColor= 'blue';
  }
  @HostListener('mouseout') OnMouseOutEvent (eventData:Event) {
    this.myBackgroundColor= 'pink';
  }
}
