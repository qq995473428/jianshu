import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import Topic from './components/Topic';
import List from './components/List';
import img1 from '../../static/img/3525704-218988490c02f8ad.webp'
import Recommend from './components/Recommend';
import Writer from './components/Wirter';
import { actionCreator } from './store';
import { connect } from 'react-redux';
class Home extends PureComponent {
    handleScrollTop () {
        window.scrollTo(0, 0);
    }
    render() {
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src={img1} alt=""/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {this.props.showScroll ?  <BackTop onClick={this.handleScrollTop}>顶部</BackTop>: null}
            </HomeWrapper>
        )
    }
    componentDidMount() {
      this.props.changeHomeData();
      this.bindEvents();
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }
}
const mapDispatch = (dispatch) => ({
    changeHomeData() {
       const action = actionCreator.getHomeInfo();
       dispatch(action);
    },
    changeScrollTopShow() {
       if(document.documentElement.scrollTop > 400) {
          dispatch(actionCreator.toggleTopShow(true));
       }else {
          dispatch(actionCreator.toggleTopShow(false));
       }
    }
})
const mapState = (state) => ({
   showScroll: state.getIn(['home', 'showScroll'])
})
export default connect(mapState, mapDispatch)(Home);