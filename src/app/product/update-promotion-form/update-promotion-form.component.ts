import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Promotion } from '../../model/promotion';
import { PromotionService } from '../../services/promotion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-update-promotion-form',
  templateUrl: './update-promotion-form.component.html',
  styleUrls: ['./update-promotion-form.component.scss']
})
export class UpdatePromotionFormComponent implements OnInit {

  form: FormGroup;
  promotion: Promotion;
  id: number ;
  dateBegin: string ;
  endate: string ;


  constructor(private datePipe: DatePipe, private builder: FormBuilder, private routelink: Router , private route: ActivatedRoute, private  promotionService: PromotionService , ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      (params) => {
        const id = params.get('id');
        this.id = Number(id) ;
        console.log(this.id);
      });

    this.promotionService.getPromotionById(this.id).subscribe((prom) => {
      this.promotion = prom ;
      this.dateBegin = this.promotion.dateBegin.toString().split('T')[0] ;
      this.endate = this.promotion.endate.toString().split('T')[0] ;

      this.form = this.builder.group({
        name : [this.promotion.name, [Validators.required, Validators.minLength(5)]],
        description : [this.promotion.description, Validators.required],
        pourcentage : [this.promotion.pourcentage, [Validators.required, Validators.min(0), Validators.max(100)]],
        dateBegin : [this.dateBegin, Validators.required ],
        endate : [this.endate, Validators.required],
      });

    }) ;



  }

  update(p: any): void {
    this.promotion.dateBegin = new Date( this.dateBegin) ;
    this.promotion.endate = new Date( this.endate) ;

    this.promotionService.updatePromotion(this.promotion, p.idproduit).subscribe(() => this.routelink.navigate(['/products']));

  }
  checkDate(d1: Date , d2: Date): boolean
  {

    console.log(d1 > d2 || new Date(d2) < new Date()) ;
    return d1 > d2 || new Date(d2) < new Date();
  }
}
