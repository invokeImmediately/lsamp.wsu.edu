/*!
 * Site-specific JS for the WSU LSAMP Program.
 *
 * @author - Daniel Rieck ( danielcrieck@gmail.com ) [https://github.com/invokeImmediately]
 */

( function ( $ ) {

"use strict";

////////////////////////////////////////////////////////////////////////////////////////////////////
// §1: Entry Point for Script Execution

////////////////////////////////////////////////////////////////////////////////////////////////////
// §1.1: Code executed after DOM is loaded

$( function () {
	// Tweak markup to resolve some issues from quirks of the WSU WordPress setup
	checkForEventsCalendarPage();
} );

////////////////////////////////////////////////////////////////////////////////////////////////////
// §2: Fixing WSUWP Markup

// TODO: Add inline documentation
function checkForEventsCalendarPage() {
	var $body = $( 'body' );
	if ( $body.hasClass( 'tribe-theme-spine' ) ) {
		fixEventsCalendarHeader( $body );
	}
}

// TODO: Add inline documentation
function fixEventsCalendarHeader( $body ) {
	var $main;
	var $mainHeader;
	var $subHeaderDefault;

	if ( $.isJQueryObj( $body ) ) {
		$main = $body.find( '#wsuwp-main' );
		$mainHeader = $main.find( '.main-header' );
		$subHeaderDefault = $mainHeader.find( '.sub-header-default' );
		$subHeaderDefault.text( 'LSAMP: Louis Stokes Alliance for Minority Participation' );		
	}
}

} )( jQuery );
