import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapaComponent } from './tapa.component';

describe('TapaComponent', () => {
  let component: TapaComponent;
  let fixture: ComponentFixture<TapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TapaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
