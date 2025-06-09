import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManagechargerComponent } from './add-managecharger.component';

describe('AddManagechargerComponent', () => {
  let component: AddManagechargerComponent;
  let fixture: ComponentFixture<AddManagechargerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddManagechargerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddManagechargerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
