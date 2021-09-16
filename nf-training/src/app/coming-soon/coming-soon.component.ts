import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openInstagram(name){

    if(name=="visita"){
      window.open("https://www.google.com/maps/place/NF+Training/@41.1692277,-8.5513093,15z/data=!4m5!3m4!1s0x0:0xc815ef175774ef62!8m2!3d41.1692277!4d-8.5513093");

    } else if(name=="insta"){
      window.open("https://www.instagram.com/nf_training/");

    }
  }

}
