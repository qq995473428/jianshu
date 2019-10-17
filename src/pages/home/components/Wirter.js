import React, { PureComponent } from 'react';
import { WriterWrapper } from '../style';
class Writer extends PureComponent {
    render() {
        return(
            <WriterWrapper>
                <img className='qrcode' src="http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
                <div className="info">
                    <p>下载简书手机App ></p>
                    <div className='desc'>随时随地地发现和创作内容</div>
                </div>
            </WriterWrapper>
        )
    }
}
export default Writer;