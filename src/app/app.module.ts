import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { FormComponent } from './components/form/form.component';
import { ResultsComponent } from './components/results/results.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [AppComponent, TitleComponent, FormComponent, ResultsComponent, LoadingComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
