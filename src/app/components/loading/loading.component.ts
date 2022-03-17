import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  constructor(public resultsService: ResultsService) {}

  ngOnInit(): void {}
}
