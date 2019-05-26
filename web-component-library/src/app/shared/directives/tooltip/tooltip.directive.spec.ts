import { TooltipDirective } from './tooltip.directive';
import { ElementRef, Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<div type="text" TooltipDirective></div>`
})
class MockToolTipComponent {
}

describe('TooltipDirective', () => {
  let component: MockToolTipComponent;
  let fixture: ComponentFixture<MockToolTipComponent>;
  let element: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockToolTipComponent, TooltipDirective]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MockToolTipComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.css('div'));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
    expect(element).toBeTruthy();
  });
});
