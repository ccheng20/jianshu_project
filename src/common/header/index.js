import React from 'react';
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
    Addition,
    Button
} from './style';

//负责页面上的样式
const Header = (props) => {
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
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                    <NavSearch 
                        className={props.focused ? 'focused': ''}
                        onFocus ={props.handleInputFocus}
                        onBlur={props.handleInputBlur}
                    >
                    </NavSearch>
                    </CSSTransition>
                    <span className={props.focused ? 'focused iconfont': 'iconfont'}>
                        &#xe612;
                    </span>
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

//容器组件负责逻辑和数据
const mapStateToProps = (state) => {
    return{
        focused: state.header.focused
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handleInputFocus(){
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header);