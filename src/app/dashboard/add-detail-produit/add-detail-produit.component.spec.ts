import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailProduitComponent } from './add-detail-produit.component';

describe('AddDetailProduitComponent', () => {
  let component: AddDetailProduitComponent;
  let fixture: ComponentFixture<AddDetailProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDetailProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDetailProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
