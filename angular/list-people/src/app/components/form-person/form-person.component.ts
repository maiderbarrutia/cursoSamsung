import { Component, OnInit } from '@angular/core';
import { Person, genderSelect, colorType } from 'src/app/classes/person';
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.css'],
})
export class FormPersonComponent implements OnInit {
  people: Person[];
  form: FormGroup;
  constructor() {
    this.people = [];this.form = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      genero: new FormControl('', [Validators.required]),
    });
  }
  //Añadir en el select del formulario las opciones del enum llamado genderSelect
  genderSelect():Array<string> {
    const genderValue =Object.values(genderSelect);
    return genderValue;
  }
  
  ngOnInit(): void {}

  //Añadir persona y visualizarlas en una lista
  addPerson() {
    let newPerson = this.form.value; //Coger los valores que se añaden en el formulario
    this.people.push(newPerson); //Añadir esos valores(mediante objetos) al array llamado people
    this.form.reset(); //Vaciar los datos del formulario después de añadir la nueva persona al array
    console.log(newPerson); //Para ver un console con todas las opciones de Person que se generan despues de añadir por el formulario
  }

  //Hacer que los registros de la persona seleccionada se puedan modificar
  editPerson(selectedPerson:Person) {
   this.form.setValue(selectedPerson);
  }
  //Guardar los datos modificados
  updatePerson(){
    /*Utilizar observables*/
  }
  //Cancelar los datos modificados
  cancelUpdatePerson(){
    this.form.reset();
  }
    
  //Borrar los registros de la persona
  deletePerson() {
    // this.people.splice(event, 1)
    // const index: number = this.people.indexOf(event);
    // if (index !== -1) {
    //     this.people.splice(index, 1);
    // } 
    // const selectedCard =event.currentTarget;
    // console.log(selectedCard);
    // this.people.splice(selectedCard);
  //   this.people = this.people.filter(function(event) {
     
  // })
    // const selectedCard = parseInt(event);
    // this.people.splice(selectedCard, 1);
  }

  //Enviar formulario
  // sendForm() {
  //   alert(`Enviado! ${this.form.value.nombre}`);
  // }
}
