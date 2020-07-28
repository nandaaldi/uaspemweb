'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API ku berhasil!", res)
};

//menampilkan semua data mahasiswa
exports.tampilsemuaKaryawan = function (req, res) {
    connection.query('SELECT * FROM t_karyawan', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

exports.tampilsemuaLiquid = function (req, res) {
    connection.query('SELECT * FROM t_liquid', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

exports.tampilsemuaMod = function (req, res) {
    connection.query('SELECT * FROM t_mod', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

exports.tampilsemuaRda = function (req, res) {
    connection.query('SELECT * FROM t_rda', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

exports.tampilsemuaSupplier = function (req, res) {
    connection.query('SELECT * FROM t_supplier', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

exports.tampilsemuaWire = function (req, res) {
    connection.query('SELECT * FROM t_wire', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data mahasiwa berdasarkan id
exports.tampilberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM t_karyawan WHERE id_karyawan = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

exports.tampilidLiquid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM t_liquid WHERE id_liquid = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

exports.tampilidMod = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM t_mod WHERE id_mod = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

exports.tampilidRda = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM t_rda WHERE id_rda = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

exports.tampilidSupplier = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM t_supplier WHERE id_supplier = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

exports.tampilidWire = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM t_wire WHERE id_wire = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};




//menambahkan data 
exports.tambahKaryawan = function (req, res) {
    var nik = req.body.nik;
    var nama_karyawan = req.body.nama_karyawan;
    var email = req.body.email;
    var jenis_kelamin = req.body.jenis_kelamin;
    var jabatan = req.body.jabatan;
    var alamat = req.body.alamat;
    var password = req.body.password;

    connection.query('INSERT INTO t_karyawan (nik,nama_karyawan,email,jenis_kelamin,jabatan,alamat,password) VALUES(?,?,?,?,?,?,?)',
        [nik, nama_karyawan,email,  jenis_kelamin, jabatan, alamat,password],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};

exports.tambahLiquid = function (req, res) {
    var kode_liquid = req.body.kode_liquid;
    var nama_liquid = req.body.nama_liquid;
    var jumlah_liquid = req.body.jumlah_liquid;
    var harga_liquid = req.body.harga_liquid;

    connection.query('INSERT INTO t_liquid (kode_liquid,nama_liquid,jumlah_liquid,harga_liquid) VALUES(?,?,?,?)',
        [kode_liquid,nama_liquid, jumlah_liquid, harga_liquid],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};

exports.tambahMod = function (req, res) {
    var kode_mod = req.body.kode_mod;
    var nama_mod = req.body.nama_mod;
    var jumlah_mod = req.body.jumlah_mod;
    var harga_mod = req.body.harga_mod;

    connection.query('INSERT INTO t_mod (kode_mod,nama_mod,jumlah_mod,harga_mod) VALUES(?,?,?,?)',
        [kode_mod,nama_mod, jumlah_mod, harga_mod],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};

exports.tambahRda = function (req, res) {
    var kode_rda = req.body.kode_rda;
    var nama_rda = req.body.nama_rda;
    var jumlah_rda = req.body.jumlah_rda;
    var harga_rda = req.body.harga_rda;

    connection.query('INSERT INTO t_rda (kode_rda, nama_rda,jumlah_rda,harga_rda) VALUES(?,?,?,?)',
        [kode_rda, nama_rda, jumlah_rda, harga_rda],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};

exports.tambahSupplier = function (req, res) {
    var kode_supplier = req.body.kode_supplier;
    var nama_supplier = req.body.nama_supplier;
    var alamat = req.body.alamat;
    var no_hp = req.body.no_hp;

    connection.query('INSERT INTO t_supplier (kode_supplier, nama_supplier, alamat, no_hp) VALUES(?,?,?,?)',
        [kode_supplier, nama_supplier, alamat, no_hp],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};

exports.tambahWire = function (req, res) {
    var kode_wire = req.body.kode_wire;
    var nama_wire = req.body.nama_wire;
    var jumlah_wire = req.body.jumlah_wire;
    var harga_wire = req.body.harga_wire;

    connection.query('INSERT INTO t_wire (kode_wire, nama_wire, jumlah_wire, harga_wire) VALUES(?,?,?,?)',
        [kode_wire, nama_wire, jumlah_wire, harga_wire],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};

//mengubah data berdasarkan id
exports.ubahKaryawan = function (req, res) {
    var id = req.body.id_karyawan;
    var nik = req.body.nik;
    var nama_karyawan = req.body.nama_karyawan;
    var email = req.body.email;
    var jenis_kelamin = req.body.jenis_kelamin;
    var jabatan = req.body.jabatan;
    var alamat = req.body.alamat;
    var password = req.body.password;

    connection.query('UPDATE t_karyawan SET nik=?, nama_karyawan=?, email=?, jenis_kelamin=? , jabatan=?, alamat=?, password=? WHERE id_karyawan=?', [nik, nama_karyawan,email, jenis_kelamin, jabatan, alamat,password, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
}

exports.ubahLiquid = function (req, res) {
    var id = req.body.id_liquid;
    var kode_liquid = req.body.kode_liquid;
    var nama_liquid = req.body.nama_liquid;
    var jumlah_liquid = req.body.jumlah_liquid;
    var harga_liquid = req.body.harga_liquid;

    connection.query('UPDATE t_liquid SET kode_liquid=?, nama_liquid=?, jumlah_liquid=? , harga_liquid=? WHERE id_liquid=?', [kode_liquid,nama_liquid,jumlah_liquid,harga_liquid, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
}

exports.ubahMod = function (req, res) {
    var id = req.body.id_mod;
    var kode_mod = req.body.kode_mod;
    var nama_mod = req.body.nama_mod;
    var jumlah_mod = req.body.jumlah_mod;
    var harga_mod = req.body.harga_mod;

    connection.query('UPDATE t_mod SET kode_mod=?, nama_mod=?, jumlah_mod=? , harga_mod=? WHERE id_mod=?', [kode_mod,nama_mod,jumlah_mod,harga_mod, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
}

exports.ubahRda = function (req, res) {
    var id = req.body.id_rda;
    var kode_rda = req.body.kode_rda;
    var nama_rda = req.body.nama_rda;
    var jumlah_rda= req.body.jumlah_rda;
    var harga_rda = req.body.harga_rda;

    connection.query('UPDATE t_rda SET kode_rda=?, nama_rda=?, jumlah_rda=? , harga_rda=? WHERE id_rda=?', [kode_rda,nama_rda,jumlah_rda,harga_rda, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
}

exports.ubahSupplier = function (req, res) {
    var id = req.body.id_roda;
    var nama_supplier = req.body.nama_supplier;
    var kode_supplier = req.body.kode_supplier;
    var alamat = req.body.alamat;
    var no_hp = req.body.no_hp;

    connection.query('UPDATE t_supplier SET nama_supplier=?, kode_supplier=?, alamat=? , no_hp=? WHERE id_supplier=?', [nama_supplier,kode_supplier,alamat,no_hp, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
}

exports.ubahWire = function (req, res) {
    var id = req.body.id_wire;
    var kode_wire = req.body.kode_wire;
    var nama_wire = req.body.nama_wire;
    var jumlah_wire = req.body.jumlah_wire;
    var harga_wire = req.body.harga_wire;

    connection.query('UPDATE t_wire SET kode_wire=?, nama_wire=?, jumlah_wire=? , harga_wire=? WHERE id_wire=?', [kode_wire, nama_wire,jumlah_wire,harga_wire, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
}

//Menghapus data berdasarkan id
exports.hapusKaryawan = function (req, res) {
    var id = req.body.id_karyawan;
    connection.query('DELETE FROM t_karyawan WHERE id_karyawan=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data", res)
            }
        });
}

exports.hapusLiquid = function (req, res) {
    var id = req.body.id_liquid;
    connection.query('DELETE FROM t_liquid WHERE id_liquid=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data", res)
            }
        });
}

exports.hapusMod = function (req, res) {
    var id = req.body.id_mod;
    connection.query('DELETE FROM t_mod WHERE id_mod=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data", res)
            }
        });
}

exports.hapusRda = function (req, res) {
    var id = req.body.id_rda;
    connection.query('DELETE FROM t_rda WHERE id_rda=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data", res)
            }
        });
}

exports.hapusSupplier = function (req, res) {
    var id = req.body.id_supplier;
    connection.query('DELETE FROM t_supplier WHERE id_supplier=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data", res)
            }
        });
}

exports.hapusWire = function (req, res) {
    var id = req.body.id_wire;
    connection.query('DELETE FROM t_wire WHERE id_wire=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data", res)
            }
        });
}





