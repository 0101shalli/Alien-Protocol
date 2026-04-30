declare module '@nestjs/config' {
  export class ConfigService {
    get<T = any>(propertyPath: string): T;
  }
}

declare module '@stellar/stellar-sdk' {
  export namespace rpc {
    class Server {
      constructor(url: string);
      getNetwork(): Promise<{ passphrase: string }>;
    }
  }

  export class Contract {
    constructor(id: string);
  }
}
