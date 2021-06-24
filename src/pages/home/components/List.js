import React, { PureComponent } from 'react';
import { 
    ListItem, 
    ListInfo,
    LoadMore
} from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store'
import {Link} from 'react-router-dom';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

class List extends PureComponent{
    render(){
        const { list, getMoreList, page } = this.props;
        console.log(list)
        return(
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <Link key={index} to= {'/detail/' + item.get('id')}>
                            <ListItem key={index}>
                                <img alt='' className='pic' src={item.get('imgUrl')} />
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                            </Link>
                        );
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
});

const mapDispatch = (dispatch) => ({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page))
    }
})

export default connect(mapState, mapDispatch)(List);