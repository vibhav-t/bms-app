import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddupdateblogComponent } from './addupdateblog.component';

describe('AddupdateblogComponent', () => {
  let component: AddupdateblogComponent;
  let fixture: ComponentFixture<AddupdateblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddupdateblogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddupdateblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
