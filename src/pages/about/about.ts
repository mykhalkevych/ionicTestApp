import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public press: number = 0;
  public pan: number = 0;
  public swipe: number = 0;
  public tap: number = 0; 
  public pinch: number = 0; 
  public rotate: number = 0; 
  

  constructor(public navCtrl: NavController) {

  }
  pressEvent(e) {
    this.press++
  }
  panEvent(e) {
    this.pan++
  }
  swipeEvent(e) {
    this.swipe++
  }
  tapEvent(e) {
    this.tap++
  }
  rotateEvent(e) {
    this.rotate++
  }
  pinchEvent(e) {
    this.pinch++
  }
}
