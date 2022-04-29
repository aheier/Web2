import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appPhone]'
})
export class PhoneDirective {

  constructor(private el:ElementRef) { }
 
  @HostListener("focus")
  onFocus(){
  }

  @HostListener('blur')
  onBlur(){
    let value = this.el.nativeElement.value;
    console.log(value)
    this.el.nativeElement.value = this.formatPhoneNumber(value);
  }
  formatPhoneNumber(phoneNumberString:string) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return match[1] + '-' + match[2] + '-' + match[3];
    }
    return null;
  }
}
