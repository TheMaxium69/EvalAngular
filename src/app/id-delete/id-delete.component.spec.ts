import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdDeleteComponent } from './id-delete.component';

describe('IdDeleteComponent', () => {
  let component: IdDeleteComponent;
  let fixture: ComponentFixture<IdDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
