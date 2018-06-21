import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query = '';

  constructor() { }

  ngOnInit() {
  }

  onClick(query: string) {
    if (query) {
      console.log(query);
    }
  }

}
