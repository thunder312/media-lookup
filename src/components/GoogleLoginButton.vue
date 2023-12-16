<template>
    <GoogleLogin :callback="this.callback"/>
</template>

<script>

export default {
  name: 'GoogleLoginButton',
  components: { },
  data () {
    return {
      callback: null,
      books: null,
      inputTitle: "",
      inputIsbn: "",
    }
  },
  created ()  { 
    this.callback = (response) => {
      console.log("Handle the response", response)
    }
  },
  mounted() {},
  methods: {},
}
</script>
