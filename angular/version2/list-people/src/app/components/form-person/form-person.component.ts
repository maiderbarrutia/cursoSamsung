import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Person, genderSelect } from 'src/app/classes/person';
import { MatTableDataSource } from '@angular/material/table';

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
  PERSON_DATA: Person[] = [
    {
      id: 0,
      nombre: '',
      apellidos: '',
      edad: 0,
      dni: '',
      cumpleanios: '',
      colorFavorito: '',
      genero: genderSelect.hombre,
    },
  ];
  displayedColumns: string[] = [
    'nombre',
    'apellidos',
    'edad',
    'dni',
    'cumpleanios',
    'colorFavorito',
    'genero',
  ];
  //dataSource: any;
  //dataSource = PERSON_DATA;
  dataSource = new MatTableDataSource<Person>();
  clickedRows = new Set<Person>();
  @ViewChild('updatedButtons') updatedButtons!: ElementRef;
  @ViewChild('formButtons') formButtons!: ElementRef;
  people: Person[];
  form: FormGroup;
  constructor() {
    this.people = [];
    //this.dataSource = new MatTableDataSource<Person>([...this.PERSON_DATA]);
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
    const genderName = Object.values(genderSelect);
    return genderName;
  }

  //Añadir persona y visualizarlas en una lista (Cards)
  addPerson() {
    let newPerson = this.form.value;
    this.people.push(newPerson);
    this.dataSource.data = this.people;
    this.form.reset();
  }

  //Hacer que los registros de la persona seleccionada se puedan modificar
  editPerson(selectedPerson: Person, i: number) {
    this.form.setValue(selectedPerson);
    this.formButtons.nativeElement.style.display = 'none';
  }

  //Guardar los datos modificados
  updatePerson(selectedPerson: Person, i: number) {
    selectedPerson.nombre = this.form.controls['nombre'].value;
    selectedPerson.apellidos = this.form.controls['apellidos'].value;
    selectedPerson.edad = this.form.controls['edad'].value;
    selectedPerson.dni = this.form.controls['dni'].value;
    selectedPerson.cumpleanios = this.form.controls['cumpleanios'].value;
    selectedPerson.colorFavorito = this.form.controls['colorFavorito'].value;
    selectedPerson.genero = this.form.controls['genero'].value;

    this.formButtons.nativeElement.style.display = 'flex';

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