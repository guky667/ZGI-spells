import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  play(id:string){
    var audio = new Audio('./assets/spells/audio/' + id + '.mp3');
    audio.loop = false;
    audio.play(); 
  }

}

