
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBlankComponent } from 'src/app/components/nav-blank/nav-blank.component';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NgModel } from '@angular/forms';







@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [CommonModule ,NavBlankComponent,RouterOutlet,RouterLink,RouterLinkActive ],
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.scss']
})
export class BlankLayoutComponent {

}
