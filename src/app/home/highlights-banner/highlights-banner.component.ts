import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlights-banner',
  templateUrl: './highlights-banner.component.html',
  styleUrls: ['./highlights-banner.component.scss']
})
export class HighlightsBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onDonate() {
    window.open("https://www.google.com", "_blank");
  }

}
