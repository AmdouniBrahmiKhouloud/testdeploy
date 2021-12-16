import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProduitParFournisseurComponent } from './dashboard-produit-par-fournisseur.component';

describe('DashboardProduitParFournisseurComponent', () => {
  let component: DashboardProduitParFournisseurComponent;
  let fixture: ComponentFixture<DashboardProduitParFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardProduitParFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProduitParFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
