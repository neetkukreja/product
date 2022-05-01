import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayassignmentComponent } from './arrayassignment.component';

describe('ArrayassignmentComponent', () => {
  let component: ArrayassignmentComponent;
  let fixture: ComponentFixture<ArrayassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayassignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
