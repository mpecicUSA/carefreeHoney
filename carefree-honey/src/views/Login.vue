<template>
    <v-container>

    <form>

        <v-text-field
        v-model="email"
        v-validate="'required|email'"
        :error-messages="errors.collect('email')"
        label="E-mail"
        data-vv-name="email"
        required
        ></v-text-field>
        <v-text-field
        v-model="password"
        v-validate="'required | password'"
        :error-messages="errors.collect('password')"
        label="Password"
        type="password"
        data-vv-name="password"
        required
        ></v-text-field>

        <v-btn @click="submit">Submit</v-btn>
        <v-btn @click="clear">Clear</v-btn>
    </form>
    </v-container>
</template>




<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'

  Vue.use(VeeValidate)

  export default {
    $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
        email: '',
        password: '',
        dictionary: {
            attributes: {
                email: 'E-mail Address',
                password: 'Password'
                // custom attributes
            },
        }
    }),
    mounted () {
        this.$validator.localize('en', this.dictionary)
    },
    methods: {
        submit () {
            this.$validator.validateAll()
        },
        clear () {
            this.email = '',
            this.password = '',
            this.$validator.reset()
        }
    }
}
</script>
