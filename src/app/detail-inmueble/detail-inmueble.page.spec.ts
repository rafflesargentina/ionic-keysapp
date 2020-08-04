import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailInmueblePage } from './detail-inmueble.page';

describe('DetailInmueblePage', () => {
  let component: DetailInmueblePage;
  let fixture: ComponentFixture<DetailInmueblePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailInmueblePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailInmueblePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
