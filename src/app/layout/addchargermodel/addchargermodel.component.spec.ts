import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchargermodelComponent } from './addchargermodel.component';

describe('AddchargermodelComponent', () => {
  let component: AddchargermodelComponent;
  let fixture: ComponentFixture<AddchargermodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddchargermodelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddchargermodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
