import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagCalculoComponent } from './pag-calculo.component';

describe('PagCalculoComponent', () => {
  let component: PagCalculoComponent;
  let fixture: ComponentFixture<PagCalculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagCalculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagCalculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
