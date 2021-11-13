import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})


export class LandingPageComponent implements OnInit {


  constructor() { 

  }

  ngOnInit(): void {
  }

  showBox(n){
    console.log("val n : " + n)
    if(n==1){
      console.log("ENTROu")
      document.getElementById('box1').style.color = "#ffffff"
    }

    else if(n==2){
     document.getElementById('box2').style.color = "#ffffff";
    }

    else if(n==3){
      document.getElementById('box3').style.color = "#ffffff";
     }

     else if(n==4){
      document.getElementById('box4').style.color = "#ffffff";
     }

     else if(n==5){
      document.getElementById('box5').style.color = "#ffffff";
     }
    
  }

  changeText(v){
    if(v==1){
      document.getElementById('box1').style.color = "#05cfa000";
    }

    else if(v==2){
      document.getElementById('box2').style.color = "#05cfa000";
    }
    else if(v==3){
      document.getElementById('box3').style.color = "#05cfa000";
    }
    else if(v==4){
      document.getElementById('box4').style.color = "#05cfa000";
    }
    else if(v==5){
      document.getElementById('box5').style.color = "#05cfa000";
    }
  }

  instagram(){
    window.open("https://www.instagram.com/witech_");
  }
}
