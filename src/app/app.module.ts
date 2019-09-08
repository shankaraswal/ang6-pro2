import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//CUSTOME SERVICES
import { LocalDataService } from './services/local-data.service';

//CUSTOM COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MastheadComponent } from './components/masthead/masthead.component';
import { LocalDataComponent } from './components/local-data/local-data.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { AreasComponent } from './components/areas/areas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MastheadComponent,
    LocalDataComponent,
    FeaturedComponent,
    BreadcrumbComponent,
    FooterComponent,
    AreasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LocalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
