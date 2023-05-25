import React, { useEffect, useState } from 'react';
import MyTable from '../../components/MyTable/MyTable';
import SideBar from '../../components/SideBar/SideBar';
import Pagination from '../../components/Pagination/Pagination';


import { FaSearch } from 'react-icons/fa';
import style from './ManageUser.module.scss';
import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';

function ManageUser(props) {
    // const itemsPerPage = 10;
    const title_user = ["ID", "Name", "Email", "Phone", "Dob"];
    const [data_userAPI, setData_userAPI] = useState([]);
    const [data_user, setData_user] = useState([]);
    const navigate = useNavigate();

    // console.log(window.localStorage.getItem('signin'));
    const signin = window.localStorage.getItem('signin');
    if(signin!=null){
        const checkAdmin =JSON.parse();
        if(checkAdmin.data.email !== "caoduc4work@gmail.com"){
            navigate('/');
        }
    }

    useEffect(() => {
        axios.get('http://tinhoccaogiaphat.com/admin/student')
            .then((res) => {
                // console.log(res.data);
                setData_userAPI(res.data.data);
                setData_user(res.data.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const handleSearch = (event) => {
        event.preventDefault();
        var { search } = document.forms[0];
        var newdata;

        newdata = data_userAPI;
        console.log(data_userAPI);
        newdata = newdata.filter((e) => {
            const name = e.username.toLowerCase();
            return name.indexOf(search.value.toLowerCase()) !== -1
        })
        setData_user(newdata);
        console.log(newdata);

    }
    return (
        <div className={style.app}>
            <SideBar type="manageuser" />
            <div className={style.container}>
                <div className={style.taskbar}>
                    {/* <div className={style.filter}> <AiOutlineFilter size={20} />
                        <span>Filter</span></div> */}
                    <div><form className={style.search_bar} >
                        <input type="text" placeholder="Search" name='search' onChange={handleSearch} />
                        {/* <button type="submit"><FaSearch /></button> */}
                    </form></div>
                </div><MyTable title={title_user} data={data_user} type="manageuser" />
            </div>
        </div>
    );
}

export default ManageUser;