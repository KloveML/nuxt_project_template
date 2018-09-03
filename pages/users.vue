<template>
  <div>
    users
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  fetch({ store, params, req, redirect }) {
    return new Promise((res, rej) => {
      // console.log(process.server);
      // console.log('cookie:', req.headers.cookie);
      // console.log('redirect:', redirect('/'));
      res();
    });
  }
};
</script>
