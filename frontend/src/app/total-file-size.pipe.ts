import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalFileSize'
})
export class TotalFileSizePipe implements PipeTransform {

  transform(listeFichier: any[],): number {
    let total = 0;
    for(let fichier of listeFichier){
      total += fichier.tailleFichier
    }
    return total
  }

}
