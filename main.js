var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'Green Socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        image_link: ('https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'),
        inStock: true,
        inventory: 90,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-Neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './assets/vmSocks-green-onWhite.jpg'
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './assets/vmSocks-blue-onWhite.jpg'

            }
        ],
        sizes: [
            {
                sizesId: 2235,
                size: "small"
            },
            {
                sizesId: 2236,
                size: "medium"
            },
            {
                sizesId: 2237,
                size: "large"
            },

        ],
        cart: 0,

    },
    methods: {
        // increase cart by one
        addToCart() {
            this.cart += 1
        },
        removeFromCart(){
            if(this.cart != 0){
                this.cart -= 1
            }
        },
        // hover over color updates color of product
        updateProduct(variantImage) {
            this.image = variantImage

        }
    }

}
)