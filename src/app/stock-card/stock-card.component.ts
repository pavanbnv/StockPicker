import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit {

  @Input() title: string = "Default Title";
  @Input() companyName = " <No Company Name> ";

  imageUrl = '';
  @Input() 
    set imgUrl(imageUrl: string){
      this.imageUrl = imageUrl || 'https://i1.wp.com/tutorialsdojo.com/wp-content/uploads/2016/12/angular2_tutorialsdojo.jpg';;
    }

    get imgUrl(): string { return this.imageUrl; }

  @Output() addedToList = new EventEmitter<any>();

  background_color = 'white';
  selected: boolean = false;
  buttonLabel = 'Bet';

  constructor() { }

  ngOnInit() {
  }

  selectCard(){
    this.selected = !this.selected;
    this.background_color = this.selected ? 'lightgreen' : 'white';
    console.log('this.title : ' + this.title );
    this.buttonLabel = this.selected ? 'Remove Bet' : 'Bet';
    this.addedToList.emit({title: this.title, selected: this.selected});
  }
}
