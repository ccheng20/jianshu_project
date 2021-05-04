import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition} from 'react-transition-group'
import {actionCreators} from './store';
import{
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style';

//负责页面上的样式
class Header extends Component{
    getListArea(){
        if(this.props.focused){
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        Top Search
                        <SearchInfoSwitch>change suggestion</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            this.props.list.map((item) => {
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }

    render(){
        return(
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>Homepage</NavItem>
                    <NavItem className='left'>download App</NavItem>
                    <NavItem className='right'>Login</NavItem>
                    <NavItem className='right'>Aa</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                        <NavSearch 
                            className={this.props.focused ? 'focused': ''}
                            onFocus ={this.props.handleInputFocus}
                            onBlur={this.props.handleInputBlur}
                        >
                        </NavSearch>
                        </CSSTransition>
                        <span className={this.props.focused ? 'focused iconfont': 'iconfont'}>
                            &#xe612;
                        </span>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <span className="iconfont">&#xe615;</span>
                        compose
                    </Button>
                    <Button className='reg'>sign up</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

 //容器组件负责逻辑和数据
const mapStateToProps = (state) => {
return{
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handleInputFocus(){
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header);