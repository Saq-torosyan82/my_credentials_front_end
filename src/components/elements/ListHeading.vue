<template>
    <div class="list-heading d-flex">
        <h2> {{ uppercase(title) }}</h2>
        <button type="button" class="btn btn-success">Add new</button>
    </div>
</template>

<script>
    export default {
        name: 'ListHeading',
        props: {
            title: {
                type: String,
                required: true,
            },
        },
        computed:{
         uppercase(){
            return (v)=>{
              return v.toUpperCase()
              }
           }
     }
    }
</script>

<style scoped>
.list-heading {
    justify-content: space-between;
}
</style>