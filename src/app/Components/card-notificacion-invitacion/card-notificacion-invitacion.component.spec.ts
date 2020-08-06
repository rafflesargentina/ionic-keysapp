import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardNotificacionInvitacionComponent } from './card-notificacion-invitacion.component';

describe('CardNotificacionInvitacionComponent', () => {
  let component: CardNotificacionInvitacionComponent;
  let fixture: ComponentFixture<CardNotificacionInvitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNotificacionInvitacionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardNotificacionInvitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
