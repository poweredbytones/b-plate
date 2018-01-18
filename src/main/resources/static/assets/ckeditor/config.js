/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
    config.allowedContent = true;
    config.fillEmptyBlocks = true;
    // allow i tags to be empty (for font awesome)
    CKEDITOR.dtd.$removeEmpty['i'] = false;
    config.extraPlugins = 'htmlwriter';
};
