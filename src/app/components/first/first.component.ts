import { Component, OnInit, ElementRef, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
enum PAISES{
  'MEXICO', 'JAPON', 'RUSIA', 
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit, AfterViewInit{

  @ViewChild('text',{static:true}) text!: ElementRef

  public PAISES = PAISES;
  public flag: boolean = true;
  public paises: string[] = ['Mexico', 'Peru', 'Brasil'];
  public paises2: any[] = [
    {
      id: 20,
      name: 'Mexico',
    },
    {
      id: 40,
      name: 'Peru',
    },
  ];

  public foods : any[] =[{
    platillo: 'taco',
    pais: PAISES.MEXICO
  },
  {
    platillo: 'pozole',
    pais: PAISES.MEXICO
  },
  {
    platillo: 'sushi',
    pais: PAISES.JAPON
  },
  {
    platillo: 'ramen',
    pais: PAISES.JAPON
  },
  {
    platillo: 'vodka',
    pais: PAISES.RUSIA
  }];

  constructor(private render:Renderer2) {}

  ngOnInit(): void {
    this.btn();
    console.log(this.text);
    this.render.setAttribute(this.text.nativeElement, 'id', 'otherText')
  }

  ngAfterViewInit(): void {
    console.log(this.text);
    this.render.setAttribute(this.text.nativeElement, 'id', 'otherText')
    this.render.setStyle(this.text.nativeElement, 'color', 'pink')
  }

  btn() {
    let btn = document.getElementById('first');
    btn?.addEventListener('click', () => {
      this.flag = !this.flag;
    });
  }
}
