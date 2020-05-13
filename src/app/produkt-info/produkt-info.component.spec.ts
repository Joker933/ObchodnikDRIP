import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktInfoComponent } from './produkt-info.component';

describe('ProduktInfoComponent', () => {
  let component: ProduktInfoComponent;
  let fixture: ComponentFixture<ProduktInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduktInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduktInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
