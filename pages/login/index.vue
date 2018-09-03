<template>
  <div>login</div>
</template>

<script>
import { cookie } from '~/utils';

export default {
  name: 'login',
  mounted() {
    cookie.deleteCookie('token');
  }
};
</script>
