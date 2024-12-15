import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {

  console.log('Modified Request:', req);
  
  const modifiedReq = req.clone({
    setHeaders: {
      'custom-header': 'countryList'
    },
  });
  return next(modifiedReq);
};
