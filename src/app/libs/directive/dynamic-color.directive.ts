import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appDynamicColor]'
})
export class DynamicColorDirective implements OnInit{
  
  @Input('colorEntrada') colorE: string ='';
  @Input('colorSalida') colorS: string ='';
  @Input('colorClick') colorC: string ='';
  @HostListener('click') mouseC (){ //cuando le das click
    this.element.nativeElement.style.fontSize = this.colorC;
  }
  @HostListener('mouseenter') mouseE (){ //entra al elemeto cabia
    this.element.nativeElement.style.color = this.colorE;
  }
  @HostListener('mouseleave') mouseS (){ //cuando sale
    this.element.nativeElement.style.color = this.colorS;
  }
  
  constructor(private element: ElementRef) { 
        
  }

  ngOnInit(): void {
  } 
}