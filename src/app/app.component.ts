import { Component } from '@angular/core';
// import translation service from ngx-translate

import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-i18n-demo';

  // detect current browser language
constructor(public translate: TranslateService) {
  translate.addLangs(['en', 'fr']);
  if (localStorage.getItem('locale')) {
    const browserLang = localStorage.getItem('locale');
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  } else {
    localStorage.setItem('locale', 'en');
    translate.setDefaultLang('en');
  }
}


// create a function to let user change language

changeLang(language: string) {
  localStorage.setItem('locale', language);
  this.translate.use(language);
}


}
