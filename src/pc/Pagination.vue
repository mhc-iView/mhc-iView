<template>
  <div class="pageBean">
    <nav class="nav">
      <ul class="pagination">
        <li class=""><a href="#" @click.prevent="pickFirstPage">首页</a></li>
        <li :class="{disabled: myPageNo === 1}"><a href="javascript:void(0)" aria-label="Previous" @click="previousPage"><span aria-hidden="true">&laquo;</span></a></li>
        <li class="" v-if="myPageNo > 2"><a href="#" @click.prevent="pickmyPageNo(myPageNo - 2)">{{myPageNo - 2}}</a></li>
        <li class="" v-if="myPageNo > 1"><a href="#" @click.prevent="pickmyPageNo(myPageNo - 1)">{{myPageNo - 1}}</a></li>
        <li class="active"><a href="#">{{myPageNo}}</a></li>
        <li class="" v-if="totalPage - myPageNo > 0"><a href="#" @click.prevent="pickmyPageNo(myPageNo + 1)">{{myPageNo + 1}}</a></li>
        <li class="" v-if="totalPage - myPageNo > 1"><a href="#" @click.prevent="pickmyPageNo(myPageNo + 2)">{{myPageNo + 2}}</a></li>
        <li :class="{disabled: myPageNo === totalPage}"><a href="javascript:void(0)" aria-label="Next" @click="nextPage"><span aria-hidden="true">»</span></a></li>
        <li class=""><a href="#" @click.prevent="pickLastPage">尾页</a></li>
      </ul>
    </nav>

    <div class="totalCount">
      <span>共 {{totalCount}} 条数据</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PageBean',
    props: {
      pageNo: {
        type: Number,
        default: 1
      },
      totalPage: {
        type: Number,
        default: 0
      },
      totalCount: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        myPageNo: this.pageNo
      }
    },
    watch: {
      pageNo: function (newValue, oldValue) {
        this.myPageNo = newValue;
      }
    },
    methods: {
      previousPage: function () {
        if (this.myPageNo > 1) {
          this.myPageNo--;
          this.pickPage();
        }
      },
      nextPage: function () {
        if (this.myPageNo < this.totalPage) {
          this.myPageNo++;
          this.pickPage();
        }
      },
      pickmyPageNo: function (myPageNo) {
        this.myPageNo = myPageNo;
        this.pickPage();
      },
      pickFirstPage: function () {
        this.myPageNo = 1;
        this.pickPage();
      },
      pickLastPage: function () {
        this.myPageNo = this.totalPage || 1;
        this.pickPage();
      },
      pickPage: function () {
        this.$emit('pickPage', this.myPageNo);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pageBean {
    position: relative;
    padding: 0 10% 0 35%;
    .nav {
      display: inline-block;
      height: 80px;
      line-height: 80px;
    }
    .pagination {
      display: inline-block;
      padding-left: 0;
      margin: 20px 0;
      border-radius: 4px;
    }
    .pagination>li {
      display: inline;
    }
    .pagination>li>a, .pagination>li>span {
      position: relative;
      float: left;
      padding: 6px 12px;
      margin-left: -1px;
      line-height: 1.42857143;
      color: #666;
      text-decoration: none;
      background-color: #fafafa;
      border: 1px solid #ddd;
    }
    .pagination>li:first-child>a, .pagination>li:first-child>span {
      margin-left: 0;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    .pagination>li:last-child>a, .pagination>li:last-child>span {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    .pagination>.disabled>a, .pagination>.disabled>a:focus, .pagination>.disabled>a:hover, .pagination>.disabled>span, .pagination>.disabled>span:focus, .pagination>.disabled>span:hover {
      color: #777;
      cursor: not-allowed;
      background-color: #fff;
      border-color: #ddd;
    }
    .pagination>.active>a, .pagination>.active>a:focus, .pagination>.active>a:hover, .pagination>.active>span, .pagination>.active>span:focus, .pagination>.active>span:hover {
      z-index: 3;
      color: #fff;
      cursor: default;
      background-color: #337ab7;
      border-color: #337ab7;
    }
    .totalCount {
      float: right;
      height: 80px;
      line-height: 80px;
    }
  }
</style>
