import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'app/tutorial/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  type: string = '';
  imageURL: string = '';
  audioUrl: string = '';
  answers:any;
  question:any;
  questionId=0;
  constructor(
    private _questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this._questionService.fetchFirstQuestion().subscribe(response => {
      console.log(response);
      if(response)
      {
        this.getQuestionInfo(response);
      }
    });
  }


  nextQuestion(event)
  {

    console.log(event);
    this.type='';
    this._questionService.fetchNextQuestionById(this.questionId,event).subscribe(response => {
      console.log(response);
      if(response)
      {
        this.getQuestionInfo(response);
      }
    });
    
  }

  getQuestionInfo(response)
  {
    // if(response['data']['question']['question_type']=='voice')
    // {
      this.questionId=response['data']['question']['question_id'];
      this.question=response['data']['question'];
      this.type=response['data']['question']['question_type'];
      this.imageURL=response['data']['image'];
      this.audioUrl=response['data']['voice'];
      this.answers=response['data']['answers'];
   // }
  }

}
