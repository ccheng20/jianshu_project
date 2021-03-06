import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { 
    TopicWrapper,
    TopicItem
} from '../style';

class Topic extends PureComponent{
    render(){
        const { list } = this.props;
        return(
            <TopicWrapper>
                {
                    list.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img
                                    className='topic-pic'
                                    src={item.get('imgUrl')}
                                    alt=''
                                />
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        )
    }
}

//从store里面拿数据
const mapState = (state) => ({
    list: state.getIn(['home', 'topicList'])
});

export default connect(mapState, null)(Topic);