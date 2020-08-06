import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailPropietarioPage } from './detail-propietario.page';

describe('DetailPropietarioPage', () => {
  let component: DetailPropietarioPage;
  let fixture: ComponentFixture<DetailPropietarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPropietarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailPropietarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
