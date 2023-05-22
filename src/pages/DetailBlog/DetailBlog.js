import { useParams } from "react-router-dom";
import style from "./DetailBlog.module.scss"
import images from "../../assets/images";
const DetailBlog = () => {
    const content = "Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel mi ut velit tempor aliquam eget eget enim. Proin cursus eleifend pretium. Aliquam cursus  pellentesque interdum. Vivamus placerat id leo a pellentesque. Vivamus a congue urna, sed porta eros. Etiam finibus magna et est aliquam, sed semper libero facilisis. Donec lectus lorem, rhoncus vitae quam eget, vulputate gravida elit. Praesent ultricieseros id velit condimentum, eu ultrices nisl consequat.Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel mi ut velit tempor aliquam eget eget enim. Proin cursus eleifend pretium. Aliquam cursus  pellentesque interdum. Vivamus placerat id leo a pellentesque. Vivamus a congue urna, sed porta eros. Etiam finibus magna et est aliquam, sed semper libero facilisis. Donec lectus lorem, rhoncus vitae quam eget, vulputate gravida elit. Praesent ultricieseros id velit condimentum, eu ultrices nisl consequat.Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel mi ut velit tempor aliquam eget eget enim. Proin cursus eleifend pretium. Aliquam cursus  pellentesque interdum. Vivamus placerat id leo a pellentesque. Vivamus a congue urna, sed porta eros. Etiam finibus magna et est aliquam, sed semper libero facilisis. Donec lectus lorem, rhoncus vitae quam eget, vulputate gravida elit. Praesent ultricieseros id velit condimentum, eu ultrices nisl consequat.";
    const blogs = [
        {
            id: "1", title: "Các dạng bài Listening Toeic và các TIP nâng cao trình độ nghe",content:content, time: "14/05/2023", watch: "200 lượt xem",author:"bởi luân", asset: images.part1,author:"Nguyễn Hoàng Luân"
        }, {
            id: "2", title: "Nghe chép chính tả và các tip nâng cao trình độ Listening", content:content,time: "14/05/2023", watch: "200 lượt xem", author:"bởi luân",asset: images.part2,author:"Nguyễn Hoàng Luân"
        }, {
            id: "3", title: "Get Ready for IELTS Listening (PDF + AUDIO)",content:content,time: "14/05/2023", watch: "200 lượt xem",author:"bởi luân", asset: images.part3,author:"Nguyễn Hoàng Luân"
        }, {
            id: "4", title: "Các từ vựng hay gặp trong IELTS Listening phần 1",content:content, time: "14/05/2023", watch: "200 lượt xem",author:"bởi luân", asset: images.part4,author:"Nguyễn Hoàng Luân"
        },{
            id: "5", title: "6 Cách dễ dàng để cải thiện điểm Toeic Listening", content:content,time: "14/05/2023", watch: "200 lượt xem", author:"bởi luân",asset: images.part5,author:"Nguyễn Hoàng Luân"
        }
    ];

    const {idblog} = useParams();

    const blog = blogs.find(item=>item.id == idblog);
    

    return (
        <div className={style.app}>
            <div className={style.detailblog}>
                <p className={style.title}>{blog.title}</p>
                <p className={style.subtitle}>By {blog.author}</p>
                <p className={style.subtitle}>{blog.time} {blog.watch}</p>
                <div className={style.divider}></div>
                <p className={style.content}>{blog.content}</p>
                <img src={blog.asset} className={style.image}></img>
                <p className={style.content}>{blog.content}</p>

            </div>

        </div>
    );

}


export default DetailBlog;