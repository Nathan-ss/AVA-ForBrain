import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInitialComponent } from './content-initial.component';

describe('ContentInitialComponent', () => {
  let component: ContentInitialComponent;
  let fixture: ComponentFixture<ContentInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentInitialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
