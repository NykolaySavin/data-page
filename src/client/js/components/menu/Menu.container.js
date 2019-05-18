import Menu from "./Menu";
import { connect } from 'react-redux';
import {selectMenuItem} from "../../redux/modules/menu.select.module";
import {fetchContent} from "../../redux/modules/content.fetch.module";

export function mapStateToProps(props) {
    return{
        items:props.menu.items,
        selectedItem:props.menu.selectedItem,
    }
}
export const mapDispatchToProps= {
    select:selectMenuItem,
    changeContent:fetchContent
}
export default connect(mapStateToProps,mapDispatchToProps)(Menu)