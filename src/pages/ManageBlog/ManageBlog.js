import React, { useEffect, useState } from 'react';
import MyTable from '../../components/MyTable/MyTable';
import SideBar from '../../components/SideBar/SideBar';
import Pagination from '../../components/Pagination/Pagination';

import { FaSearch } from 'react-icons/fa';
import style from './ManageBlog.module.scss';
import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';

function ManageBlog(props) {
    // const itemsPerPage = 10;
    const title_blog = ["Id", "Title", "CreateAt", "UpdatedAt"];
    const [data_blogAPI, setData_blogAPI] = useState([]);
    const [data_blog, setData_blog] = useState([])
    const navigate = useNavigate();
    const type = "manageblog";

    // console.log(window.localStorage.getItem('signin'));
    // const signin = window.localStorage.getItem('signin');
    // if (signin != null) {
    //     const checkAdmin = JSON.parse();
    //     if (checkAdmin.data.email !== "caoduc4work@gmail.com") {
    //         navigate('/');
    //     }
    // }


    const fetchApi = () => {
        axios.get('http://tinhoccaogiaphat.com/admin/blog')
            .then((res) => {
                console.log(res.data);
                setData_blogAPI(res.data.data);
                setData_blog(res.data.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    useEffect(() => {
        fetchApi();
    }, [])

    const handleSearch = (event) => {
        event.preventDefault();
        var { search } = document.forms[0];
        var newdata;

        newdata = data_blogAPI;
        newdata = newdata.filter((e) => {
            const name = e.title.toLowerCase();
            return name.indexOf(search.value.toLowerCase()) !== -1
        })
        setData_blog(newdata);
    }


    const handleDelete = (id) => {

        const urlApi = "http://tinhoccaogiaphat.com/admin/blog/" + id;
        console.log(urlApi);
        const data = new FormData();
        data.append('id', id);
        axios.delete(urlApi, data, {
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
            }
        },)
            .then((res) => {
                console.log(res.data);
                alert(res.data.message);
                fetchApi();

                // navigate('/admin/manageblog');

            })
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <div className={style.app}>
            <SideBar type="manageblog" />
            <div className={style.container}>
                <div className={style.taskbar}>

                    <div><form className={style.search_bar} >
                        <input type="text" placeholder="Search" name='search' onChange={handleSearch} />
                        {/* <button type="submit"><FaSearch /></button> */}
                    </form></div>
                </div><MyTable title={title_blog} data={data_blog} type={type} handleDelete={handleDelete} />
            </div>
        </div>
    );
}

export default ManageBlog;