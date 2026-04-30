import { EventEmitter } from 'events';
import { Logger } from '@nestjs/common';
import { LoggingMiddleware } from './logging.middleware';

describe('LoggingMiddleware', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('logs method, url, status code, and duration when response finishes', () => {
    const middleware = new LoggingMiddleware();
    const req = { method: 'GET', originalUrl: '/health' } as any;
    const res = new EventEmitter() as any;
    res.statusCode = 200;
    const next = jest.fn();

    jest.spyOn(Date, 'now').mockReturnValueOnce(100).mockReturnValueOnce(135);
    const loggerSpy = jest.spyOn(Logger.prototype, 'log').mockImplementation();

    middleware.use(req, res, next);
    expect(next).toHaveBeenCalledTimes(1);

    res.emit('finish');

    expect(loggerSpy).toHaveBeenCalledWith('GET /health 200 35ms');
  });
});
