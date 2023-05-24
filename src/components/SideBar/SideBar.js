import { Nav } from 'react-bootstrap';
import style from './SideBar.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import images from '../../assets/images';
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
        <>
            <Nav className={style.sidebar}>
                <Nav.Link  className={style.logo} onClick={() => { navigate('/') }}>
                    <img src={images.logo}></img>
                </Nav.Link>
                {navitem.map((item) => {
                    if (type == item.handle)
                        return <Nav.Item className={style.a}><p className="fixP">{item.content}</p></Nav.Item>;
                    else
                        return <Nav.Item className={style.nav_item} onClick={() => { navigate('/admin/' + item.handle); }}><p>{item.content}</p></Nav.Item>;


                })}
            </Nav></>
    );
}

export default SideBar                   