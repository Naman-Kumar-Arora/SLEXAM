import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CselistComponent } from './cselist.component';

describe('CselistComponent', () => {
  let component: CselistComponent;
  let fixture: ComponentFixture<CselistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CselistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
