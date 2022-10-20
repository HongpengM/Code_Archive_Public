'use strict'
// import * as THREE from 'three';
import * as PIXI from 'pixi.js'

// const {PIXIBlock, Block} = require('./graphics2d/block.js')
import { nameToHex,
	 hColor } from './utils/color'

import {Graphics3DApplication } from './graphics3d/graphics3DApplication.js'

import { createDOM, shiftDOM } from './utils/DOM.js'

const axios = require('axios')
const d3 = require('d3')
const ndarray = require('ndarray')
const uidv4 = require('uuid/v4')

// numjs seems deprecated
// const numjs = require('numjs');
const arrops = require('ndarray-ops')
const randomColor = require('randomcolor')



main()


async function main () {
  /// ////////////////////////////////////////////////////////////////////////////
  //                                Main Entries                               //
  /// ////////////////////////////////////////////////////////////////////////////



  let app3 = await testGraphics3DApp()

  
}

async function testGraphics3DApp () {
  let app = new Graphics3DApplication(document.body)
  app.addTestSphere(0, 0, 0)

  function f (time) {   
    requestAnimationFrame(f)
    app.render(time)
    
  }
  f()
  return app
}

