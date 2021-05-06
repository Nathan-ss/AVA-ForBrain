import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryStdComponent } from './entry-std.component';

describe('EntryStdComponent', () => {
  let component: EntryStdComponent;
  let fixture: ComponentFixture<EntryStdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryStdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
