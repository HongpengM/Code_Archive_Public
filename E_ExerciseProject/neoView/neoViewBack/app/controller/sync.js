'use strict';

const Controller = require('egg').Controller;

class SyncController extends Controller {
  async syncNeo() {
    const { ctx } = this;
    try {
      const blockHash = await ctx.service.neo.syncNeo();
      ctx.status = 201;
      ctx.body = {
	blockHash,
      }
    } catch (err) {
      this.app.logger.error(err)
    }
  }

  async syncNeoBlocks() {
    const { ctx } = this;
    try {
      const blockHashs = await ctx.service.sync.syncNeoByRange(ctx.params.blockStart, ctx.params.blockEnd);
      ctx.status = 201;
      ctx.body = {
	blockHashs,
      }
    } catch (err) {
      this.app.logger.error(err)
    }
  }


}

module.exports = SyncController
