import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JohnDoeComponent } from './john-doe.component';

describe('JohnDoeComponent', () => {
  let component: JohnDoeComponent;
  let fixture: ComponentFixture<JohnDoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JohnDoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JohnDoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
