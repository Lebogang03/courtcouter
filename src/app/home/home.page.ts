import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  teama = 0;
  teamb = 0;
  score: number;
 
  constructor(private router: Router) {}
 
  //for team A

  minus4(){

   
      console.log(this.teama -=4)
      if(this.teama<=0){
        this.teama=0;

    }
  
  }
  plus4(){
    console.log(this.teama +=4)
   
  }
  
  minus3(){
    console.log(this.teama -=3)
    if(this.teama<=0){
      this.teama=0;
    }
  }
  plus3(){
    console.log(this.teama +=3)
  }
  minus2(){
    console.log(this.teama -=2)
    if(this.teama<=0){
      this.teama=0;
    }
  }
  plus2(){
    console.log(this.teama +=2)
  }
  minus1(){
    console.log(this.teama -=1)
    if(this.teama<=0){
      this.teama=0;
    }
  }
  plus1(){
    console.log(this.teama +=1)
  }
 
  //for team B

 
  Tminus4(){
    console.log(this.teamb -=4)
    if(this.teamb<=0){
      this.teamb=0;
    }
  }
  Tplus4(){
    console.log(this.teamb +=4)
  }

  Tminus3(){
    console.log(this.teamb -=3)
    if(this.teamb<=0){
      this.teamb=0;
    }
  }
  Tplus3(){
    console.log(this.teamb +=3)
  }
  Tminus2(){
    console.log(this.teamb -=2)
    if(this.teamb<=0){
      this.teamb=0;
    }
  }
  Tplus2(){
    console.log(this.teamb +=2)
  }
  Tminus1(){
    console.log(this.teamb -=1)
    if(this.teamb<=0){
      this.teamb=0;
    }
  }
  Tplus1(){
    console.log(this.teamb +=1)
  }
 
  reset(){
    console.log(this.teama = 0)
    console.log(this.teamb = 0)
    
  }
 
 }