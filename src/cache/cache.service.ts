import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {}

  async setCache(key: string, name: string): Promise<void> {
    await this.cache.set(key, name, { ttl: 3600 });
  }

  async getCache(key: string): Promise<string> {
    const cache = await this.cache.get(key);
    return cache;
  }
}
