import styled from 'styled-components'

export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 960px;
	margin: 0 auto;
`

export const HomeLeft = styled.div`
	float: left;
	width: 625px;
	margin-left: 15px;
	padding-top: 30px;
	.banner-img{
		width: 625px;
		height: 270px;
	}
`

export const HomeRight = styled.div`
	width: 280px;
	float: right;
`

export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
	float: left;
	backgroud-color: #f7f7f7;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 18px;
	padding-right: 10px;
	font-size: 14px;
	border:1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		margin-right: 10px;
		width: 32px;
		height: 32px;
	}
`

export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.list-pic {
		float: right;
		display: ${(props) => (props.img === '') ? 'none' : 'block'};
		width: 123px;
		height: 100px;
		border: 1px solid #f0f0f0;		
		border-radius: 10px;
	}
	.title{
		cursor: pointer;
	}
	.title:hover{
		text-decoration: underline;
	}
`

export const Records = styled.div`
	margin-top: 8px;
	font-size: 12px;
	color: #b4b4b4;
	.iconfont{
		font-size: 12px;
	}
	.author{
		cursor: pointer;
	}
	.app{
		color: #ea6f5a;
		font-weight: bold;
	}
`

export const RecordItem = styled.span`
	margin-right: 10px;
`

export const ListInfo = styled.div`
	width:  ${(props) => (props.img === '') ? '625px' : '500px'};
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.des {
		font-size: 13px;
		line-height: 24px;
		color: #999;
	}
`

export const LoadMore = styled.div`
	cursor: pointer;
	width: 100%;
	height: 40px;
	line-height: 40px;
	background: #a5a5a5;
	text-align: center;
	border-radius: 20px;
	color: #fff;
	margin: 30px auto 60px;
`

export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`

export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url( ${ (props) => props.imgUrl} );
	background-size: contain;
`

export const WriterWrapper = styled.div`
	width: 280px;
	font-size: 14px;
	color: #969696;	
`

export const WriterList = styled.div`
	overflow: hidden;
	width:280px;
	margin-top: 15px;
	.writerImg {
		float: left;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		margin-right: 10px;
	}
	.infoWrapper{
		float: left;
	}
	.writerName {
		line-height: 24px;
	}
	.info{
		line-height: 24px;
	}
	.follow {
		cursor: pointer;
		float: right;
		color: #42c02e;
		font-size: 13px;
		margin-right: 5px;
	}
`

export const BackTop = styled.div`
	position: fixed;
	width: 60px;
	height: 60px;
	right: 100px;
	bottom: 100px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;
	font-size:14px;
`