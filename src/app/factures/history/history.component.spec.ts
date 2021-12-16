import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryUserComponent } from './history.component';

describe('HistoryUserComponent', () => {
  let component: HistoryUserComponent;
  let fixture: ComponentFixture<HistoryUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
