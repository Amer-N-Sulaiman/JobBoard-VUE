<template>
  <!-- <h1 class="title">
    Login
  </h1> -->

  <div class="card col-md-5 col-10 mt-5" style="margin:auto">
    <h1 class="card-header">Login</h1>
    <div class="card-body">
        <form>
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" v-model="username">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" v-model="password">
            </div>
            
            <button type="button" class="btn btn-primary" @click="handleLogin">Submit</button>

        </form>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async handleLogin(){

            const body = JSON.stringify({ 
                "username": this.username,
                "password": this.password
            })

            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: body
            };
            try {
                const response = await fetch("http://localhost:5000/user/login", requestOptions)
                const data = await response.json();
                const token = data.token
                this.$cookies.set('token', token)
            } catch {
                console.log('there was an error')
            }
        }
    }
}
</script>

<style>

</style>