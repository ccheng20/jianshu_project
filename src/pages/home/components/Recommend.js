import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { 
    RWrapper,
    RItem
} from '../style';

class Recommend extends PureComponent{
    render(){
        return(
            <div>
                <RWrapper>
                    {
                        this.props.list.map((item) => {
                            return <RItem key = {item.get('id')}>
                            <img alt='' src={item.get('imgUrl')} />
                            </RItem>
                        })
                    }
                </RWrapper>
            </div>
        )
    }
}

const mapState = (state) =>({
    list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend);