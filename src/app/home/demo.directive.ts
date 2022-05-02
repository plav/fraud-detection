import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDemo]'
  
})
export class DemoDirective{
    constructor(private el: ElementRef){}
    @HostListener('click')
    imageChange(){
        var src:any = this.el.nativeElement.src;
        var prev:any = document.getElementById("preview")
        console.log(this.el.nativeElement.src)
        prev.src = src;
    }
}
