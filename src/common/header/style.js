import styled from 'styled-components';
import logoPic from '../../static/logo.png';
export const HeaderWrapper = styled.div`
    min-width: 1386px;
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 58px;
    background: url(${logoPic});
    border-bottom: 1px solid #f0f0f0;
    background-size: contain;
`;
export const Nav = styled.div`
   width: 960px;
   height: 100%;
   margin: 0 auto;
   padding-right: 70px;
   box-sizing: border-box; 
`
export const NavItem = styled.div`
   line-height: 56px;
   padding: 0 15px;
   font-size: 17px;
   color: #333;
   &.left {
       float: left;
   }
   &.right {
       float: right;
       color: #969696;
       cursor: pointer;
   }
   &.active {
       color: #ea6f5a;
   }
`;
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
   width: 160px;
   height: 38px;
   padding: 0 30px 0 20px;
   box-sizing: border-box;
   margin-top: 9px;
   margin-left: 20px;
   border: none;
   outline: none;
   border-radius: 19px;
   font-size: 14px;
   background : #eee;
   color: #666;
   &::placeholder {
       color: #999;
   }
   &.focused {
       width: 240px;
   }
   &.slide-enter {
       transition: all .2s ease-out;
    }
    &.slide-enter-active {
       width: 240px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`;
export const Addition = styled.div`
    position: absolute;
    right: 0;
    top:0;
    height: 56px;
`;
export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    background: #fff;
`
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;
export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .switch {
        position: absolute;
        top: 15px;
        left:195px;
        font-size: 10px;
    }
`
export const SearchInfoItem = styled.a`
    display: block;
    font-size: 12px;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    border: 1px solid  #ddd;
    margin-right: 10px;
    margin-bottom: 15px;
    color: #787878;
    border-radius: 3px;
`
;
export const Button = styled.div`
    float: right;
    line-height: 38px;
    border-radius: 19px;
    margin-top: 9px;
    padding:0 20px;
    font-size: 14px;
    margin-right: 20px;
    border: 1px solid #ec6149;
    cursor: pointer;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ea6f5a;
    }
    &.reg:hover{
        color:#ec6149;
        border-color: #ec6149;
        background-color: rgba(236,97,73,.05);
    }
    &.writting:hover {
        color: #fff;
        background-color:#ec6149;
    }
`;
export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .iconfont {
       position: absolute;
       right: 5px;
       bottom: 5px;
       width: 30px;
       line-height: 30px; 
       border-radius: 15px;
       text-align: center;
       &.focused {
           background: #777;
           color: #fff;
       }
    }
`;