<template>
  <div>
    <v-container style="background-color:#00ff00">
      <contactForm></contactForm>
    </v-container>
  </div>
</template>

<script>
import contactForm from "../components/contactForm"

export default {
  name: 'Home',
  components: {
    contactForm,
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
