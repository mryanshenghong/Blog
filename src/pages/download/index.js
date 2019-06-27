import React, { PureComponent } from 'react'
import {
	DownloadWrapper,
	TitleBox,
	DescBox
} from './style'

class Download extends PureComponent{
	render(){
		return(
			<DownloadWrapper>
				<TitleBox>
					<img className='title-logo' src="./downloadImg/logo.png" alt=""/>
					<div className='info'>
						<div className='info-title'>创作你的创作</div>
						<div className='info-desc'>一个优质创作社区</div>							
					</div>					
				</TitleBox>
				<DescBox>
					<img className="phone-img" src="./downloadImg/phone.png" alt=""/>
					<div className='qrcode-box'>
						<img className='qrcode' src="./downloadImg/qrcode.png" alt=""/>	
						<div className='qrcode-title'>扫码下载简书App</div>
						<div className='qrcode-desc'>随时随地发现和创作内容</div>					
					</div>
				</DescBox>
			</DownloadWrapper>
		)
	}
}




export default Download