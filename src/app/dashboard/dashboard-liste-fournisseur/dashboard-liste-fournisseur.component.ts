import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/app/model/fournisseur';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { ProductService } from 'src/app/services/product.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateDialogFournisseurComponent } from './update-dialog-fournisseur/update-dialog-fournisseur.component';

@Component({
  selector: 'app-dashboard-liste-fournisseur',
  templateUrl: './dashboard-liste-fournisseur.component.html',
  styleUrls: ['./dashboard-liste-fournisseur.component.scss']
})
export class DashboardListeFournisseurComponent implements OnInit {
  view = 'list';

  fournisseurs;
  constructor(private fournisseurService: FournisseurService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getListfournisseur();
  }
  getListfournisseur() {
    this.fournisseurService.getListfournisseur().subscribe(data => {
      this.fournisseurs = data;
      console.log((this.fournisseurs = data));
    });
  }

  listeProdPerFournisseur(fournisseur: Fournisseur) {
    this.fournisseurService.listeProdPerFournisseur(fournisseur).subscribe(data => {
      console.log(data);
    });
  }

  remove(fournisseur: Fournisseur) {
    // console.log(fournisseur.idFournisseur);
    this.fournisseurService.deletefournisseur(fournisseur.idFournisseur).subscribe(data => {
      console.log('four deleted');
      this.getListfournisseur();
    });
  }

  update(fournisseur: Fournisseur): void {
    const dialogRef = this.dialog.open(UpdateDialogFournisseurComponent, {
      width: '250px',
      data: { fournisseur: fournisseur }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getListfournisseur();
    });
  }
}
