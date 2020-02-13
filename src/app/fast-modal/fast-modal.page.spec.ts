import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FastModalPage } from './fast-modal.page';

describe('FastModalPage', () => {
  let component: FastModalPage;
  let fixture: ComponentFixture<FastModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FastModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
