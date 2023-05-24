import React, { useEffect, useState } from 'react';
import MyTable from '../../components/MyTable/MyTable';
import SideBar from '../../components/SideBar/SideBar';
import Pagination from '../../components/Pagination/Pagination';
import UploadTest from '../../components/UploadTest/UploadTest';


import { AiOutlineFilter } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import style from './Admin.module.scss';
import { useParams } from 'react-router-dom';
import { UploadBlog } from '../../components';
import { logDOM } from '@testing-library/react';
import axios from 'axios';

function Admin(props) {
    const { type } = useParams();
    const itemsPerPage = 10;


    const title_test = ["Number", "Name", "Created Date", "Modifiled Date",];
    var data_testAPI
        = [
            { name: 'Đề thi 1', createdDate: '2023-05-01', modifiledDate: '2023-01-01' },
            { name: 'Đề thi 2', createdDate: '2023-05-05', modifiledDate: '2023-01-01' },
            { name: 'Đề thi 3', createdDate: '2023-05-10', modifiledDate: '2023-01-01' },
            { name: 'Đề thi 4', createdDate: '2023-05-10', modifiledDate: '2023-01-01' },
            { name: 'Đề thi 5', createdDate: '2023-05-10', modifiledDate: '2023-01-01' },
            { name: 'Đề thi 6', createdDate: '2023-05-10', modifiledDate: '2023-01-01' },
            { name: 'Đề thi 7', createdDate: '2023-05-10', modifiledDate: '2023-01-01' },
            { name: 'Đề thi 8', createdDate: '2023-05-10', modifiledDate: '2023-01-01' },
            // { name: 'Đề thi 9', createdDate: '2023-05-10', modifiledDate: '2023-01-01' },
            // { name: 'Đề thi 10', createdDate: '2023-05-10', modifiledDate: '2023-01-01' },
        ]
    // const [data_testAPI, setData_testAPI] = useState(data_testAPI);
    const [data_test, setData_test] = useState(data_testAPI);

    const title_user = ["ID", "Name", "Email", "Phone", "Dob"];
    const [data_userAPI, setData_userAPI] = useState([]);
    const [data_user, setData_user] = useState([]);


    const title_blog = ["Id", "name", "Date", "Watch"];
    var data_blogAPI = [
        {
            id: "basicgrammaly", name: "Basic grammaly", date: "15/05/2023", watch: "200"
        },
        {
            id: "electricvobucalary", name: "Electric vobucalary", date: "15/05/2023", watch: "200",
        },
        {
            id: "keywordpart1", name: "key word part 1", date: "15/05/2023", watch: "200"
        }
    ];
    // const [data_blogAPI, setData_blogAPI] = useState(data_blogAPI);
    const [data_blog, setData_blog] = useState(data_blogAPI);

    useEffect(() => {
        axios.get('http://tinhoccaogiaphat.com/admin/student')
            .then((res) => {
                console.log(res.data);
                setData_userAPI(res.data.data);
                setData_user(res.data.data);
            })
            .catch((err) => {
                console.error(err);
            });

        // axios.get('http://tinhoccaogiaphat.com/admin/test')
        //     .then((res) => {
        //         console.log(res.data);
        //         setData_testAPI(res.data.data);
        //         setData_test(res.data.data);
        //     })
        //     .catch((err) => {
        //         console.error(err);
        //     });

        // axios.get('http://tinhoccaogiaphat.com/admin/blog')
        //     .then((res) => {
        //         console.log(res.data);
        //         setData_blogAPI(res.data.data);
        //         setData_blog(res.data.data);
        //     })
        //     .catch((err) => {
        //         console.error(err);
        //     });
    }, [])










    const handleSearch = (event) => {
        event.preventDefault();
        var { search } = document.forms[0];
        var newdata;


        if (type == "managetest") {
            newdata = data_testAPI;
            newdata = newdata.filter((e) => {
                const name = e.name.toLowerCase();
                return name.indexOf(search.value.toLowerCase()) !== -1
            })
            setData_test(newdata);
        }
        else if (type == "manageuser") {
            newdata = data_userAPI;
            console.log(data_userAPI);
            newdata = newdata.filter((e) => {
                const name = e.username.toLowerCase();
                return name.indexOf(search.value.toLowerCase()) !== -1
            })
            setData_user(newdata);
            console.log(newdata);

        }
        else if (type == "manageblog") {
            newdata = data_blogAPI;
            newdata = newdata.filter((e) => {
                const name = e.name.toLowerCase();
                return name.indexOf(search.value.toLowerCase()) !== -1
            })
            setData_blog(newdata);
        }

    }


    const content = () => {
        if (type == "managetest") {
            return (
                <><div className={style.taskbar}>
                    {/* <div className={style.filter}> <AiOutlineFilter size={20} />
                        <span>Filter</span></div> */}
                    <div><form className={style.search_bar} >
                        <input type="text" placeholder="Search" name='search' onChange={handleSearch} />
                        <button type="submit"><FaSearch /></button>
                    </form></div>
                </div><MyTable title={title_test} data={data_test} /><Pagination data={data_test} itemsPerPage={itemsPerPage} /></>
            )
        }
        else if (type == "manageuser") {
            return (
                <><div className={style.taskbar}>
                    {/* <div className={style.filter}> <AiOutlineFilter size={20} />
                        <span>Filter</span></div> */}
                    <div><form className={style.search_bar} >
                        <input type="text" placeholder="Search" name='search' onChange={handleSearch} />
                        <button type="submit"><FaSearch /></button>
                    </form></div>
                </div><MyTable title={title_user} data={data_user} /><Pagination data={data_user} itemsPerPage={itemsPerPage} /></>
            )
        }
        else if (type == "manageblog") {
            return (
                <><div className={style.taskbar}>
                    {/* <div className={style.filter}> <AiOutlineFilter size={20} />
                        <span>Filter</span></div> */}
                    <div><form className={style.search_bar} >
                        <input type="text" placeholder="Search" name='search' onChange={handleSearch} />
                        <button type="submit"><FaSearch /></button>
                    </form></div>
                </div><MyTable title={title_blog} data={data_blog} /><Pagination data={data_blog} itemsPerPage={itemsPerPage} /></>
            )
        }
        if (type == "uploadtest") { return <UploadTest /> }

        else if (type == "uploadblog") { return <UploadBlog /> }

    }


    return (
        <div className={style.app}>
            <SideBar />
            <div className={style.container}>
                {/* <UploadTest /> */}
                {content()}
                {/* <div className={style.taskbar}>
                    <div className={style.filter}> <AiOutlineFilter size={20} />
                        <span>Filter</span></div>
                    <div><form className={style.search_bar}>
                        <input type="text" placeholder="Search" />
                        <button type="submit"><FaSearch /></button>
                    </form></div>
                </div>
                <MyTable title={title_test} data={data_test} />
                <Pagination data={data_test} itemsPerPage={itemsPerPage} /> */}
            </div>


        </div>
    );
}

export default Admin;