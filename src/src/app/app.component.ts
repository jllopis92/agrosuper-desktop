import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  @ViewChild('videoPlayer') videoplayer: any;
  title = 'app';
  showVideo: boolean = false;
  videoUrl: any;



  constructor(public platform: Platform) {

    this.initializeApp();



  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }

  selectedVideo(num) {
    console.log("selected: ", num);
    if(num > 6){
      this.videoUrl = "/assets/videos/VfE_html5.mp4";
    }else{
      this.videoUrl = "/assets/videos/small.mp4";
    }
    this.showVideo = true;
    /* var video = document.getElementById("video-background");
     video.removeAttribute("controls")*/

  }

  hiddeAndStop() {
    console.log("stop video ");
    this.showVideo = false;

  }

  loadVideo() {
    console.log("load video");

  }
}
