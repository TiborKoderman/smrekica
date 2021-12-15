<template>
  <form action="" method="post">
      <table class="form-table">
          <tr><td class="input-field-label">USERNAME: </td><td><input class="input-field" type="text" placeholder="Username" v-model="username"></td></tr>
          <tr><td class="input-field-label">PASSWORD: </td><td><input class="input-field" type="password" placeholder="Password" v-model="password"></td></tr>
          <tr><td class="input-field-label">CONFIRM PASSWORD: </td><td><input class="input-field" type="password" placeholder="Confirm Password" v-model="cpassword"></td></tr>
          <tr><td v-if="password!==cpassword" colspan="2" style="color:red;font-weight:bold;">Passwords do not match!</td></tr>
          <tr><td colspan="2" style="text-align: center"><input class="rbutton" type="submit" value="Log in"></td></tr>
      </table>      
  </form>


</template>

<script>
export default {
    data: function(){
        return {
            username: "",
            password: "",
            cpassword: ""
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