import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardLlaveComponent } from './card-llave.component';

describe('CardLlaveComponent', () => {
  let component: CardLlaveComponent;
  let fixture: ComponentFixture<CardLlaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardLlaveComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardLlaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
