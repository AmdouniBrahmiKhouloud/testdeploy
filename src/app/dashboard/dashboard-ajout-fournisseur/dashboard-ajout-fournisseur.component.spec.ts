import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAjoutFournisseurComponent } from './dashboard-ajout-fournisseur.component';

describe('DashboardAjoutFournisseurComponent', () => {
  let component: DashboardAjoutFournisseurComponent;
  let fixture: ComponentFixture<DashboardAjoutFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAjoutFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAjoutFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
