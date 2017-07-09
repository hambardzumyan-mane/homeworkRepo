import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetcObjComponent } from './detc-obj.component';

describe('DetcObjComponent', () => {
  let component: DetcObjComponent;
  let fixture: ComponentFixture<DetcObjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetcObjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetcObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
