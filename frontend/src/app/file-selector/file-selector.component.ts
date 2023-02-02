import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-file-selector',
  templateUrl: './file-selector.component.html',
  styleUrls: ['./file-selector.component.scss']
})

export class FileSelectorComponent {
  @Input()
  public multiple: boolean = false
  
  @Input()
  public parentFormGroup: any

  @Input()
  public fileFormControlName: any

  public fichiers: Fichier[] =[];
 
  
  public onFileSelected(e: any): void {
   this.fichiers = []
    for (let file of e.target.files)
    {
      this.fichiers.push(
        {
          fichier : file,
          nomFichier: file.name,
          tailleFichier :file.size,
          dateFichier: file.lastModified
        }
      )
    }
    
    
  }


}

interface Fichier {

  fichier: File
  nomFichier: string
  tailleFichier: number
  dateFichier: number
}