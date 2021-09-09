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

    if(name=="af"){
      window.open("https://www.af-reabilitacao.com/");

    } else if(name=="insta"){
      window.open("https://www.instagram.com/nf_training/");

    }
  }

}
