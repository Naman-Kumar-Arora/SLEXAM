import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcelistComponent } from './ecelist.component';

describe('EcelistComponent', () => {
  let component: EcelistComponent;
  let fixture: ComponentFixture<EcelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
