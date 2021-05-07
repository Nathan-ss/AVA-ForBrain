import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentRegisterComponent } from './content-register.component';

describe('ContentRegisterComponent', () => {
  let component: ContentRegisterComponent;
  let fixture: ComponentFixture<ContentRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
