import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardPropietarioComponent } from './card-propietario.component';

describe('CardPropietarioComponent', () => {
  let component: CardPropietarioComponent;
  let fixture: ComponentFixture<CardPropietarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPropietarioComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
