import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../component/greeting/greeting.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeMessage = signal("Parent to Child signal");

  keyUpHandler(event: KeyboardEvent) {
    console.log(`user pressed ${event.code}`);
  }
}
