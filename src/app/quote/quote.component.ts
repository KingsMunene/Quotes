import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  
  constructor(){}
  quotes:Quote[] = [
    new Quote(1,"The grass is greener where you water it","Neil","Kings",new Date(2019,7,10)),
    new Quote(2,"A writer is someone for whom writing is more difficult than it is for other people","Thomas Mann","Kings",new Date(2019,7,10)),
    new Quote(3,"I've got the key to my castle in the air, but whether I can unlock the door remains to be seen","Louisa May Alcott","Kings",new Date(2019,7,10)),

  ];

  showDetails(index:any){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  trashTheQuote(trashQuote: any, index: number){
    if(trashQuote){
      let sureDelete = confirm(`you are about to delete ${this.quotes[index].quote}'s quote! Are you sure? `)
      if(sureDelete){
        this.quotes.splice(index, 1);
      }
    }

  }
  addNewQuote(quote){
    let quoteLenth = this.quotes.length;
    quote.id = quoteLenth+1;
    quote.dateCreated = new Date(quote.dateCreated);

    this.quotes.push(quote);
  }
  
    ngOnInit() {

    }
    
  }
  