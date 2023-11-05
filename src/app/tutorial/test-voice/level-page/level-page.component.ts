import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-level-page',
  templateUrl: './level-page.component.html',
  styleUrls: ['./level-page.component.scss']
})
export class LevelPageComponent implements OnInit,OnDestroy {
  private interval: any;
  samePage=true;
  constructor(
    private _router:Router
  ) { }
  countdown: number = 5;
  imageURL=environment.url+"level1/l1.jpeg";
  ngOnInit(): void {


     this.interval = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(this.interval);
        if(this.samePage==true)
        this._router.navigateByUrl('/test/question');
      }
    }, 1000);

  }
  ngOnDestroy() {
    this.samePage=false;
    clearInterval(this.interval);
  }
}
