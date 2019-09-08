import { Component, OnInit } from '@angular/core';
import { AreasComponent } from '../areas/areas.component';
import { LocalDataService } from '../../services/local-data.service'

@Component({
  selector: 'app-local-data',
  templateUrl: './local-data.component.html',
  styleUrls: ['./local-data.component.css'],
  providers: [LocalDataService, AreasComponent]
})
export class LocalDataComponent{
  fn;
  serviceData;
  objCategories ;
  constructor(private dataservice: LocalDataService){
    this.serviceData = this.dataservice.results.forEach(element => {
      this.objCategories = element.children;
       return this.objCategories;
      });
    }

    levelA (item){
      var currentObj= item.children, subCategories, countries, clist =[]; 
      subCategories = currentObj.forEach(elem => {
        countries = elem.children.forEach(el => {
           clist.push(el.name);
          });
      });
     return clist;
    };
  }
