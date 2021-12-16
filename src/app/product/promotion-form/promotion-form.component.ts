import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Promotion } from '../../model/promotion';
import { ActivatedRoute, Router } from '@angular/router';
import { PromotionService } from '../../services/promotion.service';
import { Observable } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-promotion-form',
  templateUrl: './promotion-form.component.html',
  styleUrls: ['./promotion-form.component.scss']
})
export class PromotionFormComponent implements OnInit {

  form: FormGroup;
  promotion: Promotion;
  listPromotion: Promotion[];

  id: number ;
  constructor(private builder: FormBuilder, private route: ActivatedRoute, private routelink: Router, private  promotionService: PromotionService)
  { }


  ngOnInit(): void {


    this.promotionService.getListPromotion().subscribe((data: Promotion[]) => console.log(this.listPromotion = data));



    this.route.paramMap.subscribe(
      (params) => {
        const id = params.get('id');
        this.id = Number(id) ;
        console.log(this.id);
      });

    this.promotion = new Promotion();

    this.form = this.builder.group({
      name : [this.promotion.name, [Validators.required, Validators.minLength(5)]],
      description : [this.promotion.description, Validators.required],
      pourcentage : [this.promotion.pourcentage, [Validators.required, Validators.min(0), Validators.max(100)]],
      dateBegin : [this.promotion.dateBegin, Validators.required ],
      endate : [this.promotion.endate, Validators.required],
    });

  }


  addPromotion(form: FormGroup): void {


    this.promotion.name       = form.value.name;
    this.promotion.description = form.value.description;
    this.promotion.pourcentage       = form.value.pourcentage;
    this.promotion.dateBegin     = form.value.dateBegin;
    this.promotion.endate    = form.value.endate;


    console.log(this.listPromotion.indexOf(this.promotion));

    this.promotionService.addPromotion(this.promotion, this.id ).subscribe(() => this.listPromotion.push(this.promotion));

    this.promotionService.sendMail().subscribe();
    this.routelink.navigate(['/products']) ;
  }
  checkDate(d1: Date , d2: Date): boolean
  {

    console.log(d1 > d2 || new Date(d2) < new Date()) ;
    return d1 > d2 || new Date(d2) < new Date();
  }
}
