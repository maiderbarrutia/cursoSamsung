import { Component, OnInit, ViewChild } from '@angular/core';
import { Socio, sexSelect } from 'src/app/classes/socio';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'socio-form',
  templateUrl: './socio-form.component.html',
  styleUrls: ['./socio-form.component.css'],
})
export class SocioFormComponent implements OnInit {
  displayedColumns: string[] = [
    'numeroSocio',
    'nombre',
    'apellidos',
    'dni',
    'telefono',
    'sexo',
    'buttons',
  ];
  socios: Socio[];
  form: FormGroup;
  memberToUpdate: number;
  isEditing: boolean;
  dataSource = new MatTableDataSource<Socio>();
  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
    paginator._intl.itemsPerPageLabel = 'Socios por página:';
  }
  @ViewChild('empTbSort') empTbSort = new MatSort();
  ngAfterViewInit() {
    this.dataSource.sort = this.empTbSort;
  }

  constructor() {
    this.socios = [];
    this.memberToUpdate = 0;
    this.isEditing = false;
    this.form = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      socio: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required, Validators.minLength(9)]),
      telefono: new FormControl('', [Validators.required]),
      sexo: new FormControl('', [Validators.required]),
    });
  }

  //Añadir en el select del formulario las opciones del enum llamado sexSelect
  sexSelect(): Array<string> {
    const sexName = Object.values(sexSelect);
    return sexName;
  }

  //Añadir socio y visualizarlas en una lista (tabla)
  addMember() {
    let newMember = this.form.value;

    //Comprobar si el número de socio está ya en la lista
    let memberNumberExists = this.socios.find(
      (element) => element.socio === newMember.socio
    );
    if (!memberNumberExists) {
      this.socios.push(newMember);
      this.dataSource.data = this.socios;
      this.form.reset();
    } else {
      alert(`El número de socio introducido ya existe, introduzca uno nuevo`);
    }
  }

  //Hacer que los registros del socio seleccionado se puedan modificar
  editMember(selectedPerson: Socio, i: number) {
    this.isEditing = true;
    this.form.setValue(selectedPerson);
    this.memberToUpdate = i;
  }

  //Guardar los datos modificados del socio
  updateMember(memberToUpdate: number) {
    this.isEditing = false;
    this.socios[memberToUpdate] = this.form.value;
    this.dataSource.data = this.socios;
    this.form.reset();
  }

  //Borrar los registros del socio
  deleteMember(i: number) {
    this.socios.splice(i, 1);
    this.dataSource.data = this.socios;
  }

  ngOnInit(): void {}
}
