import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChargerConectorComponent } from './add-charger-conector.component';

describe('AddChargerConectorComponent', () => {
  let component: AddChargerConectorComponent;
  let fixture: ComponentFixture<AddChargerConectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddChargerConectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddChargerConectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
