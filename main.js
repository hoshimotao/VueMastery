
// Product Review
Vue.component("product-review", {
  template: `
  <input v-model="name">

  `,
  data(){
    return {
      name: null
    }
  }
})









Vue.component("productDetails", {
    props: {
      details: {
        type: Array,
        required: true,
      },
    },
  
    template: `
      
      <ul>
      <li v-for="detail in details"> {{ detail }} </li>
      </ul>
      
      `,
  });


// VUE COMPONENT
Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },

  // TEMPLATE LITERAL
  template: `
    <div class="product">
      <div class="product-image">
        <a :href="image_link"><img :src="image" :alt="description" /></a>
      </div>

      <!-- Product Title and Stock -->

      <div class="product-info">

        <p> {{ sale }} </p>

        <h1>{{ title }}</h1>


        <p v-if="inStock"> In Stock </p>
        <p v-else :class="{outOfStock: !inStock }"> Out of Stock </p>

        <p> User is Premium: {{ premium }}</p>
        <p> Shipping: {{ shipping }} </p>


        <productDetails :details="details"></productDetails>


        <!-- Color Choice Boxes -->

        <div v-for="(variant, index) in variants" 
          :key="variant.variantId" class="color-box cursorHover"
          :style="{ backgroundColor: variant.variantColor }" @mouseover="updateProduct(index)">

        </div>

        <!-- BUTTON + LISTENER -->

        <button @click="removeFromCart" style="background-color: red;"> Remove </button>
        <button @click="addToCart" :disabled="!inStock" :class="{disabledButton: !inStock }"> Add to Cart </button>

       

        <!-- <p><span v-show="onSale" style="color: red"> ON SALE! </span></p> -->

        <product-review></product-review>

      </div>
    </div>
    `,
  // ADD DATA AS AN OBJECT(FUNCTION)
  data() {
    // MUST RETURN SOMETHING TO THE COMPONENT TO RENDER
    return {
      brand: "Vue Mastery",
      product: "Socks",
      description: "Green Socks",
      selectedVariant: 0,
      image_link:
        "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
      inventory: 90,
      details: ["80% cotton", "20% polyester", "Gender-Neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage: "./assets/vmSocks-green-onWhite.jpg",
          variantQuantity: 10,
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: "./assets/vmSocks-blue-onWhite.jpg",
          variantQuantity: 0,
        },
      ],
      sizes: [
        {
          sizesId: 2235,
          size: "small",
        },
        {
          sizesId: 2236,
          size: "medium",
        },
        {
          sizesId: 2237,
          size: "large",
        },
      ],
      
      onSale: true,
    };
  },
  // KEEP METHODS AND COMPUTATIONS SEPARATE!
  methods: {

    
    // increase cart by one
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
      console.log(this.variants[this.selectedVariant].variantId)
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
    },
    // hover over color updates color of product
    updateProduct(index) {
      this.selectedVariant = index;
      console.log(index);
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    sale() {
      if (this.onSale) {
        return this.brand + " " + this.product + " is on sale!";
      } else {
        return this.brand + " " + this.product + " is not on sale";
      }
    },
    shipping() {
      if (this.premium) {
        return " Free";
      }
      return "$2.99";
    },
    
  },
});



var app = new Vue({
  el: "#app",
  data: {
    premium: true,
    cart: [],
  },
  methods: {
  updateCart(id){
      this.cart.push(id);
  
},
  updateRemoveCart(id){
    if(this.cart != 0) {
    this.cart.pop(id)
  }}

  
}});
