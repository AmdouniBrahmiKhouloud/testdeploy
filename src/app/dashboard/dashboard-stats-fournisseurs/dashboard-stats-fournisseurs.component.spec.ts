import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStatsFournisseursComponent } from './dashboard-stats-fournisseurs.component';

describe('DashboardStatsFournisseursComponent', () => {
  let component: DashboardStatsFournisseursComponent;
  let fixture: ComponentFixture<DashboardStatsFournisseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardStatsFournisseursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStatsFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
