import { Nav } from 'react-bootstrap';
import style from './SideBar.module.scss';
const SideBar = () => {

    return (<Nav className={style.sidebar}>
        {/* <div className={style.sidebar_sticky}></div> */}
        <Nav.Item className={style.nav_item}>
            <p >Dashboard Test</p>
        </Nav.Item>
        <Nav.Item className={style.nav_item}>
            <p >Dashboard User</p>
        </Nav.Item>
        <Nav.Item className={style.a}>
            <p >Upload Test</p>
        </Nav.Item>
    </Nav>);
}

export default SideBar