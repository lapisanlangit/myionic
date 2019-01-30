import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { SettingPage } from '../setting/setting';
import { KppnPage } from '../kppn/kppn';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = KppnPage;
  tab2Root = AboutPage;
  tab3Root = SettingPage;

  constructor() {

  }
}
