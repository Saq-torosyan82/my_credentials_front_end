<template>
    <div class="container mt-5">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
                <router-link class="nav-link px-3 text-info" :to="{name: 'sites'}">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">Sites</h5>
                        </div>
                    </div>
                </router-link>
            </div>

            <div class="col">
                <router-link class="nav-link px-3 text-info" :to="{name: 'applications'}">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">Applications</h5>
                        </div>
                    </div>
                </router-link>
            </div>

            <div class="col">
                <router-link class="nav-link px-3 text-info" :to="{name: 'apis'}">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">Apis</h5>
                        </div>
                    </div>
                </router-link>
            </div>
      </div>

      <div class="row mt-5">
        <router-view />
      </div>
  </div>
</template>

<script>
export default {
    name: "Dashboard",
    data() {
        return {
            showData: false,
        }
    },
    components: {
    },
}
</script>

<style scoped>

.card {
    width: 100%;
}
.card-title {
    text-align: center;
}
</style>