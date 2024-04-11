import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazyImage.component.html',
})


export class LazyImageComponent implements OnInit{

  @Input()
  public url!:string;

  @Input()
  public alt:string = '';

  // propiedad para saber si la imagen cargo
  public hasLoaded: boolean = false;


  ngOnInit(): void {
    if( !this.url ) throw new Error('URL property is required');
  }

  // este metodo es el que indica que la imagen cargo

  onLoad(){
    // Esto se pone para que se alcance a ver la imagen
    setTimeout(()=> {

      this.hasLoaded = true;

    },1000)
  }

}
