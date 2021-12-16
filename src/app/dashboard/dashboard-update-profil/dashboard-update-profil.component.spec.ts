import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUpdateProfilComponent } from './dashboard-update-profil.component';

describe('DashboardUpdateProfilComponent', () => {
  let component: DashboardUpdateProfilComponent;
  let fixture: ComponentFixture<DashboardUpdateProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardUpdateProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUpdateProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
