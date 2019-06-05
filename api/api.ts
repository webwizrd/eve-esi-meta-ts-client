export * from './meta.service';
import { MetaService } from './meta.service';
export * from './swagger.service';
import { SwaggerService } from './swagger.service';
export * from './webUI.service';
import { WebUIService } from './webUI.service';
export const APIS = [MetaService, SwaggerService, WebUIService];
