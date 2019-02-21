<template>
    <v-container>
            <h3 className=''>Edit Product: {{ pullProductForEdit.title}}</h3>
            <v-form
            ref="form"
            >
            <v-text-field
            label="Title"
            v-model="title"
            ></v-text-field>
            <v-text-field
            v-model="size"
            label="Size"
            ></v-text-field>
            <v-text-field
            v-model="details"
            label="Details"
            ></v-text-field>
            <v-text-field
            v-model="quantity"
            label="Quantity"
            ></v-text-field>
            <v-checkbox
            v-model="onSale"
            label="On Sale"
            ></v-checkbox>
            <v-checkbox
            v-model="freeShipping"
            label="Free Shipping"
            ></v-checkbox>
            <v-text-field
            v-model="imgUrl"
            label="Image URL"
            ></v-text-field>
            <v-text-field
            v-model="price"
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
export default {
    data:() =>{
        // const { title, size, details, quantity, onSale, price, freeShipping, imgUrl} = TODO FIND WAY TO PULL THIS DATA 
        console.log(title);
        return {
            title: title | "",
            size: size | "",
            details: details | "",
            quantity: quantity | "",
            onSale: onSale | "", 
            price: price | '',
            freeShipping: freeShipping | "", 
            imgUrl: imgUrl | ""
        }
    },
    methods: { 
        submit: function(){

        }
    },
    computed: {
        pullProductForEdit () {
            return this.$store.getters.getSpecificProduct
        }
    }
}
</script>

<style>

</style>