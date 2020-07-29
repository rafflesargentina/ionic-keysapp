import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormRegistroPropiedadPage } from './form-registro-propiedad.page';

describe('FormRegistroPropiedadPage', () => {
  let component: FormRegistroPropiedadPage;
  let fixture: ComponentFixture<FormRegistroPropiedadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRegistroPropiedadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormRegistroPropiedadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
