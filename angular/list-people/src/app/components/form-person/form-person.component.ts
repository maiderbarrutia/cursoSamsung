import { Component, OnInit } from '@angular/core';
import { Person, sexSelect, colorType } from 'src/app/classes/person';
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
    this.people = [];
    this.form = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  ngOnInit(): void {}
  //Comprobar si los datos son válidos
  isValidField(field: string) {}

  getErrorMessage(field: string) {}

  //Añadir persona y visualizarlas en una lista
  addPerson() {
    let newPerson = this.form.value;
    this.people.push(newPerson);
    this.form.reset();
  }

  //Modificar los registros de la persona (los campos)
  modifyPerson() {}
  //Borrar los registros de la persona (los campos)
  deletePerson() {}

  //Enviar formulario
  // sendForm() {
  //   alert(`Enviado! ${this.form.value.nombre}`);
  // }
}
