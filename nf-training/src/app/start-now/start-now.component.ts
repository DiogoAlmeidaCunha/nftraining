import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-now',
  templateUrl: './start-now.component.html',
  styleUrls: ['./start-now.component.css']
})
export class StartNowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showBox(n){
    if(n == 1){
      document.getElementById('bg1').style.backgroundImage = "url('../../assets/start22.jpg')";
    }
    if(n == 2){
      document.getElementById('bg1').style.backgroundImage = "url('../../assets/start33.jpg')";
    }
  }

  closeBox(v){
    if(v == 1){
      document.getElementById('bg1').style.backgroundImage = "url('../../assets/start9.jpg')";
    }
    if(v == 2){
      document.getElementById('bg1').style.backgroundImage = "url('../../assets/start9.jpg')";
    }
  }

}
