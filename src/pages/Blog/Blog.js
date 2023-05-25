import style from "./Blog.module.scss"
import { useNavigate } from "react-router-dom";
import images from "../../assets/images"
import { useEffect, useState } from "react";
import axios from "axios";
const Blog = () => {
    const content = "Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel mi ut velit tempor aliquam eget eget enim. Proin cursus eleifend pretium. Aliquam cursus  pellentesque interdum. Vivamus placerat id leo a pellentesque. Vivamus a congue urna, sed porta eros. Etiam finibus magna et est aliquam, sed semper libero facilisis. Donec lectus lorem, rhoncus vitae quam eget, vulputate gravida elit. Praesent ultricieseros id velit condimentum, eu ultrices nisl consequat.";
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        axios.get('http://tinhoccaogiaphat.com/admin/blog')
            .then((res) => {
                console.log(res.data);
                setBlogs(res.data.data);
            })
            .catch((err) => {
                console.error(err);
            })

    }, [])


    const list_blog = () => {
        return blogs.map((item) => {
            return (<>
                <div className={style.blog} onClick={() => { navigate('/blog/' + item.id) }}>
                    <div>
                        <p className={style.title}>{item.title}</p>
                        <p className={style.subtitle}>{item.createAt}</p>
                        <p>Được viết bởi Nguyễn Hoàng Luân</p>

                    </div>
                </div>
                <div className={style.divider}></div>
                </>
            )
        })
    };

    return (
        <div className={style.app}>
            <div className={style.categories}>
                <p className={style.category}>Chuyên mục</p>
                <p>Luyện Thi Toeic</p>
                <ul>
                    <li><p>Toeic Listening</p></li>
                    <li><p>Toeic Reading</p></li>
                    <li><p>Toeic Material</p></li>
                    <li><p>Thông tin kỳ thi Toeic</p></li>
                </ul>
                <p>Luyện Thi THPT</p>
                <ul>
                    <li><p>Đè thi tham khảo</p></li>
                    <li><p>Kiến thức cơ bản</p></li>
                    <li><p>Kiến thức nâng cao</p></li>
                </ul>
                <p>Tiếng anh cơ bản</p>
                <ul>
                    <li><p>Phát âm</p></li>
                    <li><p>Từ vựng</p></li>
                    <li><p>Ngữ pháp</p></li>
                </ul>
                <p>Sách luyện kỹ năng</p>
                <ul>
                    <li><p>Economic</p></li>
                    <li><p>ETS</p></li>
                    <li><p>Hacker</p></li>
                </ul>
            </div>
            <div className={style.list_blog}>
                {list_blog()}
            </div>
        </div>
        // </div>
    );
}

export default Blog;