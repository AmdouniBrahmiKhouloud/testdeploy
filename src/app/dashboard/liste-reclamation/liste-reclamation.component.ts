import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/model/reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-liste-reclamation',
  templateUrl: './liste-reclamation.component.html',
  styleUrls: ['./liste-reclamation.component.scss']
})
export class ListeReclamationComponent implements OnInit {
  constructor(private recService: ReclamationService) {}
  reclamation;
  name: string = '';
  reponse;
  ngOnInit(): void {
    this.getListreclamation();
  }

  getListreclamation() {
    this.recService.getListreclamation().subscribe(data => {
      this.reclamation = data;
      console.log(data);
    });
  }
  change(event) {
    this.reponse = event.target.value;
    console.log(event.target.value);
  }

  addReponse(recla: Reclamation) {
    console.log(recla);
    recla.reponse = this.reponse;
    this.recService.updatereclamation(recla).subscribe(data => {
      console.log('reclamation updated');
      this.getListreclamation();
    });
  }
}
