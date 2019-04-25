import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsSelectedContentComponent } from './tabs-selected-content.component';

describe('TabsSelectedContentComponent', () => {
  let component: TabsSelectedContentComponent;
  let fixture: ComponentFixture<TabsSelectedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsSelectedContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsSelectedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
