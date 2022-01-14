import { Component, OnInit, Input} from '@angular/core';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css']
})


export class PersonalPageComponent implements OnInit {
  
  selectedValue_1: number = 1;
  selectedValue_2: number = 1;
  selectedValue_3: number = 1;  
  price = 0;

  /* 

  5: 30 17.50
  10: 27.5 16.50
  15: 25  15
  20: 23.5 14,25
  25: 21 13


  
  5: 29 17.50
  10: 25.5 16.50
  15: 22.5  15     
  20: 21 14,25
  25: 20 13

  --------------
2 meses 4 meses 6 meses
24/7 whatsapp

nutricao 
1 2 4
avaliacao
2 3 5

80 140 200

  */



  constructor() { }

  ngOnInit(): void {

  }

  priceRefresh(){
    if(this.selectedValue_3== 1){
      if(this.selectedValue_1 == 5 ) this.price = this.selectedValue_1 * 29 *this.selectedValue_2;
      if(this.selectedValue_1 == 10 ) this.price = this.selectedValue_1 * 25.5*this.selectedValue_2;
      if(this.selectedValue_1 == 15 ) this.price = this.selectedValue_1 * 22.5*this.selectedValue_2;
      if(this.selectedValue_1 == 20 ) this.price = this.selectedValue_1 * 21*this.selectedValue_2;
      if(this.selectedValue_1 == 25 ) this.price = this.selectedValue_1 * 20*this.selectedValue_2;
    }
    if(this.selectedValue_3== 2){
      if(this.selectedValue_1 == 5 ) this.price = this.selectedValue_1 * 17.5;
      if(this.selectedValue_1 == 10 ) this.price = this.selectedValue_1 * 16.5;
      if(this.selectedValue_1 == 15 ) this.price = this.selectedValue_1 * 15;
      if(this.selectedValue_1 == 20 ) this.price = this.selectedValue_1 * 14.25;
      if(this.selectedValue_1 == 25 ) this.price = this.selectedValue_1 * 13;
      
    }
    
  }

  payment(){
    console.log(this.selectedValue_1)

    console.log(this.selectedValue_2)

    console.log(this.selectedValue_3)
  }

  
}
