<template>
    <div class="login">
        <form action="" method="post" v-on:submit.prevent="submitForm">
            <table class="form-table">
                <tr><td class="input-field-label">USERNAME: </td><td><input class="input-field" type="text" placeholder="Username" v-model="form.username"></td></tr>
                <tr><td class="input-field-label">PASSWORD: </td><td><input class="input-field" type="text" placeholder="Password" v-model="form.password"></td></tr>
                <!-- <tr><td colspan="2" v-if="'/[a-z]/'.test(str)"></td>contains lowercase</tr> -->
                <tr><td colspan="2">Not registered yet? register<a href="/register" style="color:green;margin:10px;">here</a></td></tr>
                <tr><td colspan="2" style="text-align: center"><input class="rbutton" type="submit" value="Log in"></td></tr>
            </table>      
        </form>
        {{info}}
    </div>
</template>

<script>
import axios from 'axios'


export default {
    data: function(){
        return {
            form: {
                username: "",
                password: "",
                info:""
                }
        }
    },
    mounted(){
        axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response))
        console.log(this.info)
    },
    methods: {
        submitForm() {
            axios
            .post("/api/login",this.form)
            .then(response => {
                console.log(`logged in`);
                router.push(`/dashboard`)
            })
            .catch(errors=>{
                console.log(`could not login`)
            })    

        }
    }
}
</script>

<style>
.form-table {
    margin: auto;
    width: 50%;
    padding:10px;
}

.input-field-label{
    font-weight:bold;
}

.input-field{
    outline:none;
    border: none;
    background-color:transparent;
    box-shadow: none;
    -webkit-box-shadow:none;
    border-color:inherit;
    border-bottom: 3px solid gray;
    }


.input-field:focus{
    outline:none;
    border-bottom: 3px solid darkgreen;

    transition: 2s;
}

.rbutton{
    border-radius: 10px;
    border:3px solid darkolivegreen;
    margin:10px;
    font-size:1.25rem;
    color:white;
    background-color: darkgreen;
}

.rbutton:hover{
    cursor:pointer;
    background-color: lightgreen;
}

</style>