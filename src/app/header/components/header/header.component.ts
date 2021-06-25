import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  toAboutUs(): void {
    this.router.navigate(['AboutCompany'], {relativeTo: this.activatedRoute});
    // document.getElementById('aboutCompany').scrollIntoView({behavior: 'smooth'});
  }

  toHeader(): void {
    this.router.navigate([''], {relativeTo: this.activatedRoute});
    // document.getElementById('header').scrollIntoView({behavior: 'smooth'});

  }

  toMaintenance(): void {
    // document.getElementById('maintenance').scrollIntoView({behavior: 'smooth'});

  }

  toQualityPolice(): void {
    // document.getElementById('qualityPolice').scrollIntoView({behavior: 'smooth'});

  }


}
