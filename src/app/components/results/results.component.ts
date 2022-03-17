import { Component, OnDestroy, OnInit } from '@angular/core';

import { ResultsService } from '../../services/results.service';
import { Results } from '../../results';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit, OnDestroy {
  constructor(public resultsService: ResultsService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
