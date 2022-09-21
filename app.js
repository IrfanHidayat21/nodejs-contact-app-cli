// mengambil argument dari command line
// console.log(process.argv);
// const command = process.argvv[2];
// if (command === 'add') {
    
// } else if (command === 'remove') {
    
// } else if (command === 'list') {
    
// }

const yargs = require('yargs');
const { simpanContact, listContact, detailContact, deleteContact } = require('./contacts');

// parameternya satuan
// yargs.command(
//     'add',
//     'Menambahkan contact baru',
//     () => {},
//     (argv) => {
//         console.log(argv.nama);
// });

// parameternya object
yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string',
        },
        noHP: {
            describe: 'Nomor Handphone',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        simpanContact(argv.nama, argv.email, argv.noHP );
    }
}).demandCommand();

// menampilkan daftar semua nama & no hp contact
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama & no HP contact',
    handler() {
        listContact();
    },
});

// menampilkan detail sebuah contact
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        detailContact(argv.nama);
    },
});

// menghapus contact berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        deleteContact(argv.nama);
    },
});

yargs.parse();





























