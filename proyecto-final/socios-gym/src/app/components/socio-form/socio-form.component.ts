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
  displayedColumns: string[] = ['nombre', 'numeroSocio', 'buttons'];
  socios: Socio[];
  form: FormGroup;
  memberToUpdate: number;
  isEditing: boolean;
  dataSource = new MatTableDataSource<Socio>();

  constructor() {
    this.socios = [];
    this.memberToUpdate = 0;
    this.isEditing = false;
    this.form = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      socio: new FormControl('', [Validators.required]),
    });
  }

  //Añadir socio y visualizarlas en una lista
  addMember() {
    let newMember = this.form.value;

    let memberNumberExists = this.socios.find(
      (element) => element.socio === newMember.socio
    );

    if (!memberNumberExists) {
      this.socios.push(newMember);
      this.dataSource.data = this.socios;
      this.form.reset();
    } else {
      alert(
        `El número de socio ${{
          memberNumberExists,
        }} introducido ya existe, introduzca uno nuevo`
      );
    }
  }

  //Hacer que los registros del socio seleccionado se puedan modificar
  editMember(selectedPerson: Socio, i: number) {
    this.isEditing = true;
    this.form.setValue(selectedPerson);
    this.memberToUpdate = i;
  }

  //Guardar los datos modificados
  updateMember(memberToUpdate: number) {
    this.isEditing = false;
    this.socios[memberToUpdate] = this.form.value;
    this.dataSource.data = this.socios;
    this.form.reset();
  }

  //Borrar los registros de la persona
  deleteMember(i: number) {
    this.socios.splice(i, 1);
    this.dataSource.data = this.socios;
  }

  ngOnInit(): void {}
}
