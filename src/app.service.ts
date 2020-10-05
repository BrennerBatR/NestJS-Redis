import { Injectable } from '@nestjs/common';
import { CacheService } from './cache/cache.service';

@Injectable()
export class AppService {
  constructor(private readonly cacheService: CacheService) {}

  async setCache(key: string, name: string): Promise<void> {
    await this.cacheService.setCache(key, name);
  }

  async getCache(key: string): Promise<string> {
    const name = await this.cacheService.getCache(key);
    return name;
  }
}
