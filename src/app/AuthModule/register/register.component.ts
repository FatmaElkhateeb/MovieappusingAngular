import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerReactiveForm:FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.registerReactiveForm=this.formBuilder.group(
{
  name:['',[Validators.required]],
  username:['',[Validators.required,this.cannotContainSpace]],
  password:['',[Validators.required, Validators.minLength(8)]],
  email:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" )]],
  
  confirmPassword: ['', Validators.required]
}, {
    validator:this. MustMatch('password', 'confirmPassword')



} );
 
   }
   get controlerror(){
    return this.registerReactiveForm.controls;
  }
  ngOnInit(): void {
  }
  public cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
    if((control.value as string).indexOf(' ') >= 0){
        return {cannotContainSpace: true}
    }

    return null;
}

public MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}


submitTemplateForm(){
  console.log(this.registerReactiveForm);
}



}


