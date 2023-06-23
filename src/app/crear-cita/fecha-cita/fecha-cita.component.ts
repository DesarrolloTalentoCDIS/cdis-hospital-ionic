import { Component, OnInit } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-fecha-cita',
  templateUrl: './fecha-cita.component.html',
  styleUrls: ['./fecha-cita.component.scss'],
})
export class FechaCitaComponent  implements OnInit {

  //recibir el dato del componente anterior
   
  selectedDate = '';

  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T07:00:00';


  formatDate(value: string){
    return format(parseISO(value), 'HH:mm, MM/d/yyyy');
  }
  
  onDateTimeChange(value: any){
    this.selectedDate = this.formatDate(value);

  }

  //pasar el dato de la fecha al siguiente componente

  constructor() { }

  ngOnInit() {}

}
