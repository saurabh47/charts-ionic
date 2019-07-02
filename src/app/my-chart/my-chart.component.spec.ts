import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChartComponent } from './my-chart.component';

describe('MyChartComponent', () => {
  let component: MyChartComponent;
  let fixture: ComponentFixture<MyChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyChartComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
