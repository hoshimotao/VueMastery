var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        description: 'Green Socks',
        selectedVariant: 0,
        image_link: ('https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'),    
        inventory: 90,
        details: ["80% cotton", "20% polyester", "Gender-Neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './assets/vmSocks-green-onWhite.jpg',
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './assets/vmSocks-blue-onWhite.jpg',
                variantQuantity: 0

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
        onSale: true





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
        updateProduct(index) {
            this.selectedVariant=index
            console.log(index)

        }
        },
        computed: {
            title() {
               return this.brand + ' ' + this.product
            },
            image() {
                return this.variants[this.selectedVariant].variantImage
            },
            inStock(){
                return this.variants[this.selectedVariant].variantQuantity 
            },
            sale(){
                if(this.onSale){
                    return this.brand + ' ' + this.product + ' is on sale!'
                }
                else{
                    return this.brand + ' ' + this.product + ' is not on sale'
                }
                }
            }
    },
       


)