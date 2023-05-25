
import style from "./Profile.module.scss"

function notifyChange() {
    alert("Thay đổi thông tin thành công!!!"); 
}



function Profile() {

    const data = JSON.parse(window.localStorage.getItem("signin")).data; 
    console.log("data: ", data);


    return (
        <div className={style.wrapper}>
            <h1>Cài đặt</h1>
            <hr></hr>
            <div className={style.mainProfile}>
                <div className={style.tabContent}>
                    <div>
                        <h3 className={style.ClickedTab}>Thông tin</h3>
                        <a href="http://localhost:3000/historyexam">Danh sách bài thi</a>
                        <h3>Thông báo</h3>
                        <h3>Feedback</h3>
                        <h3>Báo cáo lỗi</h3>
                    </div>
                    <div className={style.verticalLine}></div>
                </div>

                <div className={style.infor}>
                    {/* header in main profile */}
                    <div className={style.headerInfor}>
                        <div className={style.avtHeader}>
                            <img src="https://cdn.popsww.com/blog/sites/2/2021/03/nobita-la-ai.jpg" alt="PtcProfile" />
                            <h2>Profile</h2>
                        </div>

                        <div className={style.listButton}>
                            <button>Hủy</button>
                            <button onClick={notifyChange} style={{backgroundColor: "#344154", color: "white", fontWeight: "500"}}>Lưu</button>
                        </div>
                    </div>

                    <div className={style.contentInfor}>
                        <div className={style.titleContent}>
                            <h2>Họ và tên</h2>
                            <h2>Gmail</h2>
                            <h2>Date</h2>
                            <h2>Mục tiêu</h2>
                            <h2>Mật khẩu</h2>
                        </div>

                        <div className={style.valueInfor}>
                            <input type="text"  value={data.userName}/>
                            <input type="text" value={data.email}/>
                            <input type="text" value={"06/07/2002"}/>
                            <input type="text" value={"700+"}/>
                            <input type="text" value={"***************"}/>
                        </div>
                    </div>



                </div>
            </div>

        </div>
    )
}

export default Profile; 