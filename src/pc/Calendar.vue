/*
* @Author: changzhang
* @Date: 2018-05-22 14:55:00
* @Last Modified by:   changzhang
* @Last Modified time: 2018-05-25 12:45:00
*/
<template>
  <div class="wh_container">
    <div class="wh_content_all" :class="{hide:!showCalendar}">
      <div class="wh_top_changge">
        <li>
        </li>
        <span class="btn-month" @click.prevent="toPreMonth">
          <Icon type="ios-arrow-back"  class="icon-change-month"/>
        </span>
        <li class="wh_content_li">{{dateTop}}</li>
        <span class="btn-month" @click.prevent="toNextMonth">
          <Icon type="ios-arrow-forward"  class="icon-change-month"/>
        </span>
        <li>
        </li>
      </div>
      <div class="wh_content wh_header">
        <div class="wh_content_item" v-for="tag in textTop">
          <div>
            {{tag}}
          </div>
        </div>
      </div>
      <div class="border-bottom" :class="{ hideLine:!showCalendar }"></div>
      <div class="wh_content">
        <div class="wh_content_item" v-for="(item,index) in list" @click="clickDay(item,index)">
          <div>
            <li class="wh_nextDayShow" v-if="(isHideOtherday&&item.nextDayShow)||item.otherMonth||item.dayHide" v-bind:class="[{isToday_now:item.isTodayNow},setClass(item)]">
              {{item.id}}
            </li>
            <li v-else="(isHideOtherday&&item.nextDayShow)||item.otherMonth||item.dayHide" v-bind:class="[{ wh_isToday: item.isToday,wh_isMark:item.isMark,isTodayNow:item.isTodayNow},setClass(item)]">
              {{item.id}}
            </li>
            <span class="under_line" :class="[{border_green:item.commitStatus == 1}]" v-show="!((isHideOtherday&&item.nextDayShow)||item.otherMonth||item.dayHide || item.isToday) && item.commitStatus"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        textTop: ['日', '一', '二', '三', '四', '五', '六'],
        myData: [],
        list: [],
        dateTop: ''
      };
    },
    props: {
      showCalendar: { default: true },
      signInMonthCommitVO: { default: '[]' },
      markDate: { default: '[]' },
      markDateMore: { default: '[]' },
      agoDayHide: { default: '0' },
      futureDayHide: { default: '15181550670000' },
      isHideOtherday: { default: false }
    },
    created() {
      this.myData = new Date();
    },
    methods: {
      toPreMonth: function () {
        const newDate = new Date(+(new Date(this.myData)) - 30 * 24 * 60 * 60 * 1000);
        this.myData = newDate;
        this.$emit('changeMonth', this.dateFormat(this.myData));
        this.getList(newDate);
      },
      toNextMonth: function () {
        const newDate = new Date(+(new Date(this.myData)) + 30 * 24 * 60 * 60 * 1000);
        this.myData = newDate;
        this.$emit('changeMonth', this.dateFormat(this.myData));
        this.getList(newDate);
      },
      setClass(data) {
        let obj = {};
        obj[data.markClassName] = data.markClassName;
        return obj;
      },
      clickDay: function (item, index) {
        if (!(this.isHideOtherday && item.nextDayShow) && !item.dayHide) {
          this.$emit('choseDay', item.date);
        }
        if (item.otherMonth) {
          item.otherMonth < 0 ? this.PreMonth(item.date) : this.NextMonth(item.date);
        } else {
          if (!(this.isHideOtherday && item.nextDayShow) && !item.dayHide) {
            for (let i = 0; i < this.list.length; i++) {
              if (i == index) {
                this.list[i].isToday = true;
              } else {
                this.list[i].isToday = false;
              }
            }
          }
        }
      },
      ChoseMonth: function (date, isChosedDay = true) {
        date = this.dateFormat(date);
        this.myData = new Date(date);
        this.$emit('changeMonth', this.dateFormat(this.myData));
        this.getList(this.myData, date, isChosedDay);
      },
      PreMonth: function (date, isChosedDay = true) {
        date = this.dateFormat(date);
        this.myData = this.getPreMonth(this.myData);
        this.$emit('changeMonth', this.dateFormat(this.myData));
        this.getList(this.myData, date, isChosedDay);
      },
      NextMonth: function (date, isChosedDay = true) {
        date = this.dateFormat(date);
        this.myData = this.getNextMonth(this.myData);
        this.$emit('changeMonth', this.dateFormat(this.myData));
        this.getList(this.myData, date, isChosedDay);
      },
      getPreMonth: function (date) {
        let timeArray = this.dateFormat(date).split('/');
        let year = timeArray[0];
        let month = timeArray[1];
        let day = timeArray[2];
        let days = new Date(year, month, 0);
        days = days.getDate();
        let year2 = year;
        let month2 = parseInt(month) - 1;
        if (month2 == 0) {
          year2 = parseInt(year2) - 1;
          month2 = 12;
        }
        let day2 = day;
        let days2 = new Date(year2, month2, 0);
        days2 = days2.getDate();
        if (day2 > days2) {
          day2 = days2;
        }
        if (month2 < 10) {
          month2 = '0' + month2;
        }
        if (day2 < 10) {
          day2 = '0' + day2;
        }
        let t2 = year2 + '/' + month2 + '/' + day2;
        return new Date(t2);
      },
      getNextMonth: function (date) {
        let arr = this.dateFormat(date).split('/');
        let year = arr[0]; //获取当前日期的年份
        let month = arr[1]; //获取当前日期的月份
        let day = arr[2]; //获取当前日期的日
        let days = new Date(year, month, 0);
        days = days.getDate(); //获取当前日期中的月的天数
        let year2 = year;
        let month2 = parseInt(month) + 1;
        if (month2 == 13) {
          year2 = parseInt(year2) + 1;
          month2 = 1;
        }
        let day2 = day;
        let days2 = new Date(year2, month2, 0);
        days2 = days2.getDate();
        if (day2 > days2) {
          day2 = days2;
        }
        if (month2 < 10) {
          month2 = '0' + month2;
        }
        if (day2 < 10) {
          day2 = '0' + day2;
        }
        let t2 = year2 + '/' + month2 + '/' + day2;
        return new Date(t2);
      },
      //当前月的天数
      getDaysInOneMonth: function (date) {
        let getyear = date.getFullYear();
        let getmonth = date.getMonth() + 1;
        let d = new Date(getyear, getmonth, 0);
        return d.getDate();
      },
      //向前空几个
      getMonthweek: function (date) {
        let getyear = date.getFullYear();
        let getmonth = date.getMonth() + 1;
        let dateOne = new Date(getyear + '/' + getmonth + '/1');
        return dateOne.getDay() == 0 ? 7 : dateOne.getDay();
      },
      // 计算当前月
      getList: function (date, chooseDay, isChosedDay = true) {
        const mygetMonth = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        this.dateTop = date.getFullYear() + '年' + mygetMonth + '月';
        let array = [];
        const onMonthDays = this.getDaysInOneMonth(date);
        for (let i = 0; i < onMonthDays; i++) {
          const nowTime = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + (i + 1);
          let markClassName = "";
          for (const k of this.markDateMore) {
            if (k.date == nowTime) {
              markClassName = k.className;
            }
          }
          let listObj = {
            id: i + 1,
            date: nowTime,
            isMark: this.markDate.indexOf(nowTime) >= 0,
            dayHide: new Date(nowTime).getTime() / 1000 < parseInt(this.agoDayHide) || new Date(nowTime).getTime() / 1000 > parseInt(this.futureDayHide),
            markClassName: markClassName,
            nextDayShow:
            new Date(nowTime).getTime() >
            new Date().getTime()
          }
          if (this.dateFormat(new Date()) == this.dateFormat(new Date(nowTime)) && !chooseDay) {
            listObj = Object.assign(listObj, {
              isTodayNow: true,
              isToday: true
            })
            this.$emit(
              'isToday',
              this.dateFormat(nowTime)
            );
          }
          else {
            listObj = Object.assign(listObj, {
              isTodayNow: false,
              isToday: chooseDay == nowTime && isChosedDay
            })
          }
          array.push(listObj);
        }
        const leftArr = this.getLeftArr(date);
        const rightArr = this.getRightArr(date, array);
        array = [...leftArr, ...array, ...rightArr];
        this.list = array;
      },
      // 计算上个月
      getLeftArr: function (date) {
        let array = [];
        const leftNum = this.getMonthweek(date);
        const num = this.getDaysInOneMonth(this.getPreMonth(date)) - leftNum + 1;
        const preDate = this.getPreMonth(date);
        //上个月多少开始
        for (let i = 0; i < leftNum; i++) {
          const nowTime = preDate.getFullYear() + '/' + (preDate.getMonth() + 1) + '/' + (num + i);
          array.push(
            {
              id: num + i,
              date: nowTime,
              dayHide: new Date(nowTime).getTime() / 1000 < parseInt(this.agoDayHide) || new Date(nowTime).getTime() / 1000 > parseInt(this.futureDayHide),
              nextDayShow:
              new Date(nowTime).getTime() >
              new Date().getTime(),
              otherMonth: -1
            });
        }
        return array;
      },
      // 计算下个月
      getRightArr: function (date, arr) {
        let array = [];
        const leftNum = this.getMonthweek(date);
        const nextDate = this.getNextMonth(date);
        const _length = 7 - (arr.length + leftNum) % 7;
        //向后添加数据
        if (_length < 7) {
          for (let i = 0; i < _length; i++) {
            const nowTime = nextDate.getFullYear() + '/' + (nextDate.getMonth() + 1) + '/' + (i + 1);
            array.push({
              id: i + 1,
              date: nextDate.getFullYear() + '/' + (nextDate.getMonth() + 1) + '/' + (i + 1),
              dayHide: new Date(nowTime).getTime() / 1000 < parseInt(this.agoDayHide) || new Date(nowTime).getTime() / 1000 > parseInt(this.futureDayHide),
              nextDayShow:
              new Date(nowTime).getTime() >
              new Date().getTime(),
              otherMonth: 1
            });
          }
        }
        return array;
      },
      // 时间格式化 yyyy/mm/dd
      dateFormat: function (date) {
        date = new Date(date)
        return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
      }
    },
    mounted() {
      this.getList(this.myData);
    },
    watch: {
      markDate(val, oldVal) {
        this.getList(this.myData);
      },
      markDateMore(val, oldVal) {
        this.getList(this.myData);
      },
      signInMonthCommitVO(val, oldVal) {
        let tempArr = [];
        this.list.map(item => {
          val.map(obj => {
            if (+(new Date(item.date)) === +(new Date(obj.monthDate.replace(/\-/g, '/')))) {
              item.commitStatus = obj.commitStatus;
            }
          });
          tempArr.push(item);
        });
        this.list = tempArr;
      }
    }
  };
