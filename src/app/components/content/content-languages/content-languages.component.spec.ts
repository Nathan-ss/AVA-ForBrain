import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLanguagesComponent } from './content-languages.component';

describe('ContentLanguagesComponent', () => {
  let component: ContentLanguagesComponent;
  let fixture: ComponentFixture<ContentLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentLanguagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
