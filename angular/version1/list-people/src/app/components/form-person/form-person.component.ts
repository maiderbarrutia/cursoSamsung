import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Person, genderSelect } from 'src/app/classes/person';
// import { DatePipe } from '@angular/common';
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
  @ViewChild('updateButton') updateButton!: ElementRef;
  @ViewChild('editButton') editButton!: ElementRef;
  // @ViewChild('updatedButtons') updatedButtons!: ElementRef;
  // @ViewChild('formButtons') formButtons!: ElementRef;
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
      edad: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(125),
      ]),
      dni: new FormControl('', [Validators.required, Validators.minLength(9)]),
      cumpleanios: new FormControl('', [Validators.required]),
      colorFavorito: new FormControl('', [
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

    this.editButton.nativeElement.style.display = 'none';
    this.updateButton.nativeElement.style.display = 'inline-block';
  }

  //Guardar los datos modificados
  updatePerson(selectedPerson: Person) {
    selectedPerson.nombre = this.form.controls['nombre'].value;
    selectedPerson.apellidos = this.form.controls['apellidos'].value;
    selectedPerson.edad = this.form.controls['edad'].value;
    selectedPerson.dni = this.form.controls['dni'].value;
    selectedPerson.cumpleanios = this.form.controls['cumpleanios'].value;
    selectedPerson.colorFavorito = this.form.controls['colorFavorito'].value;
    selectedPerson.genero = this.form.controls['genero'].value;

    this.editButton.nativeElement.style.display = 'inline-block';
    this.updateButton.nativeElement.style.display = 'none';

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
}