</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .wh_container {
    max-width: 410px;
    margin: auto;
    border: solid 1px #ccc;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
  }
  .border-bottom {
    content: '';
    position: absolute;
    width: 100%;
    border-bottom: 1px solid #e7e7e7;
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    -ms-transform: scaleY(0.5);
    -o-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  li {
    list-style-type: none;
  }
  .wh_content_all {
    font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', STHeiti, 'Microsoft Yahei', Tahoma,
    Simsun, sans-serif;
    width: 100%;
    overflow: hidden;
    padding-bottom: 8px;
    height: 335px;
    -webkit-transition: height 1s ease;
    -moz-transition: height 1s ease;
    -ms-transition: height 1s ease;
    -o-transition: height 1s ease;
    transition: height 1s ease;
  }
  .wh_content {
    display: flex;
    flex-wrap: wrap;
    padding: 0 3% 0 3%;
    width: 100%;
  }
  .wh_header .wh_content_item{
    color: rgba(0, 0, 0, 0.6)!important;
  }
  .wh_content:first-child .wh_content_item {
    color: rgba(0, 0, 0, 0.9);
    font-size: 16px;
    height: 15%;
    line-height: 15%;
  }
  .wh_content_item {
    font-size: 16px;
    width: 14.28%;
    padding-bottom: 11.14%;
    text-align: center;
    color: rgba(0, 0, 0, 0.9);
    position: relative;
  }
  .wh_content_item div {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wh_content_item li {
    width: 37px;
    height: 37px;
    border-radius: 100px;
    line-height: 37px;
  }
  .icon-change-month {
    height: 40px;
    line-height: 40px;
  }
  @media screen and (min-width: 460px) {
    .wh_content_item li:hover {
      background: #fff;
      cursor: pointer
    }
  }
  .wh_top_changge {
    display: flex;
    padding-top: 6px;
  }
  .wh_top_changge li {
    /*cursor: pointer;*/
    display: flex;
    color: rgba(0, 0, 0, 0.3);
    font-size: 15px;
    flex: 2;
    justify-content: center;
    align-items: center;
    height: 40px;
  }
  .wh_top_changge .wh_content_li {
    cursor: auto;
    color: #515a6e;
    flex: 2;
    font-size: 16px;
  }
  .btn-month {
    display: flex;
    width: 40px;
    height: 40px;
    color: rgba(0, 0, 0, 0.3);
    font-size: 24px;
    justify-content: center;
    align-items: center;
    flex: 1;
    cursor: pointer;
  }
  .btn-month:link, .btn-month:visited, .btn-month:active {
    color: #00bcd4;
  }
  .wh_jiantou1 {
    width: 12px;
    height: 12px;
    border-top: 2px solid #ffffff;
    border-left: 2px solid #ffffff;
    transform: rotate(-45deg);
  }
  .wh_jiantou1:active,
  .wh_jiantou2:active {
    border-color: #ddd;
  }
  .wh_content_item div .wh_isToday {
    margin: auto;
    background-color: #00bcd4;
    border-radius: 50%;
    color: rgba(255, 255, 255, 0.9);
    text-align: center;
  }
  .wh_jiantou2 {
    width: 12px;
    height: 12px;
    border-top: 2px solid #ffffff;
    border-right: 2px solid #ffffff;
    transform: rotate(45deg);
  }
  .wh_content_item div .wh_isMark {
    margin: auto;
    border-radius: 100px;
    border: 1px solid blue;
    z-index: 2;
  }
  .wh_content_item div .wh_nextDayShow {
    color: #bfbfbf;
  }
  .hide {
    height: 0!important;
  }
  .hideLine {
    display: none;
  }
  .under_line {
    position: absolute;
    left: 42%;
    bottom: 6px;
    border-bottom: solid 3px #ef5b1b;
    width: 16%;
    border-radius: 40%;
  }
  .border_green {
    border-color: #2fd86e!important;
  }
  /*小屏幕的适配*/
  @media screen and (max-width: 320px) {
    .wh_content_li {
      font-size: 13px !important;
    }
  }
  @media screen and (min-width: 400px) {
    .wh_content_all {
      height: 380px!important;
    }
    .wh_content_all.hide {
      height: 0!important;
    }
  }
</style>