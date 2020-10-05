import { CacheModule as BaseCacheModule, Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-ioredis';
import { CacheService } from './cache.service';

@Module({
  imports: [
    BaseCacheModule.registerAsync({
      useFactory: () => {
        return {
          store: redisStore,
          host: '192.168.99.100',
          port: 6379,
          password: 'Redis2019!',
        };
      },
    }),
  ],
  providers: [CacheService],
  exports: [BaseCacheModule, CacheService],
})
export class CacheModule {}
