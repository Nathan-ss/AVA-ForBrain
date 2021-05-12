import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSpeechesComponent } from './content-speeches.component';

describe('ContentSpeechesComponent', () => {
  let component: ContentSpeechesComponent;
  let fixture: ComponentFixture<ContentSpeechesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSpeechesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSpeechesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
