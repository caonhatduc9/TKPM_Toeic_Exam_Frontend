import { Nav } from 'react-bootstrap';
import style from './SideBar.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
const SideBar = () => {
    const { type } = useParams();
    const navitem = [
        { content: "Dashboard Test", handle: "managetest", },
        { content: "Dashboard User", handle: "manageuser" },
        { content: "Dashboard Blog", handle: "manageblog" },
        { content: "Upload Test", handle: "uploadtest" },
        { content: "Upload Blog", handle: "uploadblog" },
    ];
    const navigate = useNavigate();

    return (
        <Nav className={style.sidebar}>
            {navitem.map((item) => {
                if (type == item.handle)
                    return <Nav.Item className={style.a}><p>{item.content}</p></Nav.Item>;
                else return <Nav.Item className={style.nav_item} onClick={() => { navigate('/admin/' + item.handle) }}><p>{item.content}</p></Nav.Item>;
                

            })
            }

            {/* <Nav.Item className={`${style.nav_item} ${type === "" && style.a}`} >
                <p >Dashboard Test</p>
            </Nav.Item>
            <Nav.Item className={style.nav_item}>
                <p >Dashboard User</p>
            </Nav.Item>
            <Nav.Item className={style.a}>
                <p >Upload Test</p>
            </Nav.Item> */}
        </Nav>
    );
}

export default SideBar                   