import { Component } from '@angular/core';
import axios from 'axios';
import { CommonModule } from '@angular/common';
import { BeatCardComponent } from "../beat-card/beat-card.component";
import { ApisService } from '../../../services/apis.service';

@Component({
  selector: 'app-beat-list',
  standalone: true,
  imports: [CommonModule, BeatCardComponent],
  templateUrl: './beat-list.component.html',
  styleUrl: './beat-list.component.scss'
})
export class BeatListComponent {
  beats: any;

  constructor(private beatsService: ApisService) {}

  ngOnInit() {
    this.beatsService.getBeats().subscribe(data => {
      if (data?.playlists?.length > 0) {
        this.beats = data.playlists[0].beats;
        console.log(this.beats);
        
      }
    });
  }
}
