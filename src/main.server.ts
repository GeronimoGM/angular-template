import { App } from '@/app';
import { config } from '@/config/app.config.server';
import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';

const bootstrap = (context: BootstrapContext) => bootstrapApplication(App, config, context);

export default bootstrap;
