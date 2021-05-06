import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryTcComponent } from './entry-tc.component';

describe('EntryTcComponent', () => {
  let component: EntryTcComponent;
  let fixture: ComponentFixture<EntryTcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryTcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryTcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
