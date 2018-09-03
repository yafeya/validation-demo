import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  mName: string = '';
  mAge: number = 0;

  get Name(): string {
    return this.mName;
  }

  set Name(value: string) {
    this.mName = value;
  }

  get Age(): number {
    return this.mAge;
  }

  set Age(value: number) {
    this.mAge = value;
  }

  add() {
    alert(`Add person: ${this.Name}, age: ${this.Age}`);
  }
}
