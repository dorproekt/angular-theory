import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {

    constructor(private element: ElementRef, private renderer: Renderer2) { }

    ngOnInit() { }

    @HostListener('mouseenter') mouseEnter() {
        this.renderer.setStyle(this.element.nativeElement, 'background-color', 'orange');
        this.renderer.addClass(this.element.nativeElement, 'white-text');
    }

    @HostListener('mouseleave') mouseLeave() {
        this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
        this.renderer.removeClass(this.element.nativeElement, 'white-text');
    }
}
