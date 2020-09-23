import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailSucursalPage } from './detail-sucursal.page';

describe('DetailSucursalPage', () => {
  let component: DetailSucursalPage;
  let fixture: ComponentFixture<DetailSucursalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSucursalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailSucursalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
