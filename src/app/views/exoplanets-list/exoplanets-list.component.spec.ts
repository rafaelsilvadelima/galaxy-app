import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoplanetsListComponent } from './exoplanets-list.component';

describe('ExoplanetsListComponent', () => {
  let component: ExoplanetsListComponent;
  let fixture: ComponentFixture<ExoplanetsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoplanetsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoplanetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
