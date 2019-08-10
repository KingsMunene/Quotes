import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  constructor() { }

  @Input() quote:Quote;
  @Output() trashQuote = new EventEmitter<boolean>()

  deleteGoal(complete:boolean){
    this.trashQuote.emit(complete);
  }


  ngOnInit() {
  }

}
