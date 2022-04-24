import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  @ViewChild('h1')
  h1: ElementRef;

  onClick(): void {
    this.h1.nativeElement.scrollIntoView({behavior: 'smooth'}); 
  }
}
