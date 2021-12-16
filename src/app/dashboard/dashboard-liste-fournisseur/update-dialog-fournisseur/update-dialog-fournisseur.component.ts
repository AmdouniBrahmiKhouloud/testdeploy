import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Fournisseur } from 'src/app/model/fournisseur';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-update-dialog-fournisseur',
  templateUrl: './update-dialog-fournisseur.component.html',
  styleUrls: ['./update-dialog-fournisseur.component.scss']
})
export class UpdateDialogFournisseurComponent implements OnInit {
  fournisseur: Fournisseur;
  four = new Fournisseur();
  code;
  adresse;
  numero;
  libelle;

  constructor(
    private fournisseurService: FournisseurService,
    public dialogRef: MatDialogRef<UpdateDialogFournisseurComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.fournisseur = this.data.fournisseur;
    this.code = this.fournisseur.code;
    this.libelle = this.fournisseur.libelle;
    this.adresse = this.fournisseur.adresse;
    this.numero = this.fournisseur.numero;
    console.log(this.fournisseur);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick() {
    this.four.idFournisseur = this.fournisseur.idFournisseur;
    this.four.code = this.fournisseur.code;

    this.four.adresse = this.adresse;
    this.four.libelle = this.libelle;
    this.four.numero = this.numero;
    this.fournisseurService.updatefournisseur(this.four).subscribe(data => {
      console.log('four updated');
      this.dialogRef.close();
    });
  }
}
