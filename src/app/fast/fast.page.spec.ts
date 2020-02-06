import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FastPage } from './fast.page';

describe('FastPage', () => {
  let component: FastPage;
  let fixture: ComponentFixture<FastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
