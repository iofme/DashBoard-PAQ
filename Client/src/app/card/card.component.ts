import { Component, ViewChild, ElementRef, Input, inject, OnInit } from '@angular/core';
import { CardOpenComponent } from '../card-open/card-open.component';
import { AppComponent } from '../app.component';
import { RouterLink } from '@angular/router';
import { MuralComponent } from '../mural/mural.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardOpenComponent, AppComponent, MuralComponent,RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  @Input() name: string = '';
  @Input() age: any;
  @Input() role: string = "";
  @Input() textabout: string = "";

  http = inject(HttpClient);
  card: any;

  ngOnInit(): void {
    this.http.get("https://localhost:5027/api/Cards").subscribe({
      next: response => this.card = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    })
  } 

  @ViewChild('video', { static: true }) video!: ElementRef<HTMLVideoElement>;
  isPlaying: boolean = false;

  playVideo() {
    console.log(this.video);
    this.isPlaying = true;                       // Mostra o vídeo
    this.video.nativeElement.currentTime = 0;    // Reinicia o vídeo
    this.video.nativeElement.muted = true;      // Ativa o som
    this.video.nativeElement.play();             // Reproduz o vídeo
  }

  pauseVideo() {
    this.isPlaying = false;                      // Volta para a miniatura
    this.video.nativeElement.pause();            // Pausa o vídeo
    this.video.nativeElement.muted = true;       // Desativa o som
  }

}
