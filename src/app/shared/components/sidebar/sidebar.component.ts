import { Component } from '@angular/core';
import { SidebarOptionsComponent } from '../sidebar-options/sidebar-options.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarOptionsComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {}
