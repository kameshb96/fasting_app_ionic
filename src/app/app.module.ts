import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodInfoPage } from './food-info/food-info.page';
import { CustomFastPage } from './custom-fast/custom-fast.page';
import { FastModalPage } from './fast-modal/fast-modal.page';
import { AutoCompleteModule } from 'ionic4-auto-complete';
import { PasswordPage } from './password/password.page';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { PasswordPageModule } from './password/password.module';
import { FastModalPageModule } from './fast-modal/fast-modal.module';
import { CustomFastPageModule } from './custom-fast/custom-fast.module';
import { FoodInfoPageModule } from './food-info/food-info.module';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [FoodInfoPage, CustomFastPage, FastModalPage, PasswordPage],
  imports: [BrowserModule,
            IonicModule.forRoot(), 
            AppRoutingModule, 
            FormsModule, 
            HttpClientModule,
            PasswordPageModule,
            FastModalPageModule,  
            CustomFastPageModule,
            FoodInfoPageModule,
            AutoCompleteModule],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    BackgroundMode,       
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
