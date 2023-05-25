import React, { useState } from "react";
import style from "./UploadBlog.module.scss"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import SideBar from '../../components/SideBar/SideBar';

const UploadBlog = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);


    console.log(window.localStorage.getItem('signin'));
    const checkAdmin = JSON.parse(window.localStorage.getItem('signin'));
    if (checkAdmin.data.username !== "caoduc4work@gmail.com"|| checkAdmin==null) {
        navigate('/');
    }


    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (value) => {
        setContent(value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(content);
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);

        console.log(formData);
        console.log(formData.get('title'));
        // console.log(formData.get('content'));

        axios.post("http://tinhoccaogiaphat.com/admin/blog", formData, {
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
            }
        },)

            .then((res) => {
                console.log(res.data);
                // setImageidx(imageidx + 1);
                // window.localStorage.setItem('addtest', 'yes');
                alert(res.data.message);
                if (res.data.statusCode == 200)
                    navigate('/admin/manageblog');
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className={style.app}>
            <SideBar type="uploadblog" />
            <div className={style.container}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={handleTitleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="content">Content</label>
                        <ReactQuill value={content} onChange={handleContentChange} />
                    </div>
                    {/* <div>
                        <label htmlFor="image">Image</label>
                        <input type="file" id="image" onChange={handleImageChange} />
                    </div> */}
                    <button type="submit">Upload</button>
                </form>

            </div>


        </div>

    );
}

export default UploadBlog;