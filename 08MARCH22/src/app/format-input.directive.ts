import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFormatInput]'
})
export class FormatInputDirective {

  constructor(private el:ElementRef) { }
 
  @HostListener("focus")
  onFocus(){
  }

  @HostListener('blur')
  onBlur(){
    let value = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLowerCase()
  }
}
