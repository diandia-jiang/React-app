// 链接UI组件
import { connect } from 'react-redux'
import { home } from '@/api'
import axios from 'axios'
import UI from './UI'

const mapStateToProps = (state) => ({
  homeBannerList: state.home.homeBannerList,
  homeProList: state.home.homeProList,
})

const mapDispatchToProps = (dispatch) => ({
  getDataInit () {
    axios.all([home.getHomeBanner(),  home.getHomePro()])
    .then(axios.spread((banner, pro) => {
      dispatch({
        type:'changeHomeBannerList',
        data: banner.data
      })
      dispatch({
        type:'changeHomeProList',
        data: pro.data
      })
    }))
  },
})


const Com = connect(mapStateToProps, mapDispatchToProps)(UI)
export default Com