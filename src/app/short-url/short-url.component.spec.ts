import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortUrlComponent } from './short-url.component';

describe('ShortUrlComponent', () => {
  let component: ShortUrlComponent;
  let fixture: ComponentFixture<ShortUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
