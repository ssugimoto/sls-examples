import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { v4 as uuid } from 'uuid'
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before');
    const now = Date.now();
    const methodKey = context.getHandler().name;
    const className = context.getClass().name;
    console.log("method class" + methodKey, className + ",uuid " + uuid());

    return next.handle().pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)));
  }
}
