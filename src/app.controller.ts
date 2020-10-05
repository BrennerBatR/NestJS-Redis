import { Body, Controller, Get, Param, Put } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('/hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Put()
  async putHello(
    @Body() { name, key }: { name: string; key: string },
  ): Promise<string> {
    await this.appService.setCache(key, name);
    return name;
  }

  @Get('/:key')
  getHello(@Param('key') key: string): Promise<string> {
    return this.appService.getCache(key);
  }
}
