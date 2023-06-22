import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  notices: { title: string, subtitle: string, description: string, imageUrl: string }[] = [
    {
      title:"Nuevos espacios en beneficio del alumnado👨‍🎓👩‍🎓",
      subtitle:"19 de junio del 2023",
      description: `
      El proyecto de ampliación albergará espacios para ambas dependencias distribuidos en ocho pisos, 
      entre los que destacan aulas, laboratorios y auditorios para la FO🏫, seis pisos de estacionamiento🚗, 
      un salón polivalente destinado para la FACMED🏫 y el Hospital Universitario🏥 , así como instalaciones
      deportivas de usos múltiples para nuestros futuros odontólogos🏃.
      `,
      imageUrl:"https://i0.wp.com/www.medicina.uanl.mx/wp-content/uploads/2023/06/img-5584-scaled-2157x1438.jpg?resize=5184%2C3456&ssl=1"
    },
    {
      title: "Nuevo acceso",
      subtitle: "Pedro Alba acceso 3",
      description: "Se ha inaugurado un nuevo acceso.",
      imageUrl: "https://images.mnstatic.com/b5/92/b59241881f4cf8c14c14093f22c9124c.jpg"
    },
    {
      title: "¡El hospital ganó!🏥 🏥",
      subtitle: "¡Tigres ganó la final!⚽🥳",
      description: "Gracias a el campeonato se donaron 100 camas. 🛏🛏",
      imageUrl: "https://vidauniversitaria.uanl.mx/wp-content/uploads/2021/06/ampliacion-servicio-cardiologia-1hospital-universitario-hu-dr-jose-eleuterio-gonzalez-uanl-2021-5.jpg"
    },
    {
      title:"Donacion altruista de Sangre 🩸🩸🩸",
      subtitle:"Jornada de Donación Altruista de Sangre",
      description: `
       Asiste a la Donación Altruista de Sangre
      📍Banco de Sangre del Hospital Universitario
      ⏰Lunes a domingo de 7:00 a.m. a 6:00 p.m.`,
      imageUrl:"https://scontent.fmty1-1.fna.fbcdn.net/v/t39.30808-6/354453441_644475731050119_3729810781792161671_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGwpYtElLwY9oBy-vxAromxCwXHUIIMP5gLBcdQggw_mA-aSLb4JY-mr91GwXSKeBAfxEFZIbYKG_PkADUFABCe&_nc_ohc=HdumgpQ03NgAX8pFWSj&_nc_ht=scontent.fmty1-1.fna&oh=00_AfDlsPJYrjnBH4gYp1kdo8S0dooFI6bzW5tG06NVIIOiBg&oe=6498B55F"
    },
    {
      title:"Dia Mundial Del Donante de Sangre🌍",
      subtitle:"14 de junio",
      description:`
      El 14 de junio de cada año se celebra el Día Mundial del Donante de Sangre
       para agradecer a los voluntarios no remunerados🧑‍💼🧑‍💼 y concientizar la necesidad de hacer donaciones 
       regulares para garantizar la calidad, seguridad y disponibilidad de sangre y sus productos.
      `,
      imageUrl:"https://scontent.fmty1-2.fna.fbcdn.net/v/t39.30808-6/353665518_642449811252711_8927754241912131827_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeH6xY1CKsRMBxLGfwIGiW7anEWxf7kr5L-cRbF_uSvkv06ZqxvTL2iVTJN8TxCbP-g6qJH_pd4bn0fSW7tvaJxl&_nc_ohc=k2W1xTTNHbgAX-VOuhi&_nc_ht=scontent.fmty1-2.fna&oh=00_AfDAAH1n-W-9Gjv6PwEC_51TuEOQyRRDRasYkvDoPiqbFQ&oe=64990912"
    },
    {
      title:"UN PEQUEÑO GESTO PUEDE ALIMENTAR UN GRAN SUEÑO🧑‍🍼🧑‍🍼",
      subtitle:"¡DONA LECHE MATERNA!",
      description:`
      ¡Tu donación puede salvar vidas!
      `,
      imageUrl:"https://www.medicina.uanl.mx/hu/wp-content/uploads/2023/05/2023-04ABR-03-Difusion01-05-1024x1024.png"
    },
    {
      title:"Prevención de la hipertensión🫀🫀🩺",
      subtitle:"Salva a tu corazón, mide tu presión.🩺🩺",
      description: `
      La hipertensión es la presión o tensión arterial elevada.
      Es uno de los principales factores de riesgo de
      padecer enfermedad cardiovascular 🫀, cerebrovascular 🧠 y falla renal.`,
      imageUrl:"https://almomento.mx/wp-content/uploads/2019/05/HIPERTENSIO%CC%81N.jpg"
    },
    {
      title: "Servicio para Estudiantes👨‍🎓👩‍🎓",
      subtitle: "Disponible de Lunes a Sabado",
      description: "Ahora cualquier estudiante de la UANL puede consultar.",
      imageUrl: "https://heraldodemexico.com.mx/u/fotografias/m/2022/11/2/f768x1-608676_608803_5050.jpeg"
    },
    {
      title: "Diabetes en México🇲🇽🇲🇽",
      subtitle: "Conoce más de la diabetes para proteger y cuidar tu salud🩺",
      description: `
      La diabetes es una enfermedad crónica caracterizada por mantener elevados los niveles de azúcar
      (glucosa) en sangre🩸, esto, asociado a la deficiencia de insulina, afecta al corazón🫀, ojos,
      riñones y sistema nervioso.
      `,
      imageUrl: "https://img.freepik.com/vector-premium/ilustracion-diseno-prevencion-diabetes-ep-10_278713-455.jpg?w=2000"
    }
    
  ];

  ngOnInit() {
  }

}
