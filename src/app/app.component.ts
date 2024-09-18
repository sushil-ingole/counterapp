import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./counter/counter.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, NavbarComponent, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'counterapp';
  @ViewChild(NavbarComponent) navbarComponent!: NavbarComponent;

  ngAfterViewInit(): void {
    console.log(this.navbarComponent.getNavbarName());
  }
}
