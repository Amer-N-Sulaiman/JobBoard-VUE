<template>
    <h1 class="title">Account</h1>

    <div class="card col-10 col-md-8 col-lg-6 mx-auto">
        <div class="card-header">
            The Jobs You've Posted
        </div>
        <ul class="list-group list-group-flush">
            <li v-for="job in userJobs" v-bind:key="job.id" class="list-group-item d-flex flex-row align-items-center justify-content-between">
                {{ job.title }}
                <button type="button" class="btn btn-info">Open</button>
            </li>
        </ul>
    </div>
</template>

<script>
import g_data from '@/g_data.js'
import router from '@/router'

export default {
    name: 'account',
    data(){
        return {
            userJobs: [],
            token: '',
        }
    },
    created(){
        if (!this.$cookies.isKey('token')){
            router.push('/listings')
            return
        }

        this.fetchUserJobs(this.$cookies.get('token'))
    },
    methods: {
        async fetchUserJobs(token){
            const requestOptions = {
                method: "GET",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer '+ token,
                },
            };
            try {
                const response = await fetch(g_data.api_url+"/job/all_user_jobs", requestOptions)
                const data = await response.json()
                this.userJobs = data
                console.log('user jobs')
                console.log(this.userJobs)
            } catch(error) {
                console.log(error)
            }
        }
    }
}
</script>

<style>

</style>