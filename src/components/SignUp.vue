<template>
    <div class="sign-up">
        <p>Let's create a new account!</p>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button v-on:click="signUp">Sign Up</button>
        <span>or <router-link to="/login"> go back </router-link> to login.</span>
    </div>
  
</template>

<script>
    import firebase from 'firebase'

    export default{
        name:'SignUp',
        data (){
            return{
                email:'',
                password:''
            }
        },
        methods:{
            signUp (){
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    (user)=>{
                        alert('Cuenta creada!')
                        this.$router.replace('hello')
                    },
                    (err)=>{
                        alert('Oops. ' + err.message)
                    }
                )
            }
        }
    }
</script>

<style scoped>
    .signUp{
        margin-top: 40px;
    }
    input{
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button{
        margin-top: 10px;
        width: 10%;
        cursor: pointer;
    }

    span{
        display: block;
        margin-top: 20px;
        font-size: 11px;
    }
</style>

