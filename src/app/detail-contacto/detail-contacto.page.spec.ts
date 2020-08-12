import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailContactoPage } from './detail-contacto.page';

describe('DetailContactoPage', () => {
  let component: DetailContactoPage;
  let fixture: ComponentFixture<DetailContactoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailContactoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailContactoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
