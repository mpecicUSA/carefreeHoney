<template>
    <v-container>
            <h3 className=''>Edit Product: {{ productName}}</h3>
            <v-form
            ref="form"
            >
            <v-text-field
                v-model="title"
                label="Name of product"
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
            label="Image Url"
            ></v-text-field>
            <v-text-field
            v-model="price"
            label="price"
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
    data(){
        return {
            title: "",
            size: "",
            details: "",
            quantity: "",
            onSale: false, 
            price: "",
            freeShipping: false, 
            imgUrl: ""
        }
    },
    methods: {

    }
}
</script>

<style>

</style>
