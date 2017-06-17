import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingProductCardComponent } from './listing-product-card.component';

describe('ListingProductCardComponent', () => {
  let component: ListingProductCardComponent;
  let fixture: ComponentFixture<ListingProductCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingProductCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
