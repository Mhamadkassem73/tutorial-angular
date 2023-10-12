import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SnackBarService } from 'app/tutorial/services/snack-bar.service';
import { Shared } from 'app/tutorial/shared/shared';

@Component({
  selector: 'app-test-select-multi-option',
  templateUrl: './test-select-multi-option.component.html',
  styleUrls: ['./test-select-multi-option.component.scss']
})
export class TestSelectMultiOptionComponent extends Shared implements OnInit {

  constructor(
    private _router: Router,
    private _snackBarService: SnackBarService,
  ) { super(); }

  ngOnInit(): void {
  }
  @Output() nextQuestion = new EventEmitter<any>();
  // question = "ما هي الكلمات التي تبدأ بحرف ال ب";
  @Input('question') question :string;
  @Input('data') data : { value: string, isTrue: boolean ,selected:boolean}[];
  // data = [
  //   { value: 'منزل', isTrue: false, selected: false },
  //   { value: 'باب', isTrue: true, selected: false },
  //   { value: 'بركة', isTrue: true, selected: false },
  //   { value: 'وجبة', isTrue: false, selected: false }];
  selectedTeam = { value: '----------------------', isTrue: "false" };
  minTableHeight: string = '20vh'; // Set to 50% of the viewport height

  toggleSelection(option: any): void {
    option.selected = !option.selected;
  }
  goToNextPage() {
    var test = false;
    var answers='';
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].selected != this.data[i].isTrue) {
        test = true;
      }
      if(this.data[i].selected)
      {
        answers += this.data[i].value+ "  ";
      }
    }

    if (test === true) {

      this._snackBarService.openConfirmationDialog("الجواب غير صحيح", "يرجى اعادة الاجابة", "confirm", "التالي").then(response => {
        if (response == 'confirmed') {
          var data={
            isTrue:false,
            answer:answers
          };
          this.nextQuestion.emit(data);
         // this._router.navigateByUrl('/test/test-multi-connect');

        }
      });

    }
    else {
      var data={
        isTrue:true,
        answer:answers
      };
      this.nextQuestion.emit(data);
      //this._router.navigateByUrl('/test/test-multi-connect');

    }
  }
}