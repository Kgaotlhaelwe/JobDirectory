import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobInfoPage } from './job-info.page';

describe('JobInfoPage', () => {
  let component: JobInfoPage;
  let fixture: ComponentFixture<JobInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
