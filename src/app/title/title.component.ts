import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from '../services/movies.service';
import { Title } from '../models/title';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  subscription: Subscription;
  title: Title;
  constructor(
    private _moviesService: MoviesService,
    private _router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this._router.params.subscribe( params => {
      this.getTitleByID(params.id);
    });
  }

  getTitleByID(title: string) {
    this.title = new Title();
    this._moviesService.getTitleByID(title).subscribe( data => {
      this.title = data;
    });
  }
}
