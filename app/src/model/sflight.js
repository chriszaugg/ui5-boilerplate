/**
 * Created by TGDZACH8 on 28.08.2014.
 */

jQuery.sap.declare( 'model.sflight' );


model.sflight = {

        getModel: function() {
            var oModel = new sap.ui.model.odata.ODataModel( 'http://localhost/proxy/sap/opu/odata/sap/ZFLIGHT_311_SRV', true, '', '', '', true, false );
            return oModel;
        }

    }
