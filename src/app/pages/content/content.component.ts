import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MailTabComponent } from '../../shared/components/mail-tab/mail-tab.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MatTabsModule, MatIconModule, MailTabComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {}
