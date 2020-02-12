import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodInfoPage } from './food-info.page';

describe('FoodInfoPage', () => {
  let component: FoodInfoPage;
  let fixture: ComponentFixture<FoodInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
