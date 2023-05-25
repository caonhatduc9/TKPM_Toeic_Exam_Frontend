import style from "./HistoryExam.module.scss"
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { Await, useNavigate } from "react-router-dom";




function HistoryExam() {

    const checkLogin = JSON.parse(window.localStorage.getItem("signin"));
    const userId = checkLogin.data.userId; 
    console.log("checkLogin: ", checkLogin );
    console.log("userID: ", userId);



    useEffect(() => {
        const getHistory = async () => {
            try {
                const res = await axios.get(
                    `http://tinhoccaogiaphat.com/tests/history/${userId}`
                )

                console.log("data: ", res.data);
            } catch (error) {
                console.log(error.message);
                            }
        }

        getHistory(); 
    })





    const data = [
        {
            date: "18:00 15/05/2023",
            nameExam: "ETS TOEIC 2022 TEST 1",
            score: "650"
        },
        {
            date: "7:00 19/05/2023",
            nameExam: "ETS TOEIC 2022 TEST 2",
            score: "595"
        },
        {
            date: "13:00 20/05/2023",
            nameExam: "ETS TOEIC 2022 TEST 3",
            score: "655"
        },
        {
            date: "17:00 21/05/2023",
            nameExam: "ETS TOEIC 2022 TEST 4",
            score: "700"
        },
        {
            date: "20:00 24/05/2023",
            nameExam: "ETS TOEIC 2022 TEST 5",
            score: "725"
        }
    ]
    const navigate = useNavigate();
    return (
        <div className={style.wrapper}>
            <h1>Cài đặt</h1>
            <hr></hr>
            <div className={style.mainProfile}>
                <div className={style.tabContent}>
                    <div>
                        {/* <a href="http://localhost:3000/profile">Thông tin</a> */}
                        <a onClick={()=>{navigate("/profile")}}>Thông tin</a>
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
                                <th style={{width: "15rem"}}>Kết quả</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.date}</td>
                                        <td>{item.nameExam}</td>
                                        <td>{item.score}</td>
                                    </tr>
                                )
                            })}
                            {/* <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Thornton</td>
                                <td>Thornton</td>
                                <td>@twitter</td>
                            </tr> */}
                        </tbody>
                    </Table>
                </div>



            </div>
        </div>


    )

}

export default HistoryExam; 