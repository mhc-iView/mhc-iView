<template>
    <el-row
            type="flex"
            justify="center"
            align="middle"
            class="el-row-height">
    <div class="loading" v-if="true" :style="{
          background: `${background}`,
          opacity: `${opacityDeep}`,
          color: `${color}`

        }">
        <div class="lodding1" v-if="className=='lodding1'">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>
        <div class="lodding2" v-if="className=='lodding2'">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
        </div>
        <p class="desc">{{ loddingText }}</p>
    </div>
    </el-row>
</template>
<script>
  export default {
    props: {
      loddingText: {
        type: String,
        default: ' '
      },
      background: {
        type: String,
        default: ' '
      },
      opacityDeep: {
        type: Number,
        default: ' '
      },
      color: {
        type: String,
        default: ' '
      },
      className: {
        type: String,
        default: ' '
      }

    }
  }
</script>

<style lang="scss" scoped>
    .loading{
        width: 100% ;
        text-align: center;
    }
    .desc{
        line-height:20px;
    }
    // --------------------------
    .lodding1 {
        margin: 30px auto;
        width: 50px;
        height: 60px;
        text-align: center;
        font-size: 10px;
    }

    .lodding1 > div {
        background-color: #67CF22;
        height: 100%;
        width: 6px;
        display: inline-block;

        -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
        animation: stretchdelay 1.2s infinite ease-in-out;
    }

    .lodding1 .rect2 {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
    }

    .lodding1 .rect3 {
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
    }

    .lodding1 .rect4 {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
    }

    .lodding1 .rect5 {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
    }

    @-webkit-keyframes stretchdelay {
        0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
        20% { -webkit-transform: scaleY(1.0) }
    }

    @keyframes stretchdelay {
        0%, 40%, 100% {
            transform: scaleY(0.4);
            -webkit-transform: scaleY(0.4);
        }  20% {
               transform: scaleY(1.0);
               -webkit-transform: scaleY(1.0);
           }
    }
    //-----------------------------------------------

    .lodding2 {
        width: 60px;
        height: 60px;

        position: relative;
        margin: 100px auto;
    }

    .double-bounce1, .double-bounce2 {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #67CF22;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;

        -webkit-animation: bounce 2.0s infinite ease-in-out;
        animation: bounce 2.0s infinite ease-in-out;
    }

    .double-bounce2 {
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
    }

    @-webkit-keyframes bounce {
        0%, 100% { -webkit-transform: scale(0.0) }
        50% { -webkit-transform: scale(1.0) }
    }

    @keyframes bounce {
        0%, 100% {
            transform: scale(0.0);
            -webkit-transform: scale(0.0);
        } 50% {
              transform: scale(1.0);
              -webkit-transform: scale(1.0);
          }
    }
</style>