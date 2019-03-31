import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBambii]'
})
export class BambiiDirective implements OnInit{
  @HostListener('style.backgroundColor') myBackgroundColor:string;
  constructor() { }

  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'black');

  }
  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.myBackgroundColor= 'blue';
  }
  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.myBackgroundColor= 'pink';
  }
}

