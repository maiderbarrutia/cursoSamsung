import { Component, OnInit } from '@angular/core';
import { Person, genderSelect, colorType } from 'src/app/classes/person';
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
} from '@angular/forms';
import { TileStyler } from '@angular/material/grid-list/tile-styler';

@Component({
  selector: 'form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.css'],
})
export class FormPersonComponent implements OnInit {
  selectedPerson: number;
  people: Person[];
  id: number;
  form: FormGroup;
  constructor() {
    this.selectedPerson = -1;
    this.id = 0;
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
      genero: new FormControl('', [Validators.required]),
    });
  }
  //Añadir en el select del formulario las opciones del enum llamado genderSelect
  genderSelect(): Array<string> {
    const genderValue = Object.values(genderSelect);
    return genderValue;
  }

  ngOnInit(): void {}

  //Añadir persona y visualizarlas en una lista
  addPerson() {
    let newPerson = this.form.value; //Coger los valores que se añaden en el formulario
    this.people.push(newPerson); //Añadir esos valores(mediante objetos) al array llamado people
    this.form.reset(); //Vaciar los datos del formulario después de añadir la nueva persona al array
  }

  //Hacer que los registros de la persona seleccionada se puedan modificar
  editPerson(selectedPerson: Person) {
    this.form.setValue(selectedPerson);
  }
  //Guardar los datos modificados
  updatePerson(selectedPerson: number) {
    // console.log(selectedPerson);
    this.people[selectedPerson] = this.form.value;
    // console.log(this.people[selectedPerson])
    // console.log("form value" + this.form.value)

    //console.log(this.people[selectedPerson])
    // console.log(this.form.value)
    //console.log(selectedPerson)
    // for ( let i=0; i<this.people.length; i++) {
    // selectedPerson=+ i;
    // }
    // console.log(selectedPerson)
    //   for ( let i=0; i<this.people.length; i++) {
    //     console.log( 'The ' + i + 'value is ' + this.people[i] );

    //      //this.people[i] = selectedPerson

    //     // }
    //  }
    //for (let i = 0; i < this.people.length; i++) {
    //let personId = this.people.indexOf(selectedPerson);

    // var personId =+ i;
    // personId = this.people[i];

    //console.log(newPerson)
    //}

    this.form.reset();
  }

  //Cancelar los datos modificados
  cancelUpdatePerson() {
    this.form.reset();
  }

  //Borrar los registros de la persona
  deletePerson(person: any, i: number) {
    person.splice(i, 1);
  }

  //Enviar formulario
  // sendForm() {
  //   alert(`Enviado! ${this.form.value.nombre}`);
  // }
}
