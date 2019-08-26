import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultetComponent } from './facultet.component';

describe('FacultetComponent', () => {
  let component: FacultetComponent;
  let fixture: ComponentFixture<FacultetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
