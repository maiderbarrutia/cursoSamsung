import { Component, OnInit } from '@angular/core';
import { Socio, sexSelect } from 'src/app/classes/socio';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'socio-form',
  templateUrl: './socio-form.component.html',
  styleUrls: ['./socio-form.component.css'],
})
export class SocioFormComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'buttons'];
  socios: Socio[];
  form: FormGroup;
  dataSource = new MatTableDataSource<Socio>();

  constructor() {
    this.socios = [];
    this.form = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  //Añadir socio y visualizarlas en una lista
  addMember() {
    let newMember = this.form.value;
    this.socios.push(newMember);
    this.dataSource.data = this.socios;
    this.form.reset();
  }

  //Hacer que los registros del socio seleccionado se puedan modificar
  editMember(selectedPerson: Socio) {
    this.form.setValue(selectedPerson);
  }

  //Guardar los datos modificados
  updateMember() {
    this.form.reset();
  }

  //Borrar los registros de la persona
  deleteMember() {}

  ngOnInit(): void {}
}
