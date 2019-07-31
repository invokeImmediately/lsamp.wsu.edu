jQuery( function () {
    "use strict";
    if ( jQuery(".WSU_MAPS_NS").length ) {
        setTimeout(function () { jQuery.wsu_maps.state.map_inst.setOptions({'zoom': 16}); }, 1000);
        jQuery(window).resize(function () {
            setTimeout(function () { jQuery.wsu_maps.state.map_inst.setOptions({'zoom': 16}); }, 1000);
        } );
    }
} );