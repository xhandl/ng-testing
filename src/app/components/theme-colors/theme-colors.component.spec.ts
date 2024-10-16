import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ThemeColorsComponent} from './theme-colors.component';
import {click, findEl} from '../../spec-helpers';

const lightThemeBackgroundColor = 'rgb(220, 220, 220)'; // --theme-background-color: gainsboro;
const darkThemeBackgroundColor = 'rgb(52, 58, 64)'; // --theme-background-color: #343a40;

describe('ThemeColorsComponent', () => {
  let component: ThemeColorsComponent;
  let fixture: ComponentFixture<ThemeColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeColorsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ThemeColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create component', () => {
    expect(component).toBeTruthy();
  });

  it('default theme is light', () => {
    expect(document.body.classList).toContain('light-theme');
  });

  it('toggle theme to dark', () => {
    click(fixture, 'theme-colors-toggle-btn');
    fixture.detectChanges();
    expect(document.body.classList).toContain('dark-theme');
  });

  it('default content color is light', () => {
    const contentEl = findEl(fixture, 'theme-colors-content');
    const computedStyle = getComputedStyle(contentEl.nativeElement);

    expect(computedStyle.backgroundColor).toBe(lightThemeBackgroundColor);
  });

  it('toggle theme to change content color to dark', () => {
    click(fixture, 'theme-colors-toggle-btn');
    fixture.detectChanges();

    const contentEl = findEl(fixture, 'theme-colors-content');
    const computedStyle = getComputedStyle(contentEl.nativeElement);

    expect(computedStyle.backgroundColor).toBe(darkThemeBackgroundColor);
  });

  it('toggle theme twice to get light theme again', () => {
    click(fixture, 'theme-colors-toggle-btn');
    fixture.detectChanges();

    click(fixture, 'theme-colors-toggle-btn');
    fixture.detectChanges();

    const contentEl = findEl(fixture, 'theme-colors-content');
    const computedStyle = getComputedStyle(contentEl.nativeElement);

    expect(computedStyle.backgroundColor).toBe(lightThemeBackgroundColor);
  });
});
