<template>
    <div>
    <ColorPickWheel/>
    </div>
</template>

<script>
import ColorPickWheel from "@/components/ColorPickWheel.vue";
export default {
    components:{
        ColorPickWheel
    }
    
}
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
</style>