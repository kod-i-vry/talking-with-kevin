import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PagingDto } from './dm.dto';

@Controller('/workspaces/:url/dms')
export class DmController {
  @Get(':id')
  getDm(
    @Query('page') page: number,
    @Query('perPage') perPage: number,
    @Param('id') id: string,
  ) {
    return 'getDm';
  }

  @Post(':id/chats')
  postChat(@Param('id') id: string) {
    return 'postChat';
  }
}
