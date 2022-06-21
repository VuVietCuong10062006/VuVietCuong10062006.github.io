
let products = [
    {
        id : 1,
        name : 'Áo thun',
        decscription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, suscipit. Adipisci soluta esse illum asperiores porro consequuntur quas ea repudiandae!',
        images : [
            'https://images.unsplash.com/photo-1562737794-88835094442e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zmxhc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1574417836112-fda6a03dae97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1522403298684-4ea0d3e5858c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI0fHxmbGFzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1613963761543-cc92783708fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zmxhc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1491441555545-d6b8e24ffa33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        ],
        sizes : [
            'M',
            'L',
            'S',
            'XL'
        ],
        rating : 5,
        price : 500000
    },
    {
        id : 2,
        name : 'Áo polo',
        decscription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, suscipit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, suscipit. Adipisci soluta esse illum asperiores porro consequuntur quas ea repudiandae!',
        images : [
            'https://images.unsplash.com/photo-1616419232319-d1b7b92dca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1571878492895-23b0501dbb03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGZsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1522403298684-4ea0d3e5858c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI0fHxmbGFzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1592079927444-590c17e87f28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGZsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1509924618912-fb542eda1a12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGZsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        ],
        sizes : [
            'M',
            'L',
            'S',
            'XL'
        ],
        rating : 4,
        price : 400000
    },
    {
        id : 3,
        name : 'Áo khoác',
        decscription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, suscipit. Adipisci soluta esse illum asperiores porro consequuntur quas ea repudiandae!. Adipisci soluta esse illum asperiores porro consequuntur quas ea repudiandae!',
        images : [
            'https://images.unsplash.com/photo-1502301795132-dfab90371855?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGZsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1611956916292-d1efc5936fae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGZsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1509368665003-7b100e67d632?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGZsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1511149717639-b0c91dedef96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGZsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1537210249814-b9a10a161ae4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGZsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        ],
        sizes : [
            'M',
            'L',
            'S',
            'XL'
        ],
        rating : 3,
        price : 300000
    }
]
