import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { SettingPage } from '../pages/setting/setting';
import { KppnPage } from '../pages/kppn/kppn';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { KppnService } from '../pages/kppn/kppn.service';
import { DetailsPage } from '../pages/details/details';
import { DetailkppnPageModule} from '../pages/detailkppn/detailkppn.module';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    SettingPage,
    KppnPage,
    TabsPage,
    HomePage,
    ContactPage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    DetailkppnPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    SettingPage,
    KppnPage,
    TabsPage,
    HomePage,
    ContactPage,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    KppnService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
