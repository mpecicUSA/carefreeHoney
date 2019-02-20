<template>
  <v-form v-model="valid">
    <v-container>

        <v-btn route to="/login">Login</v-btn>
      <v-layout>
        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="firstName"
            label="First name"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="lastName"
            label="Last name"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="email"
            label="E-mail"
            required
          ></v-text-field>
        </v-flex>
        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="password"
            type="password"
            label="Password"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>
        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="address"
            label="Mailing Address"
          ></v-text-field>
        </v-flex>
        <v-btn @click="submit">Register</v-btn>

    </v-container>
  </v-form>
</template>

<script>
import axios from "axios"
export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        password: '',
        address: ""
    }
  },
  methods: {
      submit(){
        console.log("req recieved")
        axios.post('http://localhost:8000/register', {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          address: this.address
    }).then( (response) => {
      console.log(response);
      this.$router.push('/login')
    }).catch( (error) => {
      console.log("this be error:", error);
})
      }
    }
  }

</script>

