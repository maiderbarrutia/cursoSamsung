import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Person, genderSelect } from 'src/app/classes/person';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.css'],
})
export class FormPersonComponent implements OnInit {
  people: Person[];
  form: FormGroup;
  @ViewChild('formButtons') formButtons!: ElementRef;
  editButtonVisible: boolean;
  updateButtonVisible: boolean;
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
    this.editButtonVisible = true;
    this.updateButtonVisible = false;
  }
  //Añadir en el select del formulario las opciones del enum llamado genderSelect
  genderSelect(): Array<string> {
    const genderName = Object.values(genderSelect);
    return genderName;
  }

  //Añadir persona y visualizarlas en una lista (Cards)
  addPerson() {
    let newPerson = this.form.value;
    this.people.push(newPerson);
    this.form.reset();
  }

  //Hacer que los registros de la persona seleccionada se puedan modificar
  editPerson(selectedPerson: Person) {
    this.form.setValue(selectedPerson);
    this.formButtons.nativeElement.style.display = 'none';

    this.editButtonVisible = false;
    this.updateButtonVisible = true;
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

    this.formButtons.nativeElement.style.display = 'flex';
    this.editButtonVisible = true;
    this.updateButtonVisible = false;

    this.form.reset();
  }

  //Borrar los registros de la persona
  deletePerson(person: any, i: number) {
    person.splice(i, 1);
  }

  //Limpiar datos
  cancelUpdatePerson() {
    this.form.reset();
  }

  ngOnInit(): void {}
}
