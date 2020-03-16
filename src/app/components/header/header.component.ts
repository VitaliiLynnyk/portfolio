import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: [ './header.scss' ]
})
export class HeaderComponent implements OnInit {
  constructor(private themeService: ThemeService ) {}

  ngOnInit() {
    this.themeService.setLightTheme();
  }

  toggleTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }
  }
}
