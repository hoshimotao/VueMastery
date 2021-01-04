var app = new Vue ({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'Green Socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        image_link: ('https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'),
        // inStock: true,
        inventory: 100,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-Neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ],
        sizes: [
               { sizesId: 2235,
                size: "small"
               },
               { sizesId: 2236,
                size: "medium"
               },
               { sizesId: 2237,
                size: "large"
               },

        ]





    
    
    }
}
)