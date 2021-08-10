import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeHaveHelpedComponent } from './how-we-have-helped.component';

describe('HowWeHaveHelpedComponent', () => {
  let component: HowWeHaveHelpedComponent;
  let fixture: ComponentFixture<HowWeHaveHelpedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowWeHaveHelpedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowWeHaveHelpedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
