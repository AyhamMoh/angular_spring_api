import { Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {



  transform(octets: number, ...args: any[]): string {

    const decimal: number = args[0] ? args[0] : 0
    const division: number = Math.pow(10, decimal)

    if (octets < 1024) {
      return octets + " octects";
    } else if (octets < 1024 * 1024) {
      return Math.round((octets / 1024 + Number.EPSILON) * division) / division + " Ko";
    } else if (octets < 1024 * 1024 * 1024) {
      return Math.round((octets / (1024 * 1024) + Number.EPSILON) * division) / division + " Mo";
    }

    return Math.round((octets / (1024 * 1024 * 1024) + Number.EPSILON) * division) / division + " Go";

  }

}


