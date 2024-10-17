import {TranslateService, Translations} from './translate.service';
import {TestBed} from '@angular/core/testing';
import {provideHttpClient} from '@angular/common/http';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';

const defaultUrl = 'assets/en.json';

const en = {
  'greeting': 'Hello!'
};

const de = {
  'greeting': 'Hallo!'
};

describe('TranslateService', () => {

  let ts: TranslateService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TranslateService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    ts = TestBed.inject(TranslateService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('service is created', () => {
    expect(ts).toBeTruthy();
  });

  it('load default en language on init', () => {
    // Prepare subscription to onTranslationChange event invoked in constructor
    let translations: Translations | undefined;
    ts.onTranslationChange.subscribe(t => translations = t);

    // Mock the request called in constructor
    initTranslations();

    expect(translations).toEqual(en);
  });

  it('get translation for en', () => {
    initTranslations();

    const key = 'greeting';

    let translation: string | undefined;
    ts.get(key).subscribe(t => translation = t);

    expect(translation).toEqual('Hello!');
  });

  it('get a translation with deferred loading of translations', () => {
    const key = 'greeting';

    let translation: string | undefined;
    ts.get(key).subscribe(t => translation = t);

    initTranslations();

    expect(translation).toEqual('Hello!');
  });

  it('change language', () => {
    initTranslations();

    let translations: Translations | undefined;
    ts.onTranslationChange.subscribe(t => translations = t);

    ts.use('de');

    serveTranslations('assets/de.json', de);

    expect(translations).toEqual(de);
  });

  it('get translation for de', () => {
    initTranslations();

    ts.use('de');

    serveTranslations('assets/de.json', de);

    const key = 'greeting';

    let translation: string | undefined;
    ts.get(key).subscribe(t => translation = t);

    expect(translation).toEqual('Hallo!');
  });

  function initTranslations() {
    serveTranslations(defaultUrl, en);
  }

  function serveTranslations(expectedUrl: string, translations: Translations) {
    // Get request called in constructor
    const request = controller.expectOne(expectedUrl);

    // Answer the request so the Observable emits a value.
    request.flush(translations);

    // Now verify that all requests have been handled.
    controller.verify();
  }
});
