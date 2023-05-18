import React from 'react';
import MyTable from '../../components/MyTable/MyTable';
import SideBar from '../../components/SideBar/SideBar';
import Pagination from '../../components/Pagination/Pagination';
import UploadTest from '../../components/UploadTest/UploadTest';


import { AiOutlineFilter } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { Nav, Tab } from "react-bootstrap";
import style from './Admin.module.scss';

function Admin(props) {
    //   const { data } = props;
    const itemsPerPage = 4;
    const title_test = [
        "Number", "Name", "Created Date", "Modifiled Date",
    ];
    const data_test = [
        { name: 'Đề thi 1', createdDate: '2023-05-01', modifiledDate: '2023-01-01' },
        { name: 'Đề thi 2', createdDate: '2023-05-05', modifiledDate: '2023-01-01' },
        { name: 'Đề thi 3', createdDate: '2023-05-10', modifiledDate: '2023-01-01' },
        { name: 'Đề thi 4', createdDate: '2023-05-10', modifiledDate: '2023-01-01' },
        { name: 'Đề thi 5', createdDate: '2023-05-10', modifiledDate: '2023-01-01' },
        { name: 'Đề thi 6', createdDate: '2023-05-10', modifiledDate: '2023-01-01' },
        { name: 'Đề thi 7', createdDate: '2023-05-10', modifiledDate: '2023-01-01' },
        { name: 'Đề thi 8', createdDate: '2023-05-10', modifiledDate: '2023-01-01' },
        { name: 'Đề thi 9', createdDate: '2023-05-10', modifiledDate: '2023-01-01' },
        { name: 'Đề thi 10', createdDate: '2023-05-10', modifiledDate: '2023-01-01' },
    ];

    const title_user = [
        "ID", "Name", "Email", "Phone", "Dob"
    ];

    const data_user = [
        { id: "20127466", name: "Cao Nhật Đức", email: "duc@gmail.com", phone: "090910009", dob: "2002-02-30" },
        { id: "20127550", name: "Đoàn Hữu Lộc", email: "loc@gmail.com", phone: "090910009", dob: "2002-02-30" },
        { id: "20127559", name: "Nguyễn Hoàng Luân", email: "luan@gmail.com", phone: "090910009", dob: "2002-02-30" },
        { id: "20127614", name: "Huỳnh Ngọc Sơn", email: "son@gmail.com", phone: "090910009", dob: "2002-02-30" },
    ];

    return (
        <div className={style.app}>
            <SideBar />
            <div className={style.container}>
                {/* <UploadTest /> */}
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