import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCoursesComponent } from './content-courses.component';

describe('ContentCoursesComponent', () => {
  let component: ContentCoursesComponent;
  let fixture: ComponentFixture<ContentCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
