import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomFastPage } from './custom-fast.page';

describe('CustomFastPage', () => {
  let component: CustomFastPage;
  let fixture: ComponentFixture<CustomFastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFastPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomFastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
