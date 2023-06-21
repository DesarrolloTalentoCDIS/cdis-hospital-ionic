import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { cita } from '../interfaces/cita-interface'; 

@Injectable({
  providedIn: 'root'
})
export class CitaServiceService {

  private cita: cita;
  private citasSubject: BehaviorSubject<cita[]> = new BehaviorSubject<cita[]>([]);


  constructor(){
    this.cita = {
        departamento: ' ',
        detalle: ' ',
        telefono: ' ',
      };
  }

  setCita(cita: cita) {
    this.cita = cita;
    this.citasSubject.next([this.cita])
  }

  getCita(): cita {
    return this.cita;
  }

  getCitas(): Observable<cita[]> {
    return this.citasSubject.asObservable();
  }

  delete(){
    const citas = this.citasSubject.getValue(); // Obtener la lista actual de citas
    citas.pop(); // Eliminar el último elemento de la lista

    this.citasSubject.next(citas);
  }
}
