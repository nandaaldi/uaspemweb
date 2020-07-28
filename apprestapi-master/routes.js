'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemuaKaryawan);

    app.route('/tampilliquid')
        .get(jsonku.tampilsemuaLiquid);

    app.route('/tampilmod')
        .get(jsonku.tampilsemuaMod);

    app.route('/tampilrda')
        .get(jsonku.tampilsemuaRda);

    app.route('/tampilsupplier')
        .get(jsonku.tampilsemuaSupplier);

    app.route('/tampilwire')
        .get(jsonku.tampilsemuaWire);

    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanid);

    app.route('/tampilliquid/:id')
        .get(jsonku.tampilidLiquid);

    app.route('/tampilmod/:id')
        .get(jsonku.tampilidMod);

    app.route('/tampilrda/:id')
        .get(jsonku.tampilidRda);

    app.route('/tampilsupplier/:id')
        .get(jsonku.tampilidSupplier);

    app.route('/tampilwire/:id')
        .get(jsonku.tampilidWire);

    app.route('/tambah')
        .post(jsonku.tambahKaryawan);

    app.route('/tambahliquid')
        .post(jsonku.tambahLiquid);

    app.route('/tambahmod')
        .post(jsonku.tambahMod);

    app.route('/tambahrda')
        .post(jsonku.tambahRda);

    app.route('/tambahsupplier')
        .post(jsonku.tambahSupplier);

    app.route('/tambahwire')
        .post(jsonku.tambahWire);

    app.route('/ubah')
        .put(jsonku.ubahKaryawan);

    app.route('/ubahliquid')
        .put(jsonku.ubahLiquid);

    app.route('/ubahmod')
        .put(jsonku.ubahMod);

    app.route('/ubahrda')
        .put(jsonku.ubahRda);

    app.route('/ubahsupplier')
        .put(jsonku.ubahSupplier);

    app.route('/ubahwire')
        .put(jsonku.ubahWire);

    app.route('/hapus')
        .delete(jsonku.hapusKaryawan);

    app.route('/hapusliquid')
        .delete(jsonku.hapusLiquid);

    app.route('/hapusmod')
        .delete(jsonku.hapusMod);

    app.route('/hapusrda')
        .delete(jsonku.hapusRda);

    app.route('/hapussupplier')
        .delete(jsonku.hapusSupplier);

    app.route('/hapuswire')
        .delete(jsonku.hapusWire);

}