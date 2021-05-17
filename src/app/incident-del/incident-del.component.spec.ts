import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentDelComponent } from './incident-del.component';

describe('IncidentDelComponent', () => {
  let component: IncidentDelComponent;
  let fixture: ComponentFixture<IncidentDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentDelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
