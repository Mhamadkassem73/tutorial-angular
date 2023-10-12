import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Shared } from 'app/tutorial/shared/shared';

@Component({
  selector: 'app-test-multi-connect',
  templateUrl: './test-multi-connect.component.html',
  styleUrls: ['./test-multi-connect.component.scss']
})
export class TestMultiConnectComponent extends Shared implements OnInit {
  constructor(

    private _router:Router
  ) { super()};
  // leftColumn = ['1', 'a', 'Elephant'];
  // rightColumn = ['Animal', 'Number', 'Alphabeta'];
  leftColumn: string[] = [];
  rightColumn: string[] = [];
  @Output() nextQuestion = new EventEmitter<any>();
  @Input('connections') connections : { left: string, right: string }[];
  // connections: { left: string, right: string }[] = [
  //   { left: '1', right: 'Number' },
  //   { left: 'a', right: 'Alphabeta' },
  //   { left: 'Elephant', right: 'Animal' }
  // ];

  selectedLeftItem: string | null = null;
  selectedRightItem: string | null = null;
  selectedItemColor: string = '';
  ngOnInit(): void {
console.log(this.connections);

    for (const connection of this.connections) {
      if (!this.leftColumn.includes(connection.left)) {
        this.leftColumn.push(connection.left);
      }

      if (!this.rightColumn.includes(connection.right)) {
        this.rightColumn.push(connection.right);
      }
    }
    this.leftColumn.sort();
    this.rightColumn.sort();
  }



  isConnected(connection: { left: string, right: string }): boolean {
    return this.selectedLeftItem === connection.left && this.selectedRightItem === connection.right;
  }


  matchItems() {
    if (this.selectedLeftItem && this.selectedRightItem) {
      const matchedConnectionIndex = this.connections.findIndex(connection =>
        connection.left === this.selectedLeftItem && connection.right === this.selectedRightItem
      );

      if (matchedConnectionIndex !== -1) {
        this.connections.splice(matchedConnectionIndex, 1); // Remove the matched connection
        this.selectedItemColor = 'blue'; // Apply a color for correct matches
        setTimeout(() => {
          this.connections = this.connections.filter(connection =>
            connection.left !== this.selectedLeftItem && connection.right !== this.selectedRightItem
          ); // Remove both matched items from the array
          this.leftColumn = this.leftColumn.filter(item => item !== this.selectedLeftItem);
          this.rightColumn = this.rightColumn.filter(item => item !== this.selectedRightItem);
          this.selectedLeftItem = null;
          this.selectedRightItem = null;
          this.selectedItemColor = '';
        }, 350); // Reset selections and color after 1 second
      } else {
        console.log("error"); // Log an error for incorrect matches
        this.selectedItemColor = 'red'; // Apply a color for incorrect matches
        this.responseFalse();
        setTimeout(() => {
          this.selectedItemColor = '';
        }, 350); // Reset color after 1 second
      }
    }
  }

  isMatched(item: string): boolean {
    return this.connections.some(connection =>
      (connection.left === item && connection.right === this.selectedRightItem) ||
      (connection.right === item && connection.left === this.selectedLeftItem)
    );
  }
  isSelectedLeft(item: string): boolean {
    return this.selectedLeftItem === item;
  }

  isSelectedRight(item: string): boolean {
    return this.selectedRightItem === item;
  }

  responseFalse() {

  }


  goToNextPage()
  {
    var data={
      isTrue:true,
      answer:'all Answers Is Connected'
    };
    this.nextQuestion.emit(data);
    //this._router.navigateByUrl('/test/test-count');
  }
  goToNextPageWithFalse()
  {
    var data={
      isTrue:false,
      answer:'an answers is false'
    };
    this.nextQuestion.emit(data);
    //this._router.navigateByUrl('/test/test-count');
  }
}
