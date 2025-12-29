import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singleviewlist } from './singleviewlist';

describe('Singleviewlist', () => {
  let component: Singleviewlist;
  let fixture: ComponentFixture<Singleviewlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Singleviewlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Singleviewlist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
