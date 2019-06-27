import styled from 'styled-components'

export const LoginWrapper = styled.div`
	z-index: -1;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 56px;
	background: #eee;
`

export const LoginBox = styled.div`
	width: 400px;
	margin: 100px auto;
	padding: 50px 50px 20px 50px;
	background: #fff;
	box-shadow: 0 0 8px rgba(0,0,0,.1);
`

export const Input = styled.input`
	display: block;
    width: 300px;
    height: 41px;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
    margin: 0 auto;
    &.acc{
		border-bottom: none;
    	border-radius: 4px 4px 0 0;
    }
`

export const Button = styled.div`
	width: 350px;
	height: 38px;
	line-height: 38px;
	color: #fff;
	background: #3194d0;
	margin: 10px auto;
	border-radius: 10px;
	text-align: center;
	font-size: 18px;	
`
export const Option = styled.div`
	text-align:center;
	margin-bottom: 30px;
	a{
		padding: 10px;
	    font-weight: 700;
	}
	.active{
		color: #ea6f5a;
		border-bottom: 2px solid #ea6f5a;
	}	
`

export const SocialBox = styled.div`
	margin-top: 30px;
	text-align: center;
	.social-title{
	    position: relative;
	    margin: 0 30px 10px 30px;
	    font-size: 12px;
	    color: #b5b5b5;
	}
	.social-title::before{
	    content: "";
	    border-top: 1px solid #b5b5b5;
	    display: block;
	    position: absolute;
	    width: 100px;
	    top: 5px;
	    left: 0px;
	}
	.social-title::after{
		content: "";
	    border-top: 1px solid #b5b5b5;
	    display: block;
	    position: absolute;
	    width: 100px;
	    top: 5px;
	    right: 0px;
	}	
`