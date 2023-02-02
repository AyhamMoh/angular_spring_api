import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditionArticleComponent } from './page-edition-article.component';

describe('PageEditionArticleComponent', () => {
  let component: PageEditionArticleComponent;
  let fixture: ComponentFixture<PageEditionArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditionArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEditionArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
