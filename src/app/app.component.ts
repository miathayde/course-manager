import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {}

  ngOnInit() { }

  title = 'course-manager';

  name: string = 'Daphne linda';
}
