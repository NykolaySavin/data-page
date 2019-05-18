import { connect } from 'react-redux';
import Content from './Content';
import {prevPage,nextPage} from "../../redux/modules/content.changePage.module";

export function mapStateToProps(props) {
    return{
        header:props.menu.selectedItem,
        content:props.content,
        index:props.page,
    }
}
export const mapDispatchToProps={
    nextPage:nextPage,
    prevPage:prevPage
}
export default connect(mapStateToProps,mapDispatchToProps)(Content)