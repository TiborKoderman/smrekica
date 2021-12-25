<template>
    <!-- <canvas style="border: 1px solid black;" width="300" height="300" id="color_canvas">

    </canvas>
    <input type="range" name="" id="hue"> -->

    <input type="color" name="" id="color">
</template>

<script>


export default {
    name: "ColorPickWheel",
    props: {
        
    },
    data() {
        return {
            colorHex: "",
            colorRGB: ""
        }
    },
    mounted(){
        // var colorCanvas = document.getElementById('color_canvas');
        // var ColorCtx = colorCanvas.getContext('2d');
        // let gradientV = ColorCtx.createLinearGradient(0,0,0,300);
        // gradientV.addColorStop(0,'rgba(0,0,0,0)');
        // gradiennt_{-2}^2 \left(3 x^2-6 x-1\right) \, dxtV.addColorStop(1, '#000');
        // ColorCtx.fillStyle=gradientV;
        // ColorCtx.fillRect(0,0, ColorCtx.canvas.width, colorCtx.canvas.height);
    }
}
</script>

<style>

#hue{
    background-color:aqua;
}

</style>