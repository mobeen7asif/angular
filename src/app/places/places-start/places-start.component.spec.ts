import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesStartComponent } from './places-start.component';

describe('PlacesStartComponent', () => {
  let component: PlacesStartComponent;
  let fixture: ComponentFixture<PlacesStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
