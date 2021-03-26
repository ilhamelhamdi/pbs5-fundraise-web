export const campaign_category_filter = {
    text: 'Kategori',
    name: 'category',
    list: [
        {
            value: 'all',
            text: 'Semua',
        },
        {
            value: 'humanity',
            text: 'Kemanusiaan',
        },
        {
            value: 'education',
            text: 'Pendidikan',
        },
        {
            value: 'medical_and_health',
            text: 'Medis dan Kesehatan',
        },
        {
            value: 'disaster_relief',
            text: 'Bencana Alam',
        },
    ]
};

export const campaign_sort_filter = {
    text: 'Urutkan',
    name: 'sort',
    list: [
        {
            value: 'default',
            text: 'Default',
        },
        {
            value: 'urgency',
            text: 'Paling Mendesak',
        },
        {
            value: 'least_donation_amount',
            text: 'Jumlah Donasi Paling Sedikit',
        },
        {
            value: 'newest',
            text: 'Terbaru',
        },
        {
            value: 'oldest',
            text: 'Terlama',
        },
    ]
}


export const campaign_location_filter = {
    text: 'Wilayah',
    name: 'location',
    list: [
        {
            value: "all",
            text: "Semua"
        },
        {
            value: "Kabupaten Banjarnegara",
            text: "Kabupaten Banjarnegara"
        },
        {
            value: "Kabupaten Banyumas",
            text: "Kabupaten Banyumas"
        },
        {
            value: "Kabupaten Batang",
            text: "Kabupaten Batang"
        },
        {
            value: "Kabupaten Blora",
            text: "Kabupaten Blora"
        },
        {
            value: "Kabupaten Boyolali",
            text: "Kabupaten Boyolali"
        },
        {
            value: "Kabupaten Brebes",
            text: "Kabupaten Brebes"
        },
        {
            value: "Kabupaten Cilacap",
            text: "Kabupaten Cilacap"
        },
        {
            value: "Kabupaten Demak",
            text: "Kabupaten Demak"
        },
        {
            value: "Kabupaten Grobogan",
            text: "Kabupaten Grobogan"
        },
        {
            value: "Kabupaten Jepara",
            text: "Kabupaten Jepara"
        },
        {
            value: "Kabupaten Karanganyar",
            text: "Kabupaten Karanganyar"
        },
        {
            value: "Kabupaten Kebumen",
            text: "Kabupaten Kebumen"
        },
        {
            value: "Kabupaten Kendal",
            text: "Kabupaten Kendal"
        },
        {
            value: "Kabupaten Klaten",
            text: "Kabupaten Klaten"
        },
        {
            value: "Kabupaten Kudus",
            text: "Kabupaten Kudus"
        },
        {
            value: "Kabupaten Magelang",
            text: "Kabupaten Magelang"
        },
        {
            value: "Kota Magelang",
            text: "Kota Magelang"
        },
        {
            value: "Kabupaten Pati",
            text: "Kabupaten Pati"
        },
        {
            value: "Kabupaten Pekalongan",
            text: "Kabupaten Pekalongan"
        },
        {
            value: "Kota Pekalongan",
            text: "Kota Pekalongan"
        },
        {
            value: "Kabupaten Pemalang",
            text: "Kabupaten Pemalang"
        },
        {
            value: "Kabupaten Purbalingga",
            text: "Kabupaten Purbalingga"
        },
        {
            value: "Kabupaten Purworejo",
            text: "Kabupaten Purworejo"
        },
        {
            value: "Kabupaten Rembang",
            text: "Kabupaten Rembang"
        },
        {
            value: "Kota Salatiga",
            text: "Kota Salatiga"
        },
        {
            value: "Kabupaten Semarang",
            text: "Kabupaten Semarang"
        },
        {
            value: "Kota Semarang",
            text: "Kota Semarang"
        },
        {
            value: "Kabupaten Sragen",
            text: "Kabupaten Sragen"
        },
        {
            value: "Kabupaten Sukoharjo",
            text: "Kabupaten Sukoharjo"
        },
        {
            value: "Kota Surakarta (Solo)",
            text: "Kota Surakarta (Solo)"
        },
        {
            value: "Kabupaten Tegal",
            text: "Kabupaten Tegal"
        },
        {
            value: "Kota Tegal",
            text: "Kota Tegal"
        },
        {
            value: "Kabupaten Temanggung",
            text: "Kabupaten Temanggung"
        },
        {
            value: "Kabupaten Wonogiri",
            text: "Kabupaten Wonogiri"
        },
        {
            value: "Kabupaten Wonosobo",
            text: "Kabupaten Wonosobo"
        }
    ]
}

export const campaigns = [
    {
        title: '606 Santri Tinggal di Bilik Kayu 2X2 Meter',
        thumbnail: {
            imgPath: '/img/b3b81025-3da5-4957-94c9-33dba3a04e32.webp',
            width: 800,
            height: 420,
        },
        id: '12345',
        fundraiser: 'Aksi Cepat Tanggap Sumatera Barat',
        fund_collected: 800000,
        fund_targeted: 1000000,
        link: '/',
    },
    {
        title: 'Puluhan Yatim Dhuafa Ingin Meneruskan Pendidikan',
        thumbnail: {
            imgPath: '/img/b3b81025-3da5-4957-94c9-33dba3a04e32.webp',
            width: 800,
            height: 420,
        },
        id: '54321',
        fundraiser: 'Amal Khair Yasmin',
        fund_collected: 2000000,
        fund_targeted: 10000000,
        link: '/',
    },
    {
        title: 'Gerakan Berbagi Kuota dari Kerabat',
        thumbnail: {
            imgPath: '/img/b3b81025-3da5-4957-94c9-33dba3a04e32.webp',
            width: 800,
            height: 420,
        },
        id: '3752394',
        fundraiser: 'Ruang Peduli',
        fund_collected: 1511426,
        fund_targeted: 50000000,
        link: '/',
    },
]