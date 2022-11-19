const yargs = require("yargs");
const contact = require("./contact");

yargs.command({
    command: 'add',
    desc: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: "Nama lengkap",
            demanOption: true,
            type: 'string',
        },
        email: {
            describe: "Email",
            demanOption: false,
            type: 'string',
        },
        email: {
            describe: "No HP",
            demanOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contact.simpanContact(argv.nama, argv.email, argv.noHp);
    }
}).demandCommand();

//menampilkan daftar semua nama & no hp contact
yargs.command({
    command: 'list',
    desc: 'Menampilkan semua nama  & no hp contact',
    handler() {
        contact.listContact();
    }
});

yargs.command({
    command: 'detail',
    desc: 'Menampilkan detail sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: "Nama lengkap",
            demanOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contact.detailContact(argv.nama);
    }
});

// menghapus contact berdasarkan nama
yargs.command({
    command: 'delete',
    desc: 'Menghapus sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: "Nama lengkap",
            demanOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contact.deleteContact(argv.nama);
    }
});


yargs.parse();