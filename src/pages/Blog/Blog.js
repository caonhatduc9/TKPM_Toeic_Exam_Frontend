import style from "./Blog.module.scss"
import { useNavigate } from "react-router-dom";
const Blog = () => {
    const content = "Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel mi ut velit tempor aliquam eget eget enim. Proin cursus eleifend pretium. Aliquam cursus  pellentesque interdum. Vivamus placerat id leo a pellentesque. Vivamus a congue urna, sed porta eros. Etiam finibus magna et est aliquam, sed semper libero facilisis. Donec lectus lorem, rhoncus vitae quam eget, vulputate gravida elit. Praesent ultricieseros id velit condimentum, eu ultrices nisl consequat.";
    const blogs = [
        {
            id:"basicgrammaly",title: "Basic grammaly",time:"3 giờ trước",watch:"200 lượt xem" , asset: "https://www.w3schools.com/tags/img_girl.jpg",
        }, {
            id:"electricvobucalary",title: "Electric vobucalary", time:"3 giờ trước",watch:"200 lượt xem", asset: "https://www.w3schools.com/tags/img_girl.jpg",
        }, {
            id:"keywordpart1",title: "key word part 1",time:"3 giờ trước",watch:"200 lượt xem", asset: "https://www.w3schools.com/tags/img_girl.jpg",
        }
    ];
    const navigate = useNavigate();


    const list_blog = () => {
        return blogs.map((item) => {
            return (<div className={style.blog}  onClick ={()=>{navigate('/blog/'+item.id)}}>
                <img src={item.asset} className={style.image}></img>
                <div>
                <p className={style.title}>{item.title}</p>
                <p className={style.subtitle}>{item.time} {item.watch}</p>
                </div>
                
            </div>
            )
        })
    };

    return (
        <div className={style.app}>
            <div className={style.list_blog}>
                {list_blog()}
            </div>
        </div>
        // </div>
    );
}

export default Blog;