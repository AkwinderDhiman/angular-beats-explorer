import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-beat-card',
  standalone: true,
  imports: [CommonModule, MatIconModule ],
  templateUrl: './beat-card.component.html',
  styleUrl: './beat-card.component.scss'
})
export class BeatCardComponent {
  @Input() beat: any;
  isPlaying: boolean = false;
  audio: HTMLAudioElement | null = null;

  togglePlay() {
    if (!this.audio) {
      this.audio = new Audio(this.beat.audioUrl);
    }
    if (this.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.src = this.beat.audioUrl;
      this.audio.play();
    }
    this.isPlaying = !this.isPlaying;
    
    this.audio.onended = () => {
      this.isPlaying = false;
    };
  }
}
