var Class = require( 'findhit-class' ),
    Util = require( 'findhit-util' ),
    Package = require( 'requirehit-package' ),

    debug = require( 'debug' )( 'requirehit:package' );

// -----------------------------------------------------------------------------

/**
 * @name Storage
 * @constructor
 *
 * Handles storage for packages
 **/
var Storage = module.exports = Class.extend({

    options: {},

    initialize: function ( options ) {
        options = this.setOptions( options );

        this.packages = [];
    },

    addPackage: function ( package ) {

        // Check if it is really a package
        if ( ! package || ! ( package instanceof Package ) ) {
            throw new TypeError( "please provide a valid package" );
        }

        var index = this.packages.indexOf( package );

        if ( index === -1 ) {
            this.package.push( package );
        }

        return this;
    },

    removePackage: function ( package ) {

        // Check if it is really a package
        if ( ! package || ! ( package instanceof Package ) ) {
            throw new TypeError( "please provide a valid package" );
        }

        var index = this.packages.indexOf( package );

        if ( index !== -1 ) {
            this.package.splice( index, 1 );
        }

        return this;
    },

    store: function () {
        // get output from packages
        // store
    },

});
