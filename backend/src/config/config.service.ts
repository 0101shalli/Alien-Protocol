import { Injectable } from '@nestjs/common';

type EnvReader = { get?<T = string>(key: string): T | undefined };

@Injectable()
export class ConfigService {
  constructor(private readonly configService?: EnvReader) {}

  private read(key: string, fallback = ''): string {
    const value = this.configService?.get?.<string>(key) ?? process.env[key];
    return value ?? fallback;
  }

  get stellarRpcUrl(): string {
    return this.read('STELLAR_RPC_URL', 'https://soroban-testnet.stellar.org');
  }

  get coreContractId(): string {
    return this.read('CORE_CONTRACT_ID');
  }

  get escrowContractId(): string {
    return this.read('ESCROW_CONTRACT_ID');
  }

  get factoryContractId(): string {
    return this.read('FACTORY_CONTRACT_ID');
  }

  get auctionContractId(): string {
    return this.read('AUCTION_CONTRACT_ID');
  }

  get databaseUrl(): string {
    return this.read('DATABASE_URL');
  }
}
