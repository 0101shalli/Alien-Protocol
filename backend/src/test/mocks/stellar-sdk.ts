export const BASE_FEE = '100';

export class Account {
  constructor(public readonly id: string, public readonly sequence: string) {}
}

export const Networks = { TESTNET: 'Test SDF Network ; September 2015' };

export class Contract {
  constructor(public readonly id: string) {}
  call(..._args: any[]) { return {}; }
}

export const xdr = {
  ScVal: {
    scvBytes: (_v: Buffer) => ({}),
    scvU32: (_v: number) => ({}),
  },
  ScValType: {
    scvI128: () => 'i128',
    scvVoid: () => 'void',
  },
};

export const SorobanRpc = {
  Server: class {
    constructor(_url: string) {}
    async simulateTransaction() { return { result: { retval: { switch: () => 'void' } } }; }
    async sendTransaction() { return { status: 'PENDING' }; }
    async getTransaction() { return { status: 'SUCCESS' }; }
    async getNetwork() { return { passphrase: Networks.TESTNET }; }
  },
};

export const rpc = SorobanRpc;

export class Keypair { static fromSecret(_s: string) { return new Keypair(); } }
export class Transaction {}
export class TransactionBuilder {
  constructor(_account: any, _opts: any) {}
  addOperation(_op: any) { return this; }
  setTimeout(_n: number) { return this; }
  build() { return {}; }
}
