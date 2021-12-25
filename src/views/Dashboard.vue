<template>
    <div class="dashboard">
        <!-- <input type="color" @v-bind="color" style="margin:5rem" width=200px, height=200px> -->

        <div id ="cpwheel" style="margin:4rem"></div>
        {{color}}
        <div class="buttons">
        <button @click="send('prev')">&lt;</button> <button @click="send('next')">></button>
        </div>
        
    </div>
</template>

<script>
import connection from '../services/socket'

import "reinvented-color-wheel/css/reinvented-color-wheel.min.css";
import ReinventedColorWheel from "reinvented-color-wheel"

export default {
    name: "Dashboard",
    components:{
    },
    data(){
        return{
            color: "#ffffff"
        }
    },
    methods: {
        send(msg){
        try{
            connection.send(msg);
            console.log(msg);
            }
        catch(err){
            console.log(err);
            }
        }
    },
    watch: {
        color: function(val){
            connection.send(val);
            console.log(val);
        }
    },
    mounted() {
        new ReinventedColorWheel({
            hsv: [0, 100, 100],
            hsl: [0, 100, 50],
            wheelDiameter: 200,
            wheelThickness: 20,
            handleDiameter: 16,
            wheelReflectsSaturation: true,
            appendTo: document.getElementById('cpwheel'),
            onChange: (color)=>{
                this.color = color._hex
            }
        })
    }
};
</script>

<style>
#colorpicker{
    -webkit-appearance: none;
    border: none;
    width: 32px;
    height: 32px;
}

#colorpicker::-webkit-color-swatch-wrapper{
    padding: 0;
}

#colorpicker::-webkit-color-swatch{
    border:none
}

.buttons{
    margin-left:auto;
    justify-content: center;
}

.buttons button{
    background-color: rgb(0, 140, 255);
    height:5rem;
    width:5rem;
    margin: 3rem;
    margin-top:1rem;
    border: none;
    border-radius:50%;
    position:relative;
    color:white;
    font-weight: bolder;
    font-size:4rem;
}

.buttons button:hover{
    background-color: rgb(0, 160, 255);
    cursor: pointer;
    border: none;
    border-radius:50%;
    border: 1px solid white;
}

.buttons button:active{
    background-color: rgb(0, 160, 255);
    cursor: pointer;
    border: none;
    border-radius:50%;
}

</style>