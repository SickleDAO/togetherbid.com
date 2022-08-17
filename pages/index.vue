<template>
  <div class="container">
    <Logo />
    <div class="message">
      {{ message }}
    </div>
    <div>
      <a href="/">首页</a>
      <a href="/about">关于</a>
    </div>
    <router-view />
  </div>
</template>

<script>
import Logo from '@/components/logo';

export default {
  name: 'IndexPage',
  components: {
    Logo
  },
  computed: {
    message() {
      return this.$store.state.message;
    }
  }
};
</script>

<style lang="scss">
.container {
  padding: 20px;
  text-align: center;

  .message {
    padding: 20px 0;
    font-size: 24px;
    font-weight: 800;
  }
}
</style>
