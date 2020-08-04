import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailClientePage } from './detail-cliente.page';

describe('DetailClientePage', () => {
  let component: DetailClientePage;
  let fixture: ComponentFixture<DetailClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
