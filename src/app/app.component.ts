import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pointerClassStart:string = "url('./assets/cursor/spells/";
  pointerName:string = "";
  pointerClassEnd:string = ".png'), pointer";

  flunk:boolean = false;
  lastSpell:string = "";

  play(id:string){
    if(
      (this.lastSpell == 'VOXAM' && id == 'BOOZNIK') || 
      (this.lastSpell == 'REZROV' && id == 'LEXDOM')|| 
      (this.lastSpell == 'IGRAM' && id == 'ZIMDOR')
    )
    {
      this.flunk = !this.flunk
    }
    this.lastSpell = id
    if(!['BOOZNIK', 'LEXDOM', 'ZIMDOR'].includes(id))
    {
      this.pointerName = this.pointerClassStart + id + this.pointerClassEnd
    }
    
    var audio = new Audio('./assets/spells/audio/' + id + '.mp3');
    audio.loop = false;
    audio.play(); 
    
    setTimeout(()=>{ 
      this.pointerName = ""
      
      if(this.flunk)
      {
        audio = new Audio('./assets/spells/audio/flunk.mp3');
        audio.loop = false;
        audio.play();
        this.flunk = !this.flunk
      }
    }, 2600)
  }

  getPointer(target:string = "")
  {
    if (this.pointerName.length != 0){
      return { 'cursor' : this.pointerName }
    }

    if(target == 'idle')
    {
      return { 'cursor' : "url('../assets/cursor/idle.png'), pointer" }
    }

    return { 'cursor' : "url('../assets/cursor/active.png'), pointer" }
  }

}

