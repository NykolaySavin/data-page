import { connect } from 'react-redux';
import Content from './Content';

export function mapStateToProps(props) {
    return{
        header:props.menu.selectedItem,
        content:props.content
    }
}
export default connect(mapStateToProps,null)(Content)