import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cita } from 'src/app/interfaces/cita-interface';
import { CitaServiceService } from 'src/app/services/cita-service.service';
import { CapacitorUtils } from 'src/app/utils/capacitorUtils';

@Component({
  selector: 'app-detalle-cita',
  templateUrl: './detalle-cita.component.html',
  styleUrls: ['./detalle-cita.component.scss'],
})
export class DetalleCitaComponent  implements OnInit {

  image_src : any;
  set_image : boolean;

  citaDetail: cita;
  detalle: string;
  telefono: string;

  constructor(private router: Router,
              private citaService: CitaServiceService,
              private capacitorUtil: CapacitorUtils) { 
    this.image_src = " ";
    this.set_image = false;

    this.citaDetail = citaService.getCita()
    this.detalle = " "
    this.telefono = " "
  }

  ngOnInit() {}

  cancel(){
    this.router.navigate(['/']);
  }

  confirm(){

    this.citaDetail.imagenUrl = this.image_src;
    this.citaDetail.telefono = this.telefono
    this.citaDetail.detalle = this.detalle
    this.citaService.setCita(this.citaDetail)

    console.log(this.citaService.getCita())

    //Como ejemplo aqui podrias establecer como almecenada la cita.
    //this.citaService.saveCita()

    //this.router.navigate(['/tabs/tab3/success-message']);
    this.router.navigate(['tabs', 'crear-cita', 'success-message']);
  }

  takePicture(){
    this.image_src= this.capacitorUtil.takePicture();
  }

}
