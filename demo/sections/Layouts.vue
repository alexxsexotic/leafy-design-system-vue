<template>
  <div>
    <section>
        <p>Layouts</p>
        <div>
          <h5>Client - Default</h5>
          <div class="layout-client-default flex-col">
            <div class="box nav"></div>
            <div class="box main"></div>
            <div class="box footer"></div>
          </div>
        </div>
        <div>
          <h5>Admin - Default</h5>
          <div class="layout-admin-default flex-col">
            <nav class="box"></nav>
            <div class="inline">
              <div class="box nav"></div>
              <div class="box nav-2"></div>
              <div class="box main"></div>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.box {
  content: "";
  display: block;
  background: #d3dce6;
}

.layout-client-default {
  height: 400px;
  .nav {
    flex: 1;
  }
  .main {
    margin: 5px 0;
    flex: 5;
  }
  .footer {
    flex: 1;
  }
}

.layout-admin-default {
  height: 400px;
  nav {
    flex: 1;
    margin-bottom: 5px;
  }
  .inline {
    flex: 6;
  }
  .nav {
    flex: 1;
  }
  .nav-2 {
    flex: 1;
    margin: 0 5px;
  }
  .main {
    flex: 5;
  }
}


</style>

