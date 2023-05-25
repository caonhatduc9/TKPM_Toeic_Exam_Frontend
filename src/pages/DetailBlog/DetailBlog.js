import { useNavigate, useParams } from "react-router-dom";
import style from "./DetailBlog.module.scss"
import images from "../../assets/images";
import { useEffect, useState } from "react";
import axios from "axios";
import { logDOM } from "@testing-library/react";
const DetailBlog = () => {
    const [blog, setBlog] = useState([]);
    const { idblog } = useParams();

    useEffect(() => {

        axios.get('http://tinhoccaogiaphat.com/admin/blog/' + idblog)
            .then((res) => {
                // console.log(res.data);
                setBlog(res.data.data);
                // setBlog(blogs.find(item => item.id == idblog))
                // console.log(idblog);
            })
            .catch((err) => {
                console.error(err);
            })
    }, [idblog])



    const content = () => {

        return (<></>)
    }

    return (
        <div className={style.app}>
            <div className={style.detailblog}>
                <p className={style.title}>{blog.title}</p>
                <p className={style.subtitle}>By Nguyễn Hoàng Luân</p>
                <p className={style.subtitle}>{blog.createAt}</p>
                <div className={style.divider}></div>
                <p className={style.content}>
                    <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
                </p>
            </div>

        </div>
    );

}


export default DetailBlog;