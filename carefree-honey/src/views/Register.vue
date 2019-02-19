<template>
  <v-form v-model="valid">
    <v-container>

        <v-btn @click="submit">Login</v-btn>
      <v-layout>
        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="firstname"
            label="First name"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
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
            :rules="emailRules"
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
            :rules="passwordRules"
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
            :rules="addressRules"
            label="Address"
            required
          ></v-text-field>
        </v-flex>
        <v-btn @click="submit">Register</v-btn>
        <v-btn @click="clear">Clear</v-btn>
    </v-container>
  </v-form>
</template>
<script>

export default {

    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      password: '',
      nameRules: [
        v => !!v || 'Name is required'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    })
  }
</script>

