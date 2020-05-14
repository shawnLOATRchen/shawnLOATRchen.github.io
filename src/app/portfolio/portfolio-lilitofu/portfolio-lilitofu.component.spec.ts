import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioLilitofuComponent } from './portfolio-lilitofu.component';

describe('PortfolioLilitofuComponent', () => {
  let component: PortfolioLilitofuComponent;
  let fixture: ComponentFixture<PortfolioLilitofuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioLilitofuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioLilitofuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
