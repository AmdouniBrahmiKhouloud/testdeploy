import { NotificationsService } from 'angular2-notifications';
import { Product } from 'src/app/model/product';
import { DetailProductService } from 'src/app/services/detailProduit.service';
import { ProductService } from 'src/app/services/product.service';
import { productsDB } from '../../shared/data/products';
import {FactureService} from '../../services/facture.service';
import {Router} from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PromotionService } from '../../services/promotion.service';
import { Promotion } from '../../model/promotion';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'll-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  libelle:any;
  term:any;
  isLoaded: boolean;
 advanceSearchExpanded: boolean = false;
 //products : Product[];
 view = 'list';
 products = [];
  list: Promotion[];
 definedUrl = this.productService.url+'Imgproduits/';
  listWithPromtion = [];
 newprise: number ;


 @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;
 searchText: string ;
  constructor(private productService : ProductService, private route: Router , private promotionService: PromotionService ) {}

 /* ngOnInit(): void {
    setTimeout(() => {
      this.products = productsDB.Product;
      this.isLoaded = true
    }, 8000)
  }*/
  ngOnInit(): void{

    this.promotionService.getListPromotion().subscribe((data: Promotion[]) => {
      this.list = data ;
      console.log(this.list);
      this.productService.getListProduct().subscribe(
        (d) => {
          const l: any = d ;
          console.log(l) ;
          for (let i = 0 ; i < l.length ; i++)
          {
            let found = false ;
            for (let j = 0 ; j < this.list.length ; j++)
            {
              const prom: any = this.list[j].produit ;
              console.log(l[i].idproduit);
              if (l[i].idproduit === prom.idproduit){
                this.listWithPromtion.push(this.list[j]) ;
                console.log(this.list[j]);
                found = true ;
                break ;
              }
            }
            if (!found)
            {
              this.products.push(l[i]) ;
            }
          }




          console.log(this.listWithPromtion) ;
          console.log(this.products) ;

        });
    }); }



  showProduct(id:number){
    this.route.navigate(['/products/detail-produit',id]);
  }
  displayAsc(){
    this.productService.getListProductAsc().subscribe(
      (data)=> {
        this.products=data;
      console.log(this.products=data)
      }
    )
  }
  displayDesc(){
    this.productService.getListProductDesc().subscribe(
      (data)=> {
        this.products=data;
      console.log(this.products=data)
      }
    )
  }
  displayByCat1(){this.productService.getListProductAlimentaire().subscribe(
    (data)=> {
      this.products=data;
    console.log(this.products=data)
    }
  )}
  displayByCat2(){this.productService.getListProductElectromeanager().subscribe(
    (data)=> {
      this.products=data;
    console.log(this.products=data)
    }
  )}
  displayByCat3(){this.productService.getListProductQuincaillerie().subscribe(
    (data)=> {
      this.products=data;
    console.log(this.products=data)
    }
  )}
  CategoryChoice(value:string){
    switch(value) {
      case "mod1":
         this.displayByCat1();
         break;
      case "mod2":
        this. displayByCat2();
         break;
         case "mod3":
          this.displayByCat3();
           break;

    }
  }

  modo(value: string){
    switch(value) {
      case "mod1":
         this.displayAsc();
         break;
      case "mod2":
        this.displayDesc();
         break;

    }
  }
  Search(){
    if(this.libelle == ""){
      this.ngOnInit();

    }else{
      this.products=this.products.filter(res =>{return res.libelle.toLocaleLowerCase().match(this.libelle.toLocaleLowerCase())});
    }
  }



  exportPdf(): void {

    const doc = new jsPDF();

    const columns = [['name', 'description', 'pourcentage' , 'dateBegin' , 'endate' , 'Product']];
    const data = [] ;
    this.listWithPromtion.forEach((item) => {
       data.push([item.name, item.description, item.pourcentage, item.dateBegin , item.endate , item.produit.libelle ]) ;
    }) ;



    autoTable(doc, {
      head: columns,
      body: data,
      didDrawPage: (dataArg) => {
        doc.text('list Promotion', dataArg.settings.margin.left, 12);
      }
    });

    doc.save('Promotions.pdf') ;
  }


}
