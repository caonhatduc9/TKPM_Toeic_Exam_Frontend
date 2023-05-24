import React, { useState } from "react";
import style from "./UploadBlog.module.scss"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UploadBlog = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('image', image);

        console.log(formData);

        axios.post("http://tinhoccaogiaphat.com/admin/exam", formData
            , {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
            .then((res) => {
                console.log(res.data);

                // window.localStorage.setItem('addtest', 'yes');
                // navigate('/admin/managetest');
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
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
                <textarea
                    id="content"
                    value={content}
                    onChange={handleContentChange}
                ></textarea>
            </div>
            <div>
                <label htmlFor="image">Image</label>
                <input type="file" id="image" onChange={handleImageChange} />
            </div>
            <button type="submit">Upload</button>
        </form>
    );
}

export default UploadBlog;