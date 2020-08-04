import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectInmueblePage } from './select-inmueble.page';

describe('SelectInmueblePage', () => {
  let component: SelectInmueblePage;
  let fixture: ComponentFixture<SelectInmueblePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectInmueblePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectInmueblePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
