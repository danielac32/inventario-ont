import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtractionStockComponent } from './subtraction-stock.component';

describe('SubtractionStockComponent', () => {
  let component: SubtractionStockComponent;
  let fixture: ComponentFixture<SubtractionStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubtractionStockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubtractionStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
