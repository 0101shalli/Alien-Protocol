export class ConfigService {
  get<T = any>(_key: string): T | undefined {
    return undefined;
  }
  getOrThrow<T = any>(_key: string): T {
    return undefined as T;
  }
}
