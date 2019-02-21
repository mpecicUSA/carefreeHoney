<template>
    <v-container>
            <h3 className=''>Add a new Product</h3>
            <v-form
            ref="form"
            >
            <v-text-field
            label="Title"
            v-model="title1"
            ></v-text-field>
            <v-text-field
            v-model="size1"
            label="Size"
            ></v-text-field>
            <v-text-field
            v-model="details1"
            label="Details"
            ></v-text-field>
            <v-text-field
            v-model="quantity1"
            label="Quantity"
            ></v-text-field>
            <v-checkbox
            v-model="onSale1"
            label="On Sale"
            ></v-checkbox>
            <v-checkbox
            v-model="freeShipping1"
            label="Free Shipping"
            ></v-checkbox>
            <v-text-field
            v-model="imgUrl1"
            label="Image URL"
            ></v-text-field>
            <v-text-field
            v-model="price1"
            label="Price"
            ></v-text-field>
            <v-btn 
            color="success"
            @click="submit"
            >
            Submit
            </v-btn>
            </v-form>
    </v-container>
</template>

<script>
import axios from "axios"
export default {
    data(){

        return {
            title1: "",
            size1: "" ,
            details1: '',
            quantity1: '',
            onSale1: false, 
            price1: '',
            freeShipping1: false, 
            imgUrl1: ''
        }
    },
    methods: { 
        submit: function(){
                console.log("button clicked")
                axios.post('http://localhost:8000/products/add', {
                    title: this.title1,
                    size: this.size1, 
                    details: this.details1,
                    quantity: this.quantity1, 
                    sale: this.onSale1,
                    price: this.price1,
                    free_shipping: this.freeShipping1,
                    imgUrl: this.imgUrl1
                })
                .then((res)=> {
                    console.log(res)
                })
                .catch((err) => console.log(err));
                this.$router.push('/')
        }
    },
}
</script>

<style>

</style>