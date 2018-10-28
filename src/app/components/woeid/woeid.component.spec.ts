import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoeidComponent } from './woeid.component';

describe('WoeidComponent', () => {
  let component: WoeidComponent;
  let fixture: ComponentFixture<WoeidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoeidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoeidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
