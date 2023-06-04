import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualVisitaComponent } from './actual-visita.component';

describe('ActualVisitaComponent', () => {
  let component: ActualVisitaComponent;
  let fixture: ComponentFixture<ActualVisitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualVisitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
