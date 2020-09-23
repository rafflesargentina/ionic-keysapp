import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailLlavePage } from './detail-llave.page';

describe('DetailLlavePage', () => {
  let component: DetailLlavePage;
  let fixture: ComponentFixture<DetailLlavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLlavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailLlavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
