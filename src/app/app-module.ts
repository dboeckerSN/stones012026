import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductModule } from './product/product-module';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, ProductModule, MatToolbarModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
