import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChargerVariantComponent } from './add-charger-variant.component';

describe('AddChargerVariantComponent', () => {
  let component: AddChargerVariantComponent;
  let fixture: ComponentFixture<AddChargerVariantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddChargerVariantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddChargerVariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
