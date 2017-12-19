//
// Key Reference:
// http://jsfiddle.net/mmmz8/
//

var hostname = window.location.hostname;
var pathname = window.location.pathname;
// var url      = window.location.href;

$( document ).keyup( function( e ){

    //
    //  Github
    //

    if ( hostname == 'github.com' ) {
        if( e.shiftKey && e.altKey && e.keyCode == 67 ) {
            // Shift + Alt + C
            // Commits
            $( ".commits a" )[0].click();
        }
        else if( e.shiftKey && e.altKey && e.keyCode == 76 ) {
            // Shift + Alt + L
            // (L)atest commit
            $( ".commit-tease .message" )[0].click();
        }
    }

    //
    //  Tiki Platform
    //

    if ( $( "body.tiki" )[0] ) {
        if( e.shiftKey && e.altKey && e.keyCode == 67 ) {
            // Shift + Alt + C
            // (C)ontrol Panels in Tab
            window.open( 'http://' + hostname + '/tiki-admin.php', '_blank');
        }
        else if( e.shiftKey && e.altKey && e.keyCode == 68 ) {
            // Shift + Alt + D
            // E(D)it wiki page in new tab
            window.open( 'http://' + hostname + '/tiki-editpage.php?page=' + pathname.substring(1), '_blank');
        }
        else if( e.shiftKey && e.altKey && e.keyCode == 71 ) {
            // Shift + Alt + G
            // Switch Lan(G)uage in current tab
            if ( $( "body.fr" )[0] ) {
                $( location ).attr( 'href', 'http://' + hostname + '/tiki-switch_lang.php?language=en' );
            } else if ( $( "body.en" )[0] ) {
                $( location ).attr( 'href', 'http://' + hostname + '/tiki-switch_lang.php?language=fr' );
            }
        }
        else if( e.shiftKey && e.altKey && e.keyCode == 75 ) {
            // Shift + Alt + K
            // Trac(K)ers in new tab
            window.open( 'http://' + hostname + '/trackers', '_blank');
        }
        else if( e.shiftKey && e.altKey && e.keyCode == 76 ) {
            // Shift + Alt + L
            // (L)ogin page in current tab
            $( location ).attr( 'href', 'http://' + hostname + '/tiki-login_scr.php' );
        }
        else if( e.shiftKey && e.altKey && e.keyCode == 85 ) {
            // Shift + Alt + U
            // (U)sers in new tab
            window.open( 'http://' + hostname + '/tiki-adminusers.php', '_blank');
        }
    }

    //
    //  Tutela
    //

    if ( hostname == 'tutela.lcl' || hostname == 'tutela.ca'  || hostname == 'staging.tutela.ca' || hostname == 'preview.tutela.ca') {
        if( e.ctrlKey && e.altKey && e.keyCode == 67 ) {
            // Ctrl + Alt + C
            // (C)ollection page in current tab
            $( location ).attr( 'href', 'http://' + hostname + '/Collections' );
        }
        if( e.ctrlKey && e.altKey && e.keyCode == 82 ) {
            // Ctrl + Alt + R
            // (R)esources page in current tab
            $( location ).attr( 'href', 'http://' + hostname + '/Resources' );
        }
        else if( e.ctrlKey && e.altKey && e.keyCode == 71 ) {
            // Ctrl + Alt + G
            // (G)roups page in current tab
            $( location ).attr( 'href', 'http://' + hostname + '/JoinGroups' );
        }
        else if( e.ctrlKey && e.altKey && e.keyCode == 69 ) {
            // Ctrl + Alt + E
            // (E)vents page in current tab
            $( location ).attr( 'href', 'http://' + hostname + '/Events' );
        }
        else if( e.ctrlKey && e.altKey && e.keyCode == 70 ) {
            // Ctrl + Alt + F
            // (F)orums page in current tab
            $( location ).attr( 'href', 'http://' + hostname + '/tiki-forums.php' );
        }
        else if( e.ctrlKey && e.altKey && e.keyCode == 72 ) {
            // Ctrl + Alt + H
            // (H)elp page in current tab
            $( location ).attr( 'href', 'http://' + hostname + '/HelpResources' );
        }
        else if( e.ctrlKey && e.altKey && e.keyCode == 79 ) {
            // Ctrl + Alt + O
            // (O)nboarding page in current tab
            $( location ).attr( 'href', 'http://' + hostname + '/OnboardingBrowse' );
        }
    }

});
