import { Component, OnDestroy, OnInit } from '@angular/core';

import { RetultsService } from '../../services/retults.service';
import { Results } from '../../results';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit, OnDestroy {
  constructor(public resultsService: RetultsService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
