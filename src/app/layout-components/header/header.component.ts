import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchBar: boolean;
  showNotifications: boolean;
  showSettings: boolean;
  showBackDrop: boolean;
  language: string = 'english';
  fontSize: number = 20;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSearchBar() {
    this.searchBar = !this.searchBar
  }
  toggleNotifications() {
    this.showNotifications = !this.showNotifications
    this.showBackDrop = true
  }
  toggleSettings() {
    this.showSettings = !this.showSettings
    this.showBackDrop = true
  }
  hidePopups() {
    this.showNotifications = false;
    this.showSettings = false;
    this.showBackDrop = false
  }

  languageSelector(language: string) {
    this.language = language
  }

  fontSizeSelector(fontSize: number) {
    this.fontSize = fontSize
  }

}
