import { Component, inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CardOpenComponent } from '../card-open/card-open.component';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardOpenComponent, AppComponent, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  http = inject(HttpClient);
  card:any;

  ngOnInit(): void {
    this.http.get("https://localhost:5027/api/Cards").subscribe({
      next: response => this.card = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    })
  }
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  playVideo() {
    this.videoElement.nativeElement.play();
  }

  pauseVideo() {
    this.videoElement.nativeElement.pause();
    this.videoElement.nativeElement.currentTime = 0; // Reseta o vídeo para o início
  } 
}
