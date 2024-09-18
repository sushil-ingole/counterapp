import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterContentInit {
  @ContentChild(ChildComponent) childComponent!: ChildComponent;
  getNavbarName(): string {
    return "Navbar name";
  }

  ngAfterContentInit(): void {
    this.childComponent.childLog();
  }
}
