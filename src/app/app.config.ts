import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { InMemoryScrollingFeature, withInMemoryScrolling, InMemoryScrollingOptions, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

// Scroll to top - Navbar sections changes: 
const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};
const inMemoryScrollingFeature: InMemoryScrollingFeature = withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, inMemoryScrollingFeature, withPreloading(PreloadAllModules)),
    importProvidersFrom(
      HttpClientModule
    ),

    { provide: LocationStrategy, useClass: PathLocationStrategy }

  ],

};
