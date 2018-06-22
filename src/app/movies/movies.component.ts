import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Title } from '../models/title';
import { Observable, Subscription } from 'rxjs';
import { Query } from '../models/query';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  subscription: Subscription;
  query: Query[];

  constructor(
    private _moviesService: MoviesService,
    private _route: ActivatedRoute
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
}
