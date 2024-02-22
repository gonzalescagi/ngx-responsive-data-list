import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxResponsiveDataListComponent } from './ngx-responsive-data-list.component';

describe('NgxResponiveDataListComponent', () => {
  let component: NgxResponsiveDataListComponent;
  let fixture: ComponentFixture<NgxResponsiveDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxResponsiveDataListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxResponsiveDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
