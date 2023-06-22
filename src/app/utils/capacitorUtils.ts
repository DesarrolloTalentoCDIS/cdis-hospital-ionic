import { Capacitor } from '@capacitor/core';
import { Camera, CameraResultType } from '@capacitor/camera';

export class CapacitorUtils {
    static readonly isApp = Capacitor.getPlatform() !== 'web';
    //colocar funciones de capacitor y asi evitar replicar codigo

    takePicture = async (): Promise<string> => {
        try {
          const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.Uri
          });
      
          const imageSrc = image.webPath;
          if (imageSrc) {
            return imageSrc;
          } else {
            throw new Error('No se pudo obtener la ruta de la imagen');
          }
        } catch (error) {
          // Manejo de errores si es necesario
          console.error('Error al tomar la foto:', error);
          throw error;
        }
      };
      
      

}




