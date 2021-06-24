import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition} from 'react-transition-group'
import {actionCreators} from './store';
import { ImSpinner11, ImPen } from "react-icons/im";
import { BsSearch } from "react-icons/bs";
import { actionCreators as loginActionCreators } from '../../pages/login/store';
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
        const{ focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const newList = list.toJS();
        const pageList = [];

        if(newList.length){
            for(let i = (page - 1) * 10; i < page * 10; i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }

        if(focused || mouseIn){
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        Top Search
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <ImSpinner11 className="iconfont spin"/>
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }

    render(){
        const { focused, handleInputFocus, handleInputBlur, list, login, logout} = this.props;
        return(
            <HeaderWrapper>
                <Link to='/'>
                <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'>Homepage</NavItem>
                    <NavItem className='left'>download App</NavItem>
                    {
                        login ? 
                        <NavItem onClick={logout} className='right'>log out</NavItem> : 
                        <Link to='/login'><NavItem className='right'>Login</NavItem></Link>
                    }
                    <NavItem className='right'>Aa</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                        <NavSearch 
                            className={focused ? 'focused': ''}
                            onFocus ={() => handleInputFocus(list)}
                            onBlur={handleInputBlur}
                        >
                        </NavSearch>
                        </CSSTransition>
                        <BsSearch className={focused ? 'focused iconfont zoom': 'iconfont zoom'} />
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className='writting'>
                            <ImPen className="iconfont pen" />
                            compose
                        </Button>
                    </Link>
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
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handleInputFocus(list){
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage){
            if(page < totalPage){
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
        },
        logout() {
            dispatch(loginActionCreators.logout())
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);