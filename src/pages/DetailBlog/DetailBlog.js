import { useParams } from "react-router-dom";
import style from "./DetailBlog.module.scss"
import images from "../../assets/images";
const DetailBlog = () => {
    const content = "Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel mi ut velit tempor aliquam eget eget enim. Proin cursus eleifend pretium. Aliquam cursus  pellentesque interdum. Vivamus placerat id leo a pellentesque. Vivamus a congue urna, sed porta eros. Etiam finibus magna et est aliquam, sed semper libero facilisis. Donec lectus lorem, rhoncus vitae quam eget, vulputate gravida elit. Praesent ultricieseros id velit condimentum, eu ultrices nisl consequat.Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel mi ut velit tempor aliquam eget eget enim. Proin cursus eleifend pretium. Aliquam cursus  pellentesque interdum. Vivamus placerat id leo a pellentesque. Vivamus a congue urna, sed porta eros. Etiam finibus magna et est aliquam, sed semper libero facilisis. Donec lectus lorem, rhoncus vitae quam eget, vulputate gravida elit. Praesent ultricieseros id velit condimentum, eu ultrices nisl consequat.Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel mi ut velit tempor aliquam eget eget enim. Proin cursus eleifend pretium. Aliquam cursus  pellentesque interdum. Vivamus placerat id leo a pellentesque. Vivamus a congue urna, sed porta eros. Etiam finibus magna et est aliquam, sed semper libero facilisis. Donec lectus lorem, rhoncus vitae quam eget, vulputate gravida elit. Praesent ultricieseros id velit condimentum, eu ultrices nisl consequat.";
    const blogs = [
        {
            id: "basicgrammaly", title: "Basic grammaly", time: "15/05/2023",watch:"300 lượt xem", content: content, asset: "https://www.w3schools.com/tags/img_girl.jpg",
        }, {
            id: "electricvobucalary", title: "Electric vobucalary", time: "15/05/2023", watch:"300 lượt xem",content: content, asset: "https://www.w3schools.com/tags/img_girl.jpg",
        }, {
            id: "keywordpart1", title: "key word part 1", time: "15/05/2023",watch:"300 lượt xem", content: content, asset: "https://www.w3schools.com/tags/img_girl.jpg",
        }
    ];


    const {idblog} = useParams();

    const blog = blogs.find(item=>item.id == idblog);
    

    return (
        <div className={style.app}>
            <div className={style.detailblog}>
                <p className={style.title}>{blog.title}</p>
                <p className={style.subtitle}>{blog.time} {blog.watch}</p>
                <div className={style.divider}></div>
                <p className={style.content}>{blog.content}</p>
                <img src={blog.asset} className={style.image}></img>
            </div>

        </div>
    );

}


export default DetailBlog;