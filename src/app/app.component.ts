import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-reactive-examples';

  solicitudForm:FormGroup = this.fb.group({
    tipoSolicitanteCtrl:new FormControl(null,Validators.required),
    nombrePersonaFisicaCtrl:new FormControl(''),
    denominacionPersonaMoraCtrl:new FormControl(''),
    nombrePersonaMoralInput:new FormControl(''),
  });

  submited:boolean = false;


  info:any;
      
   message:string = '';
  constructor(private fb: FormBuilder) { }


  get _tipoSolicitanteCtrl() {
    return this.solicitudForm.controls['tipoSolicitanteCtrl'];
  }

  onSaveForm = () => {
    if(this.solicitudForm.invalid) return;
    
    console.log('value',this.solicitudForm.value)
    console.log('rawValue: ',this.solicitudForm.getRawValue());


    this.info = this.solicitudForm.getRawValue();
    this.submited = true;
    this.showMessage();
    this.solicitudForm.reset();

  };

  showMessage( ){

    if(this._tipoSolicitanteCtrl.value === '1') {
      this.message =  `${this.info['nombrePersonaFisicaCtrl']}`
    }
    if(this._tipoSolicitanteCtrl.value === '2'){
      this.message =  `${this.info['nombrePersonaMoralInput']} con denominación: ${this.info['denominacionPersonaMoraCtrl']}`;
    }
    
 
  }
}
