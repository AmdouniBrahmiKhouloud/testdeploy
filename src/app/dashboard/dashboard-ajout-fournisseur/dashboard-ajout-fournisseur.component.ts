import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Fournisseur } from 'src/app/model/fournisseur';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-dashboard-ajout-fournisseur',
  templateUrl: './dashboard-ajout-fournisseur.component.html',
  styleUrls: ['./dashboard-ajout-fournisseur.component.scss']
})
export class DashboardAjoutFournisseurComponent implements OnInit {
  fournisseur = new Fournisseur();
  form: FormGroup;
  alert = false;

  formfourni = this.builder.group({
    code: ['', Validators.required],
    label: ['', Validators.required],
    adresse: ['', Validators.required],
    numero: ['', Validators.required],
    email: ['', Validators.required]
  });
  constructor(private fournisseurService: FournisseurService, private builder: FormBuilder) {}

  ngOnInit(): void {}

  addFournisseur(formfourni) {
    this.fournisseur.code = formfourni.value.code;
    this.fournisseur.libelle = formfourni.value.label;
    this.fournisseur.adresse = formfourni.value.adresse;
    this.fournisseur.numero = formfourni.value.numero;
    this.fournisseur.email = formfourni.value.email;

    console.log(this.fournisseur);
    this.fournisseurService.addfournisseur(this.fournisseur).subscribe(data => {
      this.alert = true;
      console.log('four added');
    });
  }
}
