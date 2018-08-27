<template>
    <div>
        <div class="errPage-container" v-if="type === '401' || !type">
            <div class="wscn-http">
                <div class="ivv-row">
                    <div class="ivv-col-span-12">
                        <img :src="img_401" width="313" height="428" alt="Girl has dropped her ice cream."/>
                    </div>
                    <div class="ivv-col-span-12">
                        <div class="bullshit">
                            <div class="bullshit__oops">Oops!</div>
                            <div class="bullshit__info">怎么了！</div>
                            <div class="bullshit__headline">你没有权限去该页面</div>
                            <div class="bullshit__info">如有不满请联系你领导</div>
                            <a href="#" class="bullshit__return-home">返回首页</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div style="overflow: auto;" v-else-if="type === '404'">
            <div class="wscn-http">
                <div class="ivv-row">
                    <div class="ivv-col-span-12">
                        <div class="pic-404">
                            <img class="pic-404__parent" :src="img_404" alt="404">
                            <img class="pic-404__child left" :src="img_404_cloud" alt="404">
                            <img class="pic-404__child mid" :src="img_404_cloud" alt="404">
                            <img class="pic-404__child right" :src="img_404_cloud" alt="404">
                        </div>
                    </div>
                    <div class="ivv-col-span-12">
                        <div class="bullshit">
                            <div class="bullshit__404">404</div>
                            <div class="bullshit__info">发生了什么！</div>
                            <div class="bullshit__headline">{{ message }}</div>
                            <div class="bullshit__info">请检查您输入的网址是否正确...</div>
                            <a href="#" class="bullshit__return-home">返回首页</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div style="overflow: auto;" v-else-if="type === '500'">
            <div class="wscn-http">
                <div class="ivv-row">
                    <div class="ivv-col-span-12">
                        <div class="pic-500">
                            <svg class="svg-box" height="500px" viewBox="0 0 837 1045" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                                    <path d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z" id="Polygon-1" stroke="#3bafda" stroke-width="6" sketch:type="MSShapeGroup"></path>
                                    <path class="svg-small" d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z" id="Polygon-2" stroke="#7266ba" stroke-width="6" sketch:type="MSShapeGroup"></path>
                                    <path class="svg-small" d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z" id="Polygon-3" stroke="#f76397" stroke-width="6" sketch:type="MSShapeGroup"></path>
                                    <path class="svg-small" d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z" id="Polygon-4" stroke="#00b19d" stroke-width="6" sketch:type="MSShapeGroup"></path>
                                    <path class="svg-small" d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z" id="Polygon-5" stroke="#ffaa00" stroke-width="6" sketch:type="MSShapeGroup"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div class="ivv-col-span-12">
                        <div class="bullshit">
                            <div class="bullshit__500">500</div>
                            <div class="bullshit__info">Oh，发生了点错误！</div>
                            <div class="bullshit__headline">错误信息：{{ errorMessage }}</div>
                            <div class="bullshit__info">服务器可能病了！请稍后再试...</div>
                            <a href="#" class="bullshit__return-home">返回首页</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import img_401 from '../assets/images/401.gif'
  import img_404 from '../assets/images/404.png'
  import img_404_cloud from '../assets/images/404_cloud.png'

  export default {
    name: 'Exception',
    props: {
      type: {
        type: String,
        validator(value) {
          return ['401', '404', '500'].indexOf(value) > -1;
        }
      }
    },
    data() {
      return {
        message: '网管说这个页面你不能进...',
        errorMessage: '网络异常',
        img_401: img_401 + '?' + +new Date(),
        img_404: img_404 + '?' + +new Date(),
        img_404_cloud: img_404_cloud + '?' + +new Date(),
        dialogVisible: false
      }
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    /* 401 */
    .errPage-container {
        width: 800px;
        margin: 10px auto;
        overflow: auto;
        .pan-back-btn {
            background: #008489;
            color: #fff;
        }
        .pan-gif {
            margin: 0 auto;
            display: block;
        }
        .pan-img {
            display: block;
            margin: 0 auto;
        }
        .text-jumbo {
            font-size: 60px;
            font-weight: 700;
            color: #484848;
        }
        .list-unstyled {
            font-size: 14px;
            margin-top: 20px;
            a {
                color: #008489;
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    /* 404、500 */
    .wscn-http {
        position: relative;
        width: 980px;
        margin: 20px auto 60px;
        overflow: auto;
        .pic-404 {
            position: relative;
            padding: 100px 30px;
            overflow: hidden;
            &__parent {
                width: 100%;
            }
            &__child {
                position: absolute;
                &.left {
                    width: 80px;
                    top: 17px;
                    left: 220px;
                    opacity: 0;
                    animation-name: cloudLeft;
                    animation-duration: 2s;
                    animation-timing-function: linear;
                    animation-fill-mode: forwards;
                    animation-delay: 1s;
                }
                &.mid {
                    width: 46px;
                    top: 10px;
                    left: 420px;
                    opacity: 0;
                    animation-name: cloudMid;
                    animation-duration: 2s;
                    animation-timing-function: linear;
                    animation-fill-mode: forwards;
                    animation-delay: 1.2s;
                }
                &.right {
                    width: 62px;
                    top: 100px;
                    left: 500px;
                    opacity: 0;
                    animation-name: cloudRight;
                    animation-duration: 2s;
                    animation-timing-function: linear;
                    animation-fill-mode: forwards;
                    animation-delay: 1s;
                }
                @keyframes cloudLeft {
                    0% {
                        top: 17px;
                        left: 220px;
                        opacity: 0;
                    }
                    20% {
                        top: 33px;
                        left: 188px;
                        opacity: 1;
                    }
                    80% {
                        top: 81px;
                        left: 92px;
                        opacity: 1;
                    }
                    100% {
                        top: 97px;
                        left: 60px;
                        opacity: 0;
                    }
                }
                @keyframes cloudMid {
                    0% {
                        top: 10px;
                        left: 420px;
                        opacity: 0;
                    }
                    20% {
                        top: 40px;
                        left: 360px;
                        opacity: 1;
                    }
                    70% {
                        top: 130px;
                        left: 180px;
                        opacity: 1;
                    }
                    100% {
                        top: 160px;
                        left: 120px;
                        opacity: 0;
                    }
                }
                @keyframes cloudRight {
                    0% {
                        top: 100px;
                        left: 500px;
                        opacity: 0;
                    }
                    20% {
                        top: 120px;
                        left: 460px;
                        opacity: 1;
                    }
                    80% {
                        top: 180px;
                        left: 340px;
                        opacity: 1;
                    }
                    100% {
                        top: 200px;
                        left: 300px;
                        opacity: 0;
                    }
                }
            }
        }
        .bullshit {
            position: relative;
            float: left;
            padding: 100px 50px;
            overflow: hidden;
            &__oops {
                font-size: 60px;
                font-weight: bold;
                line-height: 40px;
                color: #1482f0;
                opacity: 0;
                margin-bottom: 20px;
                animation-name: slideUp;
                animation-duration: 0.5s;
                animation-fill-mode: forwards;
            }
            &__500 {
                font-size: 72px;
                font-weight: bold;
                line-height: 40px;
                color: #D9534F;
                opacity: 0;
                margin-bottom: 20px;
                animation-name: slideUp;
                animation-duration: 0.5s;
                animation-fill-mode: forwards;
                text-shadow: rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 2px 2px, rgba(61, 61, 61, 0.3) 3px 3px;
            }
            &__404 {
                font-size: 72px;
                font-weight: bold;
                line-height: 40px;
                color: #1482f0;
                opacity: 0;
                margin-bottom: 20px;
                animation-name: slideUp;
                animation-duration: 0.5s;
                animation-fill-mode: forwards;
                text-shadow: rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 2px 2px, rgba(61, 61, 61, 0.3) 3px 3px;
            }
            &__headline {
                font-size: 20px;
                line-height: 24px;
                color: #1482f0;
                opacity: 0;
                margin-bottom: 10px;
                animation-name: slideUp;
                animation-duration: 0.5s;
                animation-delay: 0.1s;
                animation-fill-mode: forwards;
            }
            &__info {
                font-size: 13px;
                line-height: 21px;
                color: grey;
                opacity: 0;
                margin-bottom: 30px;
                animation-name: slideUp;
                animation-duration: 0.5s;
                animation-delay: 0.2s;
                animation-fill-mode: forwards;
            }
            &__return-home {
                display: block;
                float: left;
                width: 110px;
                height: 36px;
                background: #1482f0;
                border-radius: 100px;
                text-align: center;
                color: #ffffff;
                opacity: 0;
                font-size: 14px;
                line-height: 36px;
                cursor: pointer;
                animation-name: slideUp;
                animation-duration: 0.5s;
                animation-delay: 0.3s;
                animation-fill-mode: forwards;
            }
            @keyframes slideUp {
                0% {
                    transform: translateY(60px);
                    opacity: 0;
                }
                100% {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
        }
    }

    .ivv-row {
        position: relative;
        margin-left: 0;
        margin-right: 0;
        height: auto;
        zoom: 1;
        display: block;
        overflow: auto;

        .ivv-col-span-12 {
            display: block;
            width: 50%;
            float: left;
            -webkit-box-flex: 0;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
        }
    }
</style>
