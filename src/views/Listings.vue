<template>
    <h1 class="title">
        Job Listings
    </h1>
    <div v-for="job in jobs" v-bind:key="job.id" class="text-center">
        <JobListingCard :job="job" style="margin:20px auto"/>
    </div>

    <button type="button" class="btn btn-info mb-5" @click="fetchJobs">Load More</button>
    
</template>

<script>

import axios from 'axios';
import JobListingCard from '../components/JobListingCard.vue';
import g_data from '@/g_data.js'

export default {

    name: 'Listings',
    components: {
        JobListingCard
    },
    data() {
        return{
            jobs: [],
            skipJobsNumber: 0
        }
        
    },
    created(){
        console.log('api_url', g_data.api_url)
        this.fetchJobs()
    },
    methods: {
        async fetchJobs() {
            try {
                const response = await axios.get(g_data.api_url+'/job/view_all/' + this.skipJobsNumber);
                if (response.data.length>0){
                    this.jobs.push.apply(this.jobs, response.data)
                    this.skipJobsNumber+=2
                } else{
                    this.$notify({
                        type: "warn",
                        title: "No More Jobs Posted",
                        text: "Please Try Again Later"
                    })
                }
                
                
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        }
    }
}
</script>

<style>
    .title{
        margin: 30px auto
    }
</style>