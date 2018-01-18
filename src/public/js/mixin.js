import {getAjax} from './config'

export const getBannerMixin = {
  data() {
    return {
      banner: ''
    }
  },
  created() {
    this.getBanner()
  },
  methods: {
    /**
     * 获取临展信息banner
     * @param id  分类id
     */
    getBanner(id = 1) {
      const url = 'api/tembanner'
      getAjax(url, {type: id},
        (res) => {
          this.banner = res.data.banner
        }, (err) => {
          console.log(err)
        }, this)
    }
  }
}
