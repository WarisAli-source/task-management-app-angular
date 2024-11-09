import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientComponent } from './components/client/client.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MasterComponent,RouterLink,RouterLinkActive,EmployeeComponent,ClientComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task_management_app';
}
