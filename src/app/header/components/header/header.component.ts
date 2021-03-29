import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toAboutUs(): void {
    document.getElementById('aboutCompany').scrollIntoView({behavior: 'smooth'});
  }

  toHeader(): void {
    document.getElementById('header').scrollIntoView({behavior: 'smooth'});

  }

  toMaintenance(): void {
    document.getElementById('maintenance').scrollIntoView({behavior: 'smooth'});

  }

  toQualityPolice(): void {
    document.getElementById('qualityPolice').scrollIntoView({behavior: 'smooth'});

  }

  toSendRequest(): void {
    document.getElementById('sendRequest').scrollIntoView({behavior: 'smooth'});

  }
}
