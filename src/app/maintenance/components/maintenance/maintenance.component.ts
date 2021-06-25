import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.modal__close-button').click(() => {
      $('.modal').removeClass('modal_active');
    });
    $('.modal').mouseup((e) => {
      const modalContent = $('.modal__content');
      if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
        $('.modal').removeClass('modal_active');
      }
    });

    $('.item').click((e) => {
      $('#text-content').text(e.target.text);
      $('.modal').addClass('modal_active');
    });
  }

}
