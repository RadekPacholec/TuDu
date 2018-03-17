// import klasy NgModule
import { NgModule }      from '@angular/core';
// import klasy BrowserModule
import { BrowserModule } from '@angular/platform-browser';
// import klasy AppComponent
import { AppComponent }  from './app.component';
// import klasy MainFormComponent
import { MainFormComponent } from './mainform.component';

// definicja modułu
@NgModule({
  // tablica importów
  imports:      [ BrowserModule ],
  // tablica deklaracji
  declarations: [ AppComponent, MainFormComponent ],
  // klasa rozruchowa
  bootstrap:    [ AppComponent ]
})
// export klasy AppModule (główna klasa aplikacji)
export class AppModule { }
