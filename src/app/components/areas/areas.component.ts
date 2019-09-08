import { Component, Input } from '@angular/core';
import { LocalDataService } from '../../services/local-data.service'

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  providers: [LocalDataService]

})

export class AreasComponent {
}
