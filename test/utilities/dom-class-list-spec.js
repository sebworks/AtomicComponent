'use strict';

var BASE_JS_PATH = '../../src';
var chai = require( 'chai' );
var expect = chai.expect;
var jsdom = require( 'mocha-jsdom' );

beforeEach( function() {
	jsdom();
	var domClassList = require( BASE_JS_PATH + '/utilities/dom-class-list' );
} )

describe( 'dom-class-list', function() {
  // TODO: Implement tests.
} );
