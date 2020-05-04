
<template>
  <nav>
      <a href="index.html" class="logo">G.</a>
      <ul>
          <li>About</li>
          <li>Contact</li>
      </ul>
  </nav>
</template>

<script>


export default {
  name: 'Header',
//   components: {
//     // Header
//   }
}
</script>

<style lang='scss' scoped>
    nav {
        // width: 80%;
        @include h4;
        color: $light;
        display: flex;
        justify-content: space-between;
        
        .logo {
            @include link-reset;
        }

        ul {
            display: flex;
            justify-content: space-between;
            margin: 0;
            padding: 0;

            li {
                list-style: none;
                margin: 0 50px;
            }
        }
    }



</style>
