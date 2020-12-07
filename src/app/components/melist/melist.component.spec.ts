import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelistComponent } from './melist.component';

describe('MelistComponent', () => {
  let component: MelistComponent;
  let fixture: ComponentFixture<MelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
