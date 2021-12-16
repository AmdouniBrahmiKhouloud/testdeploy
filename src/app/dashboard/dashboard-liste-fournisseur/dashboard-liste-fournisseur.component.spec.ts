import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardListeFournisseurComponent } from './dashboard-liste-fournisseur.component';

describe('DashboardListeFournisseurComponent', () => {
  let component: DashboardListeFournisseurComponent;
  let fixture: ComponentFixture<DashboardListeFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardListeFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardListeFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
