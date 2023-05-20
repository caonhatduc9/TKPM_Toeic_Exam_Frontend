import style from "./Blog.module.scss"
import { useNavigate } from "react-router-dom";
import images from "../../assets/images"
const Blog = () => {
    const content = "Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel mi ut velit tempor aliquam eget eget enim. Proin cursus eleifend pretium. Aliquam cursus  pellentesque interdum. Vivamus placerat id leo a pellentesque. Vivamus a congue urna, sed porta eros. Etiam finibus magna et est aliquam, sed semper libero facilisis. Donec lectus lorem, rhoncus vitae quam eget, vulputate gravida elit. Praesent ultricieseros id velit condimentum, eu ultrices nisl consequat.";
    const blogs = [
        {
            id: "1", title: "Các dạng bài Listening Toeic và các TIP nâng cao trình độ nghe", time: "3 giờ trước", watch: "200 lượt xem",author:"bởi luân", asset: images.part1,
        }, {
            id: "2", title: "Nghe chép chính tả và các tip nâng cao trình độ Listening", time: "3 giờ trước", watch: "200 lượt xem", author:"bởi luân",asset: images.part2,
        }, {
            id: "3", title: "Get Ready for IELTS Listening (PDF + AUDIO)", time: "3 giờ trước", watch: "200 lượt xem",author:"bởi luân", asset: images.part3,
        }, {
            id: "4", title: "Các từ vựng hay gặp trong IELTS Listening phần 1", time: "3 giờ trước", watch: "200 lượt xem",author:"bởi luân", asset: images.part4,
        },{
            id: "5", title: "6 Cách dễ dàng để cải thiện điểm Toeic Listening", time: "3 giờ trước", watch: "200 lượt xem", author:"bởi luân",asset: images.part5,
        }
    ];
    const navigate = useNavigate();


    const list_blog = () => {
        return blogs.map((item) => {
            return (<div className={style.blog} onClick={() => { navigate('/blog/' + item.id) }}>
                <img src={item.asset} className={style.image}></img>
                <div>
                    <p className={style.title}>{item.title}</p>
                    <p className={style.subtitle}>{item.time} {item.watch}</p>
                    <p>Được viết {item.author}</p>
                </div>

            </div>
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
                <div className={style.divider}></div>
                <p>Luyện Thi THPT</p>
                <ul>
                    <li><p>Đè thi tham khảo</p></li>
                    <li><p>Kiến thức cơ bản</p></li>
                    <li><p>Kiến thức nâng cao</p></li>
                </ul>
                <div className={style.divider}></div>
                <p>Tiếng anh cơ bản</p>
                <ul>
                    <li><p>Phát âm</p></li>
                    <li><p>Từ vựng</p></li>
                    <li><p>Ngữ pháp</p></li>
                </ul>
                <div className={style.divider}></div>
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