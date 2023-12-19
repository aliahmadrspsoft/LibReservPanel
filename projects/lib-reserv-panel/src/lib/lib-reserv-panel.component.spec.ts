import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibReservPanelComponent } from './lib-reserv-panel.component';

describe('LibReservPanelComponent', () => {
  let component: LibReservPanelComponent;
  let fixture: ComponentFixture<LibReservPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibReservPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibReservPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
