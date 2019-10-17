import styled from 'styled-components';
export const HomeWrapper = styled.div`
   width:960px;
   margin: 0 auto;
   overflow: hidden;
`;
export const HomeLeft = styled.div`
   width:625px;
   margin-left: 15px;
   padding-top: 30px;
   float: left;
   .banner-img {
       width: 625px;
       height: 270px;
       z-index: -992;
   }
`;
export const HomeRight = styled.div`
   width:280px;
   float: right; 
`;
export const TopicWrapper = styled.div`
   overflow: hidden;
   padding: 20px 0 10px 0;
   margin-left: -18px;
   border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
   float: left;
   background: #f7f7f7;
   height: 32px;
   line-height: 32px;
   padding-right: 10px;
   margin-left: 18px;
   font-size: 14px;
   color: #000;
   border: 1px solid #dcdcdc;
   border-radius: 4px;
   margin-bottom: 18px;
   .topic-pic {
       width: 32px;
       height: 32px;
       display: block;
       float: left;
       margin-right: 10px;
   }
`;
export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
       width:125px;
       height:100px;
       display: block;
       float: right;
    }
`;
export const ListInfo = styled.div`
     width: 500px;
     float: left;
     border-radius: 10px;
     .title {
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
        color: #333;
     }
     .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
     }
`;
export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;

`;
export const RecommendItem = styled.div`
   width: 280px;
   height: 50px;
   background: url(${(props) => props.imgUrl});
   background-size: contain;
   cursor: pointer;
`
export const WriterWrapper = styled.div`
   width: 280px;
   height: 82px;
   border: 1px solid #f0f0f0;
   padding: 10px 22px;
   box-sizing: border-box;
   .qrcode {
      width: 60px;
      height: 60px;
      float: left;
   }
   .info {
      margin-left: 7px;
      float: left;
      vertical-align: middle;
   }
   p {
      font-size: 15px;
      margin-top: 10px;
      cursor: pointer;
   }
   .desc{
      margin-top: 10px;
      font-size: 12px;
      color: #999;
   }
`
export const LoadMore = styled.div`
   width: 100%;
   height: 40px;
   line-height: 40px;
   text-align: center;
   background: #a5a5a5;
   border-radius: 20px;
   color:#fff;
   margin: 30px 0;
   cursor: pointer;
`;
export const BackTop = styled.div`
   position: fixed;
   width: 60px;
   height: 60px;
   line-height: 60px;
   text-align: center;
   border: 1px solid #ccc;
   right: 50px;
   bottom: 30px;
   cursor: pointer;
   font-size: 14px;
`;