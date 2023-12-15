<template>
    <GoogleLogin :callback="this.callback"/>
</template>

<script>
export default {
  name: 'GoogleApiTester',
  props: {
    msg: String
  },
  data () {
    return {
      isSignedIn: false,
      user: null,
      userName: '',
      callback: null,
    }
  },
  created ()  { 
    this.callback = (response) => {
      // This callback will be triggered when the user selects or login to
      // his Google account from the popup
      console.log("Handle the response", response)
    }
  },
  methods: {
    
  }
}
</script>