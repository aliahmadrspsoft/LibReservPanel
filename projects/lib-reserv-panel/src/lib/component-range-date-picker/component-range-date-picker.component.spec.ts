import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRangeDatePickerComponent } from './component-range-date-picker.component';

describe('ComponentRangeDatePickerComponent', () => {
  let component: ComponentRangeDatePickerComponent;
  let fixture: ComponentFixture<ComponentRangeDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentRangeDatePickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentRangeDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
