import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SnackBarService } from 'app/tutorial/services/snack-bar.service';
import { Shared } from 'app/tutorial/shared/shared';

@Component({
  selector: 'app-test-check-true-phrase',
  templateUrl: './test-check-true-phrase.component.html',
  styleUrls: ['./test-check-true-phrase.component.scss']
})
export class TestCheckTruePhraseComponent extends Shared implements OnInit {

  constructor(
    private _snackBarService: SnackBarService,
    private _router: Router
  ) { super(); }
  @Output() nextQuestion = new EventEmitter<any>();
  phrases: { text: string, isChecked: boolean, istrue: boolean }[];
  @Input('answers') answers: any;
  @Input('question') question: any;


  //question = "ما هي الكلمةالجملة الصحيحة";


  // phrases = [
  //   { text: 'This is a true statement', isChecked: false, istrue: true },
  //   { text: 'This is a false statement', isChecked: false, istrue: false },
  //   // Add more phrases as needed
  // ];
  ngOnInit(): void {
    console.log(this.answers);
    this.phrases = []; 
    for (var i = 0; i < this.answers.length; i++) {
      this.phrases.push({
        text: this.answers[i]['value'], // Assigns 'value' from answers to 'text' property
        isChecked: false, // Sets 'isChecked' property to false
        istrue: this.answers[i]['isTrue'] // Assigns 'isTrue' from answers to 'istrue' property
      });
    }



    console.log(this.phrases);

  }


  onCheckboxChange(phrase: any) {
    phrase.isChecked = !phrase.isChecked;
  }
  goToNextPage() {

    console.log(this.phrases);
    var trueAnswer = true;
    this.phrases.forEach(phrase => {
      if (phrase.isChecked != phrase.istrue)
        trueAnswer = false;
    });

    if (trueAnswer) {
      this._snackBarService.snackBarPopup("الاجابة صحيحة", "نعم");
      this.next();

    }
    else {
      this._snackBarService.openConfirmationDialog("الاجابة غير صحيحة", "الاجابة غير صحيحة", "confirm", "التالي").then(response => {
        if (response == 'confirmed') {
          this.next();

        }
      });

    }
  }


  next() {
    var data = {
      isTrue: true,
      answer: 'all Answers Is Connected'
    };
    this.nextQuestion.emit(data);
  }
}