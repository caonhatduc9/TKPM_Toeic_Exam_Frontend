import React, { useEffect, useState } from 'react';
import MyTable from '../../components/MyTable/MyTable';
import SideBar from '../../components/SideBar/SideBar';
import Pagination from '../../components/Pagination/Pagination';


import { FaSearch } from 'react-icons/fa';
import style from './ManageTest.module.scss';
import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';

function ManageTest(props) {
    // const itemsPerPage = 10;
    const title_test = ["Number", "Name", "Description", "Created Date", "Modifiled Date",];
    const [data_testAPI, setData_testAPI] = useState([]);
    const [data_test, setData_test] = useState([]);
    const navigate = useNavigate();

    // // console.log(window.localStorage.getItem('signin'));
    // const signin = window.localStorage.getItem('signin');
    // if(signin!=null){
    //     const checkAdmin =JSON.parse();
    //     if(checkAdmin.data.email !== "caoduc4work@gmail.com"){
    //         navigate('/');
    //     }
    // }

    useEffect(() => {
        axios.get('http://tinhoccaogiaphat.com/admin/exam')
            .then((res) => {
                // console.log(res.data);
                setData_testAPI(res.data);
                setData_test(res.data);
            })
            .catch((err) => {
                console.error(err);
            });


    }, []);

    const handleSearch = (event) => {
        event.preventDefault();
        var { search } = document.forms[0];
        var newdata;


        newdata = data_testAPI;
        newdata = newdata.filter((e) => {
            const name = e.name.toLowerCase();
            return name.indexOf(search.value.toLowerCase()) !== -1
        })
        setData_test(newdata);
    }

    return (
        <div className={style.app}>
            <SideBar type="managetest"/>
            <div className={style.container}>
                <div className={style.taskbar}>

                    <div><form className={style.search_bar} >
                        <input type="text" placeholder="Search" name='search' onChange={handleSearch} />
                        {/* <button type="submit"><FaSearch /></button> */}
                    </form></div>
                </div><MyTable title={title_test} data={data_test} type="managetest"/>

            </div>
        </div>
    );
}

export default ManageTest;