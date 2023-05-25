import style from "./HistoryExam.module.scss"
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { Await, useNavigate } from "react-router-dom";




function HistoryExam() {

    const checkLogin = JSON.parse(window.localStorage.getItem("signin"));
    const userId = checkLogin.data.userId;
    console.log("checkLogin: ", checkLogin);
    console.log("userID: ", userId);
    var checkArray = true;

    const [dataHistory, setDataHistory] = useState([]);



    useEffect(() => {
        const getHistory = async () => {
            try {
                const res = await axios.get(
                    `http://tinhoccaogiaphat.com/tests/history/${userId}`
                )
                // console.log("Date History: ", res.data);
                setDataHistory(res.data.data);

            } catch (error) {
                console.log(error.message);
            }
        }
        getHistory();
    }, [])


    // console.log("History Data Real: ", dataHistory);

    const navigate = useNavigate();
    if (dataHistory.length !== 0) {
        //empty -> don't exam 
        return (
            <div className={style.wrapper}>
                <h1>Cài đặt</h1>
                <hr></hr>
                <div className={style.mainProfile}>
                    <div className={style.tabContent}>
                        <div>
                            {/* <a href="http://localhost:3000/profile">Thông tin</a> */}
                            <a onClick={() => { navigate("/profile") }}>Thông tin</a>
                            <h3 className={style.ClickedTab}>Danh sách bài thi</h3>
                            <h3>Thông báo</h3>
                            <h3>Feedback</h3>
                            <h3>Báo cáo lỗi</h3>
                        </div>
                        <div className={style.verticalLine}></div>
                    </div>

                    <div className={style.infor}>
                        {/* header in main profile */}
                        <Table striped bordered hover size="xxl">
                            <thead>
                                <tr>
                                    <th style={{ width: "15rem" }}>STT</th>
                                    <th>Thời gian</th>
                                    <th>Đề thi</th>
                                    <th style={{ width: "15rem" }}>Kết quả</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataHistory.map((item, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.timeStart}</td>
                                            <td>{item.name}</td>
                                            <td>{item.score}</td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </Table>
                    </div>



                </div>
            </div>


        )
    }
    else {
        return (
            <div className={style.wrapper}>
                <h1>Cài đặt</h1>
                <hr></hr>
                <div className={style.mainProfile}>
                    <div className={style.tabContent}>
                        <div>
                            {/* <a href="http://localhost:3000/profile">Thông tin</a> */}
                            <a onClick={() => { navigate("/profile") }}>Thông tin</a>
                            <h3 className={style.ClickedTab}>Danh sách bài thi</h3>
                            <h3>Thông báo</h3>
                            <h3>Feedback</h3>
                            <h3>Báo cáo lỗi</h3>
                        </div>
                        <div className={style.verticalLine}></div>
                    </div>

                    <div className={style.infor}>
                        {/* header in main profile */}
                        <Table striped bordered hover size="xxl">
                            <thead>
                                <tr>
                                    <th style={{ width: "15rem" }}>STT</th>
                                    <th>Thời gian</th>
                                    <th>Đề thi</th>
                                    <th style={{ width: "15rem" }}>Kết quả</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={4}>Chưa tham gia thi Toeic</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>



                </div>
            </div>


        )
    }


}

export default HistoryExam; 