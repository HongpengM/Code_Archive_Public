'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);


  /////////////////////////////////////////////////////////////////////////////
  //                                Sync Data                                //
  /////////////////////////////////////////////////////////////////////////////
  router.get('/api/syncNeo', controller.sync.syncNeo)
  router.get('/api/syncNeo/:blockStart/:blockEnd', controller.sync.syncNeoBlocks)

  /////////////////////////////////////////////////////////////////////////////
  //                                 Get Data                                //
  /////////////////////////////////////////////////////////////////////////////

  router.get('/api/getNeo/:blockStart/:blockEnd', controller.get.getNeoByRange)
  
  /////////////////////////////////////////////////////////////////////////////
  //                                 Analysis                                //
  /////////////////////////////////////////////////////////////////////////////

  router.get('/api/getNeoAnalysis/:blockStart/:blockEnd', controller.analysis.getNeoAnalysisByRange)

  
};
