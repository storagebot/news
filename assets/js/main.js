jQuery( function( $ ) {
	// Open new windows for links with a class of '.js-popup'.
	$( '.js-popup' ).on( 'click', function( e ) {
		var $this = $( this ),
			popupId = $this.data('popup-id') || 'popup',
			popupUrl = $this.data('popup-url') || $this.attr( 'href' ),
			popupWidth = $this.data('popup-width') || 550,
			popupHeight = $this.data('popup-height') || 260;

		e.preventDefault();

		window.open( popupUrl, popupId, 'width=' + popupWidth + ',height=' + popupHeight + ',directories=no,location=no,menubar=no,scrollbars=no,status=no,toolbar=no' );
	} );
});

jQuery( function( $ ) {
	// Allow a element to be clicked anywhere to access the permalink page.
	$( '.js-item-as-link' ).css( 'cursor', 'pointer' ).on( 'click', ':not(a)', function( e ) {
		var $link  = $( this ).closest( '.js-item-as-link' ).find( 'a' );
		var url    = $link.attr( 'href' );
		var target = $link.attr( 'target' );

		if ( target ) {
			window.open( url, target );
		} else {
			window.location = url;
		}
	});
});

jQuery.getJSON( "http://api.soundcloud.com/users/29821826.json?client_id=edddc3c70a1b4e30153a8a49d8d64e8c", function( json ) { 
	var playlist_count = document.getElementById('playlist_count');
	if (playlist_count != null) playlist_count.textContent = json.playlist_count;
	var track_count = document.getElementById('track_count');
	if (track_count != null) track_count.textContent = json.track_count;
});

