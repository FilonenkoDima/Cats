import { HttpInterceptorFn } from '@angular/common/http';

import { catAPI } from '../../../../enviroments/enviroments';

export const catsApiInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedReq = req.clone({
    setHeaders: {
      'x-api-key': catAPI,
    },
  });
  return next(modifiedReq);
};
