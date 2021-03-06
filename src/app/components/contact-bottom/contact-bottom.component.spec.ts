import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBottomComponent } from './contact-bottom.component';

describe('ContactBottomComponent', () => {
  let component: ContactBottomComponent;
  let fixture: ComponentFixture<ContactBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
