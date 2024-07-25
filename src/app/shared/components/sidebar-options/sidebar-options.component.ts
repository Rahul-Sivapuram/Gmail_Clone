import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-options',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-options.component.html',
  styleUrl: './sidebar-options.component.css',
})
export class SidebarOptionsComponent {
  @Input() optionIcon!: string;
  @Input() optionTitle!: string;
  @Input() count!: number;
}
