import style from "./Home.module.scss"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../../components/Card/Card";




function Home() {
  const listFullTest = [
    {
      title: "ETS TOEIC 2022 Test 1",
      des: "ETS TOEIC 2022 Test 1",
      time: 120,
      countUser: 9999,
      numQues: 120,
    },
    {
      title: "ETS TOEIC 2022 Test 2",
      des: "ETS TOEIC 2022 Test 2",
      time: 120,
      countUser: 9999,
      numQues: 120,
    },
    {
      title: "ETS TOEIC 2022 Test 3",
      des: "ETS TOEIC 2022 Test 3",
      time: 120,
      countUser: 9999,
      numQues: 120,
    },
    {
      title: "ETS TOEIC 2022 Test 4",
      des: "ETS TOEIC 2022 Test 4",
      time: 120,
      countUser: 9999,
      numQues: 120,
    },
    {
      title: "ETS TOEIC 2022 Test 5",
      des: "ETS TOEIC 2022 Test 5",
      time: 120,
      countUser: 9999,
      numQues: 120,
    },
    {
      title: "ETS TOEIC 2022 Test 6",
      des: "ETS TOEIC 2022 Test 6",
      time: 120,
      countUser: 9999,
      numQues: 120,
    },
    {
      title: "ETS TOEIC 2022 Test 7",
      des: "ETS TOEIC 2022 Test 7",
      time: 120,
      countUser: 9999,
      numQues: 120,
    },
    {
      title: "ETS TOEIC 2022 Test 8",
      des: "ETS TOEIC 2022 Test 8",
      time: 120,
      countUser: 9999,
      numQues: 120,
    },
  ];
  return (
    <div className={style.wrapper}>
      <div className={style.intro}>
        <h2 style={{ marginBottom: "8rem", fontSize: "4rem" }}>
          ToeicExam
        </h2>
        <h2 style={{ color: "red", fontWeight: "700", marginLeft: "2rem", fontSize: "3rem" }}>
          Luyện thi TOEIC, IELTS
        </h2>
        <h2 style={{ marginLeft: "7rem", marginBottom: "3rem" }}>
          KHÔNG GIỚI HẠN
        </h2>
        <ul>
          <li>
            Số lượng đề thi khủng từ các nguồn uy tín
          </li>
          <li>
            Giao diện thân thiện, dễ dùng tính thời gian như thi thật
          </li>
          <li>
            Lựa chọn luyện tập theo section và đa dạng theo nhu cầu học
          </li>
          <li>
            Highlight và ghi chú linh hoạt ngay trong đề thi
          </li>
          <li>
            Report điểm tự động, đánh giá chi tiết bài làm
          </li>
        </ul>
      </div>

      <div className={style.examTest}>
        <h2>
          Đề thi mới nhất
        </h2>

        <div>
          <Container fluid="md">
            <Row>
              {listFullTest &&
                listFullTest.map((item, index) => {
                  return (
                    <Col md={3} key={index}>
                      <Card
                        title={item.title}
                        des={item.des}
                        time={item.time}
                        countUser={item.countUser}
                        numQues={item.numQues}
                      />
                    </Col>
                  );
                })}
            </Row>
          </Container>
        </div>

        <div className={style.educationIntro}>
          <div>
            <h2>
              Số hóa và chuyển đổi số trong giáo dục
            </h2>
            <p>
              Chuyên hỗ trợ cung cấp thiết bị công nghệ, phần mềm hình thành giải pháp đáp ứng số hóa và chuyển đối số trong Giáo Dục theo Thông tư 37/2021/TT-BGDĐT, 38/2021/TT-BGDĐT, 39/2021/TT-BGDĐT
            </p>
          </div>

          <img src={"https://gdvietnam.com/Content/Custom/Images/07.png"} alt="Pc" />
        </div>

        <div className={style.testIntro}>
          <img src={"https://gdvietnam.com/Content/Custom/Images/08.png"} alt="Pc" />

          <div>
            <p>
              Giải pháp toàn diện
            </p>
            <h2>
              Cung cấp giải pháp, phần mềm, thiết bị toàn diện cho khách hàng
            </h2>


          </div>
          <a href="http://localhost:3000/fulltest">Luyện tập ngay</a>
        </div>


      </div>

      <div className={style.Members}>
        <div className={style.title}>
          <h2>
            Đội ngũ chuyên nghiệp
          </h2>
          <p>
            Trẻ trung, năng động, tâm huyết và có trình độ
          </p>
        </div>

        <div className={style.listMember}>
          <div className={style.cardMember}>
            <img src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/338402061_6032386890173225_610297980214389478_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ewueBPg_ndUAX-OAnH8&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfDyNoLdjmsi9oHAEIy6qQi-zPjiHosoBkPM-gYUvcyDGw&oe=646775C4" />
            <h2>Nguyễn Hoàng Luân</h2>
            <p>
              "Toeic 990, có nhiều năm kinh nghiệm trong giải và giảng các đề thi"
            </p>
          </div>

          <div className={style.cardMember}>
            <img src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/338402061_6032386890173225_610297980214389478_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ewueBPg_ndUAX-OAnH8&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfDyNoLdjmsi9oHAEIy6qQi-zPjiHosoBkPM-gYUvcyDGw&oe=646775C4" />
            <h2>Huỳnh Ngọc Sơn</h2>
            <p>
              "Toeic 990, có nhiều năm kinh nghiệm trong giải và giảng các đề thi"
            </p>
          </div>

          <div className={style.cardMember}>
            <img src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/338402061_6032386890173225_610297980214389478_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ewueBPg_ndUAX-OAnH8&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfDyNoLdjmsi9oHAEIy6qQi-zPjiHosoBkPM-gYUvcyDGw&oe=646775C4" />
            <h2>Cao Nhật Đức</h2>
            <p>
              "Toeic 990, có nhiều năm kinh nghiệm trong giải và giảng các đề thi"
            </p>
          </div>

          <div className={style.cardMember}>
            <img src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/338402061_6032386890173225_610297980214389478_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ewueBPg_ndUAX-OAnH8&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfDyNoLdjmsi9oHAEIy6qQi-zPjiHosoBkPM-gYUvcyDGw&oe=646775C4" />
            <h2>Đoàn Hữu Lộc</h2>
            <p>
              "Toeic 990, có nhiều năm kinh nghiệm trong giải và giảng các đề thi"
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home;
