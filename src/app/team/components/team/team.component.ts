import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {


  slides = [{image: 'assets/images/teamPhoto.jpg'},
    {image: ''},
    {image: ''},
    {image: ''},
    {image: ''}];

  constructor() {
  }

  ngOnInit(): void {
  }

}
