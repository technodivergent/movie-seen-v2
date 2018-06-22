import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Title } from '../models/title';
import { Observable, Subscription } from 'rxjs';
import { Query } from '../models/query';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  subscription: Subscription;
  query: Query[];

  constructor(
    private _moviesService: MoviesService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.subscription = this._route.params.subscribe( params => {
      this.search(params.query);
    })
  }

  search(query: string) {
    this.query = [];
    this._moviesService.search(query).subscribe(data => {
      this.query = data;
    });
  }

  onClick(query: string) {
    if (query) {
      this._router.navigate(['/search', query]);
    }
  }

}
