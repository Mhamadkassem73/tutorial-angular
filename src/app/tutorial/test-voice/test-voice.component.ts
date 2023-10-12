import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { extend } from 'lodash';
import { Shared } from '../shared/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-voice',
  templateUrl: './test-voice.component.html',
  styleUrls: ['./test-voice.component.scss']
})
export class TestVoiceComponent extends Shared implements OnInit,AfterViewInit{
  @ViewChild('audioPlayer', { static: true }) audioPlayer: ElementRef<HTMLAudioElement>;
  @Input('imageURL') imageURL :string;
  @Input('audioUrl') audioUrl :string;
  @Output() nextQuestion = new EventEmitter<any>();
  // imageURL:string='http://192.168.0.65:8000/levels/1/1/1/image/1.png';
  // audioUrl: string = 'http://192.168.0.65:8000/levels/1/1/1/image/1.png'; // Replace with your audio URL
  constructor(
    private _router:Router
  ) {super(); }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
        // Load the audio file 
    this.audioPlayer.nativeElement.load();
this.playAudio();
  }
  playAudio(): void {
    // Play the audio when the button is clicked
    this.audioPlayer.nativeElement.play();
  }
  goToNextPage():void
  {
    this.nextQuestion.emit(true);
    //this._router.navigateByUrl('/test/test-drag-drop');
  }
}
