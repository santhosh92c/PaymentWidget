import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidator {
    static invalidName(control: AbstractControl) {
        
    }

    static invalidCardNumber(control: AbstractControl): ValidationErrors {
		let value = control.value;
		if (/[^0-9-\s]+/.test(value)) return {invalidCardNumber: true};

		let nCheck = 0, nDigit = 0, bEven = false;
		value = value.replace(/\D/g, "");

		for (let n = value.length - 1; n >= 0; n--) {
			let cDigit = value.charAt(n),
				nDigit = parseInt(cDigit, 10);

			if (bEven) {
				if ((nDigit *= 2) > 9) nDigit -= 9;
			}

			nCheck += nDigit;
			bEven = !bEven;
		}

		if((nCheck % 10) == 0) 
			return null;
		return {invalidCardNumber: true};
    }

    static invalidDate(control: AbstractControl): ValidationErrors{
		let value = (control.value).split("\-");
		let expYear = parseInt(value[0]);
		let expMonth = parseInt(value[1]);
		let today = new Date();
		if(expYear < today.getFullYear() || expMonth < (today.getMonth() + 1)) 
			return {invalidDate: true}
		return null;
    }

    static invalidCvv(control: AbstractControl) {
		let value = control.value;
		
		if (/[^0-9-\s]+/.test(value)) 
			return {invalidCvv: true};
		
		if(value == 123) return {invalidCvv: true};
		
		return null;
	}
}