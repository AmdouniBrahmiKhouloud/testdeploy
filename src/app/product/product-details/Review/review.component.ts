import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { Review } from 'src/app/model/review';
import { User } from 'src/app/model/user';
import { ReviewService } from 'src/app/services/review.service';

export interface DialogData {
  product: Product;
  stars: number;
  rating: number;
  tempRating: number;
  starsDescriptions: string[];
  comment: string;
  userRating: number;
  review?: Review;
}

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  constructor(
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private service: ReviewService,
    private activatedRoute: ActivatedRoute
  ) {}
  @Input() product: Product;
  userRole: string = localStorage.getItem('loggedUserAccountCategory');
  reviews: Review[] = [];
  review: Review;
  id: number;
  rating: number;
  stars: number[] = [5, 4, 3, 2, 1];
  rateDescriptions: string;
  userId  = localStorage.getItem('loggedUserId')

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.service.getListReviewsByProduct(this.id).subscribe(reviews => {
      let x = 0;
      reviews.map(review => {
        x += review.rating;
      });
      this.rating = x / reviews.length;
      this.tempRating = this.rating;
      this.rateDescriptions = this.starsDescriptions[this.tempRating - 1];
      return (this.reviews = reviews);
    });
    this.service.getReview(Number(localStorage.getItem('loggedUserId')), this.id).subscribe((review: Review) => {
      this.review = review;
    });
    // this.rating = this.rating / this.reviews.length;
    this.userRole = localStorage.getItem('loggedUserAccountCategory');
  }
  starsDescriptions: string[] = ['Hated it', "Didn't like it", 'Felt Just OK', 'Liked it', 'Loved it'];
  tempRating: number;

  onHover(star) {
    this.tempRating = 0;
    this.rateDescriptions = this.starsDescriptions[star - 1];
  }

  openConfirmationDialog(id) {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      disableClose: false
    });
    dialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.delete(id).subscribe(() => {
          this.reviews = this.reviews.filter(item => item.id != id);
          let x = 0;
          this.reviews.map(review => {
            x += review.rating;
          });
          this.rating = x / this.reviews.length;
          this.tempRating = this.rating;
          this.rateDescriptions = this.starsDescriptions[this.tempRating - 1];
          this.review = null;
        });

        this._snackBar.open('Review deleted successfully!!', 'Great!', {
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
      // dialogRef = null; MatSnackBarHorizontalPosition,
    });
  }

  onHoverEnd() {
    this.rateDescriptions = this.starsDescriptions[this.rating - 1];
    this.tempRating = this.rating;
  }

  openDialog(rating) {
    const dialogRef = this.dialog.open(AddReviewDialog, {
      data: {
        product: this.product,
        stars: this.stars,
        rating,
        tempRating: rating,
        starsDescriptions: this.starsDescriptions,
        review: this.review ? this.review : { description: '', rating: rating }
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      const review: Review = {
        rating: result.rating,
        description: result.description,
        client: { idClient: Number(localStorage.getItem('loggedUserId')) },
        product: { idproduit: this.id }
      };

      if (result.id) {
        this.service.update(result).subscribe((item: Review) => {
          this.reviews.forEach((item, i) => {
            if (item.id == result.id) {
              this.reviews[i].rating = review.rating;
              this.reviews[i].description = review.description;
            }
          });

          this.review = item;
          let x = 0;
          this.reviews.map(review => {
            x += review.rating;
          });
          this.rating = x / this.reviews.length;
          this.tempRating = this.rating;
          this.rateDescriptions = this.starsDescriptions[this.tempRating - 1];
        });
        this._snackBar.open('Review added successfully!!', 'Great!', {
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      } else {
        this.service.addNewReview(review).subscribe((item: Review) => {
          this.reviews.push(item);
          this.review = item;
          let x = 0;
          this.reviews.map(review => {
            x += review.rating;
          });
          this.rating = x / this.reviews.length;
          this.tempRating = this.rating;
          this.rateDescriptions = this.starsDescriptions[this.tempRating - 1];
        });
        this._snackBar.open('Review updated successfully!!', 'Great!', {
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
      let x = 0;
      this.reviews.map(review => {
        x += review.rating;
      });
      this.rating = x / this.reviews.length;
      this.tempRating = this.rating;
      this.rateDescriptions = this.starsDescriptions[this.tempRating - 1];
    });
  }
}

@Component({
  selector: 'add-review-dialog',
  templateUrl: 'add-review-dialog.html',
  styleUrls: ['./review.component.scss']
})
export class AddReviewDialog {
  constructor(public dialogRef: MatDialogRef<AddReviewDialog>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  starsDescriptions: string[] = ['Hated it', "Didn't like it", 'Just OK', 'Liked it', 'Loved it'];
  onCancelClick(): void {
    this.dialogRef.close();
  }
  product: Product = this.data.product;
  comment: string = this.data.review?.description;
  showError: boolean;
  tempRating: number = this.data.rating;
  review = this.data.review;
  rateDescriptions: string = this.data.starsDescriptions[this.tempRating - 1];
  onStarHover(star) {
    this.rateDescriptions = this.data.starsDescriptions[star - 1];
    this.tempRating = star;
  }

  onEndHover() {
    this.rateDescriptions = this.data.starsDescriptions[this.data.tempRating - 1];
    this.tempRating = this.data.tempRating;
  }

  onClick(star) {
    this.review.rating = star;
    console.log(this.review.rating);
    this.rateDescriptions = this.data.starsDescriptions[star - 1];
  }

  // addReview() {
  //   if (this.tempRating === 0) {
  //     this.showError = true;
  //   } else {
  //     console.log(this.comment);
  //     this.dialogRef.close();
  //   }
  // }
}

@Component({
  selector: 'confirm-dialog',
  templateUrl: 'confirmation-dialog.html'
})
export class ConfirmationDialog {
  constructor(public dialogRef: MatDialogRef<ConfirmationDialog>) {}

  public confirmMessage: string;
}