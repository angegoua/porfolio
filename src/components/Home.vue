
<template>

    <div class="container">
        <div class="content">
            <Header></Header>
            
        </div>
    </div>

</template>

<script>

import Header from './Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
    
    .container {
        width: 100vw;
        height: 100vh;
        background: $dark;

        .content {
            width: 1050px;
            margin: 0 auto;
            padding-top: 30px;
        }
    }
</style>
