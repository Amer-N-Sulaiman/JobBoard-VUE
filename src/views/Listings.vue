<template>
    <h1 class="title">
        Job Listings
    </h1>
    <div v-for="job in jobs" v-bind:key="job.id" class="text-center">
        <JobListingCard :job="job" style="margin:20px auto"/>
    </div>
    
</template>

<script>

import axios from 'axios';
import JobListingCard from '../components/JobListingCard.vue';

export default {

    name: 'Listings',
    components: {
        JobListingCard
    },
    data() {
        return{
            jobs: []
        }
        
    },
    created(){
        this.fetchJobs()
    },
    methods: {
        async fetchJobs() {
            try {
                const response = await axios.get('http://localhost:5000/job/view_all');
                this.jobs = response.data;
                
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