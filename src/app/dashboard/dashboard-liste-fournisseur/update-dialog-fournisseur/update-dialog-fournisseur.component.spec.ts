import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDialogFournisseurComponent } from './update-dialog-fournisseur.component';

describe('UpdateDialogFournisseurComponent', () => {
  let component: UpdateDialogFournisseurComponent;
  let fixture: ComponentFixture<UpdateDialogFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDialogFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDialogFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
