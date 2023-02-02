import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function fileValidator(availableExtension: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

  
        if(control.value){
            const extension = control.value.split('.').pop();
            if (!availableExtension.includes(extension)){
                return {"invalideExtension": {extension:extension}}
            }
        }
       

        return null

    }
}