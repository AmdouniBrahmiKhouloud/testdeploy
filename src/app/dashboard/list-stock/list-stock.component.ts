import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockService } from 'src/app/services/stock.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-stock',
  templateUrl: './list-stock.component.html',
  styleUrls: ['./list-stock.component.scss']
})
export class ListStockComponent implements OnInit {
  view = 'list';
  stocks;
  constructor( private stockService : StockService , private route : Router) { }

  ngOnInit(): void {
    //this.stocks = productsDB.Product;
    
    this.stockService.getListStock().subscribe(
      (data)=> {
        this.stocks=data;
      console.log(this.stocks=data)
      }
    )
  }
  updateStock(id:number){
  this.route.navigate(['/dashboard/update-stock',id]);}
  
  private getStocks()
  {
    this.stockService.getListStock().subscribe(
      (data)=> {
        this.stocks=data; });
  }

deleteStock(id:number){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.stockService.deleteStock(id).subscribe(data =>
        { console.log(data);
          this.getStocks()
        } )
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
 
}

}
