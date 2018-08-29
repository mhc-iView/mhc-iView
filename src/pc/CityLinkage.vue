<template>
  <div class="cityLinkage">
    <form class="form-horizontal">
      <div class="form-group row">
        <label class="col-sm-3 control-label">{{ label }}</label>
        <div class="col-sm-9">
          <Select v-model="privanceId" style="width:200px" @on-change="changePrivance()">
            <Option v-for="privance in this.privanceList" :key="privance.id" :value="privance.id">{{ privance.name }}</Option>
          </Select>
          <Select v-model="cityId" style="width:200px" @on-change="changeCity()">
            <Option v-for="city in cityList" :key="city.id" :value="city.id">{{ city.name }}</Option>
          </Select>
          <Select v-model="areaId" style="width:200px" @on-change="changeArea()">
            <Option v-for="area in areaList" :key="area.id" :value="area.id">{{ area.name }}</Option>
          </Select>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import PrivanceJSON from '../assets/cityLinkageJSON/privance.json'
import cityJSON from '../assets/cityLinkageJSON/city.json'
import areaJSON from '../assets/cityLinkageJSON/area.json'
const pricvanceJSONList = PrivanceJSON.data
const cityJSONList = cityJSON
const areaJSONList = areaJSON
export default {
  name: 'cityLinkage',
  data () {
    return {
      privance: '',
      privanceId: '',
      area: '',
      areaId: '',
      city: '',
      cityId: '',
      privanceList: [],
      cityList: [],
      areaList: []
    }
  },
  props: {
    label: {
      type: String,
      default: '省市区:'
    }
  },
  watch: {
    privance: function (newValue, oldValue) {
      this.privance = newValue
    },
    city: function (newValue, oldValue) {
      this.city = newValue
    },
    area: function (newValue, oldValue) {
      this.area = newValue
    }
  },
  mounted () {
    this.initCityLinkage()
  },
  methods: {
    // 初始化省份
    initCityLinkage () {
      this.privanceList = pricvanceJSONList
    },
    // 获取城市
    getCity (id) {
      this.cityList = cityJSONList[id]
    },
    // 获取市区
    getArea (id) {
      this.areaList = areaJSONList[id]
    },
    // 传递当前选择的省市区到父组件
    changeSelected (pri, city, area) {
      this.$emit('changeSelected', pri, city, area)
    },
    // 改变省份
    changePrivance () {
      this.city = ''
      this.cityId = ''
      this.area = ''
      this.areaId = ''
      this.areaList = []
      for (let i in this.privanceList) {
        if (this.privanceList[i].id === this.privanceId) {
          this.privance = this.privanceList[i].name
        }
      }
      this.getCity(this.privanceId)
      this.changeSelected(this.privance, this.city, this.area)
    },
    // 更改城市
    changeCity () {
      this.area = ''
      this.areaId = ''
      for (let i in this.cityList) {
        if (this.cityList[i].id === this.cityId) {
          this.city = this.cityList[i].name
        }
      }
      this.getArea(this.cityId)
      this.changeSelected(this.privance, this.city, this.area)
    },
    // 更改区
    changeArea () {
      for (let i in this.areaList) {
        if (this.areaList[i].id === this.areaId) {
          this.area = this.areaList[i].name
        }
      }
      this.changeSelected(this.privance, this.city, this.area)
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  display: block;
  margin-top: 0em;
}
.form-group {
    margin-bottom: 15px;
  }
.form-horizontal .form-group {
  margin-right: -15px;
  margin-left: -15px;
}
.form-horizontal .control-label {
  padding-top: 7px;
  padding-right: 20px;
  margin-bottom: 0;
  text-align: right;
}
label {
  display: inline-block;
  max-width: 100%;
  font-size: 14px;
  font-weight: 700;
  box-sizing: border-box;
  cursor: default;
}
.col-sm-3 {
  width: 25%;
}
.col-sm-9 {
  width: 75%;
  float: right;
}
.form-control {
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  display: inline-block;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}
select.input-sm {
  height: 30px;
  line-height: 30px;
}
.close {
  visibility: hidden;
}
.sel {
  width: 200px;
}
option:hover {
  height: 30px;
  line-height: 30px;
  background-color: #5897fb;
  color: #ffffff;
  font-size: 1.1rem;
}
</style>
