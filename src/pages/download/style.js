import styled from 'styled-components'

export const DownloadWrapper = styled.div`
	overflow: hidden;
	width: 960px;
	margin: 0 auto;
`

export const TitleBox = styled.div`
	margin: 0 auto;
	margin-top: 50px;
	margin-bottom: 40px;
	text-align: center
	.title-logo{
		vertical-align: middle;
		width: 100px;
		height: 100px;
	}
	.info{
		line-height: 1.4;
		display: inline-block;
		vertical-align: middle;
		margin-left: 20px;
		text-align: left;
	}
	.info-title{
		font-size: 30px;
	}
	.info-desc{
		font-size: 24px;
		font-weight: 300;
	}
`

export const DescBox = styled.div`
	margin: 0 auto;
	text-align: center;
	img{
		vertical-align: middle;
	}
	.phone-img{
		width: 410px;
		height: 314px;
	}
	.qrcode-box{
		display: inline-block;
	    margin: 0 0 40px 40px;
	    vertical-align: bottom;
	    text-align: left;		
	}
	.qrcode{
	    width: 140px;
	    height: 140px;
	}
	.qrcode-title{
		line-height: 1.4;
		margin-top: 4px;
		font-size: 24px;
	}
	.qrcode-desc{
		line-height: 1.4;
	    margin-top: 4px;
	    font-size: 16px;
	    font-weight: 300;
	}	
`