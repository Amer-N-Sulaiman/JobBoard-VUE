<template>
  <div class="card col-sm-10 col-md-6">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <div class="card-body">
        <h5 class="card-title mb-3">{{ job.title }}</h5>
        <p class="card-text">{{ job.body }}</p>
        <a href="#" class="btn btn-primary">apply</a>
        <p class="mt-3"><em>Posted By {{ job.posted_by }} On {{ job.date_posted }}</em></p>
    </div>
    </div>
</template>

<script>
export default {
    name: 'JobListingCard',
    props: {
        job: null
    }
}
</script>

<style>
    .jobListingCard{
        margin: 20px auto
    }
</style>