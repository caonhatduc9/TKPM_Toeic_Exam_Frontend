import Container from "react-bootstrap/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./ResultDetail.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../../components/Card/Card";
import { Button, Nav } from "react-bootstrap";
import {
  Audio,
  CountDownTimer,
  ListPart,
  Question,
  QuestionGroup,
} from "../../components";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const ResultDetail = () => {
  const answersExPart1 = [
    {
      value: "A",
      title: "",
      name: "question-1",
      id: "question-1-A",
    },
    {
      value: "B",
      title: "",
      name: "question-1",
      id: "question-1-B",
    },
    {
      value: "C",
      title: "",
      name: "question-1",
      id: "question-1-C",
    },
    {
      value: "D",
      title: "",
      name: "question-1",
      id: "question-1-D",
    },
  ];
  const answersExPart1b = [
    {
      value: "A",
      title: "",
      name: "question-2",
      id: "question-2-A",
    },
    {
      value: "B",
      title: "",
      name: "question-2",
      id: "question-2-B",
    },
    {
      value: "C",
      title: "",
      name: "question-2",
      id: "question-2-C",
    },
    {
      value: "D",
      title: "",
      name: "question-2",
      id: "question-2-D",
    },
  ];
  const answersExPart2 = [
    {
      value: "A",
      title: "",
      name: "question-7",
      id: "question-7-A",
    },
    {
      value: "B",
      title: "",
      name: "question-7",
      id: "question-7-B",
    },
    {
      value: "C",
      title: "",
      name: "question-7",
      id: "question-7-C",
    },
  ];
  const answersExPart2b = [
    {
      value: "A",
      title: "",
      name: "question-8",
      id: "question-8-A",
    },
    {
      value: "B",
      title: "",
      name: "question-8",
      id: "question-8-B",
    },
    {
      value: "C",
      title: "",
      name: "question-8",
      id: "question-8-C",
    },
  ];
  const answersExPart3 = [
    {
      value: "A",
      title: "A move to a new a city",
      name: "question-32",
      id: "question-32-A",
    },
    {
      value: "B",
      title: "A business trip",
      name: "question-32",
      id: "question-32-B",
    },
    {
      value: "C",
      title: "A building tour",
      name: "question-32",
      id: "question-32-C",
    },
    {
      value: "D",
      title: "A meeting with visiting colleagues",
      name: "question-32",
      id: "question-32-D",
    },
  ];
  const answersExPart3b = [
    {
      value: "A",
      title: "A move to a new a city",
      name: "question-33",
      id: "question-33-A",
    },
    {
      value: "B",
      title: "A business trip",
      name: "question-33",
      id: "question-33-B",
    },
    {
      value: "C",
      title: "A building tour",
      name: "question-33",
      id: "question-33-C",
    },
    {
      value: "D",
      title: "A meeting with visiting colleagues",
      name: "question-33",
      id: "question-33-D",
    },
  ];
  const answersExPart4 = [
    {
      value: "A",
      title: "A move to a new a city",
      name: "question-71",
      id: "question-71-A",
    },
    {
      value: "B",
      title: "A business trip",
      name: "question-71",
      id: "question-71-B",
    },
    {
      value: "C",
      title: "A building tour",
      name: "question-71",
      id: "question-71-C",
    },
    {
      value: "D",
      title: "A meeting with visiting colleagues",
      name: "question-71",
      id: "question-71-D",
    },
  ];
  const answersExPart4b = [
    {
      value: "A",
      title: "A move to a new a city",
      name: "question-72",
      id: "question-72-A",
    },
    {
      value: "B",
      title: "A business trip",
      name: "question-72",
      id: "question-72-B",
    },
    {
      value: "C",
      title: "A building tour",
      name: "question-72",
      id: "question-72-C",
    },
    {
      value: "D",
      title: "A meeting with visiting colleagues",
      name: "question-72",
      id: "question-72-D",
    },
  ];
  const answersExPart5 = [
    {
      value: "A",
      title: "A move to a new a city",
      name: "question-101",
      id: "question-101-A",
    },
    {
      value: "B",
      title: "A business trip",
      name: "question-101",
      id: "question-101-B",
    },
    {
      value: "C",
      title: "A building tour",
      name: "question-101",
      id: "question-101-C",
    },
    {
      value: "D",
      title: "A meeting with visiting colleagues",
      name: "question-101",
      id: "question-101-D",
    },
  ];
  const answersExPart5b = [
    {
      value: "A",
      title: "A move to a new a city",
      name: "question-102",
      id: "question-102-A",
    },
    {
      value: "B",
      title: "A business trip",
      name: "question-102",
      id: "question-102-B",
    },
    {
      value: "C",
      title: "A building tour",
      name: "question-102",
      id: "question-102-C",
    },
    {
      value: "D",
      title: "A meeting with visiting colleagues",
      name: "question-102",
      id: "question-102-D",
    },
  ];
  const answersExPart6 = [
    {
      value: "A",
      title: "A move to a new a city",
      name: "question-131",
      id: "question-131-A",
    },
    {
      value: "B",
      title: "A business trip",
      name: "question-131",
      id: "question-131-B",
    },
    {
      value: "C",
      title: "A building tour",
      name: "question-131",
      id: "question-131-C",
    },
    {
      value: "D",
      title: "A meeting with visiting colleagues",
      name: "question-131",
      id: "question-131-D",
    },
  ];
  const answersExPart6b = [
    {
      value: "A",
      title: "A move to a new a city",
      name: "question-132",
      id: "question-132-A",
    },
    {
      value: "B",
      title: "A business trip",
      name: "question-132",
      id: "question-132-B",
    },
    {
      value: "C",
      title: "A building tour",
      name: "question-132",
      id: "question-132-C",
    },
    {
      value: "D",
      title: "A meeting with visiting colleagues",
      name: "question-132",
      id: "question-132-D",
    },
  ];
  const answersExPart7 = [
    {
      value: "A",
      title: "A move to a new a city",
      name: "question-147",
      id: "question-147-A",
    },
    {
      value: "B",
      title: "A business trip",
      name: "question-147",
      id: "question-147-B",
    },
    {
      value: "C",
      title: "A building tour",
      name: "question-147",
      id: "question-147-C",
    },
    {
      value: "D",
      title: "A meeting with visiting colleagues",
      name: "question-147",
      id: "question-147-D",
    },
  ];
  const answersExPart7b = [
    {
      value: "A",
      title: "A move to a new a city",
      name: "question-148",
      id: "question-148-A",
    },
    {
      value: "B",
      title: "A business trip",
      name: "question-148",
      id: "question-148-B",
    },
    {
      value: "C",
      title: "A building tour",
      name: "question-148",
      id: "question-148-C",
    },
    {
      value: "D",
      title: "A meeting with visiting colleagues",
      name: "question-148",
      id: "question-148-D",
    },
  ];
  const dataTemplatePart1 = [
    {
      id: 1,
      number: 1,
      ques: "",
      imageURL:
        "https://study4.com/media/tez_media1/img/ets_toeic_2022_test_1_1.png",
      answers: [
        {
          number: 1,
          text: "",
          answers: answersExPart1,
          isDone: false,
        },
      ],
    },
    {
      id: 2,
      number: 2,
      ques: "",
      imageURL:
        "https://study4.com/media/tez_media1/img/ets_toeic_2022_test_1_2.png",
      answers: [
        {
          number: 2,
          text: "",
          answers: answersExPart1b,
          isDone: false,
        },
      ],
    },
  ];
  const dataTemplatePart2 = [
    {
      id: 7,
      number: 7,
      ques: "",
      answers: [
        {
          number: 7,
          text: "",
          answers: answersExPart2,
          isDone: false,
        },
      ],
    },
    {
      id: 8,
      number: 8,
      ques: "",
      answers: [
        {
          number: 8,
          text: "",
          answers: answersExPart2b,
          isDone: false,
        },
      ],
    },
  ];
  const dataTemplatePart3 = [
    {
      id: 32,
      number: 32,
      ques: "",
      answers: [
        {
          number: 32,
          text: "Who most likely is the man?",
          answers: answersExPart3,
          isDone: false,
        },
      ],
    },
    {
      id: 33,
      number: 33,
      ques: "",
      answers: [
        {
          number: 33,
          text: "Who most likely is the man?",
          answers: answersExPart3b,
          isDone: false,
        },
      ],
    },
  ];
  const dataTemplatePart4 = [
    {
      id: 71,
      number: 71,
      ques: "",
      answers: [
        {
          number: 71,
          text: "What is the speaker interested in learning more about?",
          answers: answersExPart4,
          isDone: false,
        },
      ],
    },
    {
      id: 72,
      number: 72,
      ques: "",
      answers: [
        {
          number: 72,
          text: "What is the speaker interested in learning more about?",
          answers: answersExPart4b,
          isDone: false,
        },
      ],
    },
  ];
  const dataTemplatePart5 = [
    {
      id: 101,
      number: 101,
      ques: "",
      answers: [
        {
          number: 101,
          text: "Mougey Fine Gifts is known for its large range of _____ goods.",
          answers: answersExPart5,
          isDone: false,
        },
      ],
    },
    {
      id: 102,
      number: 102,
      ques: "",
      answers: [
        {
          number: 102,
          text: "Mougey Fine Gifts is known for its large range of _____ goods.",
          answers: answersExPart5b,
          isDone: false,
        },
      ],
    },
  ];
  const dataTemplatePart6 = [
    {
      id: 131,
      number: 131,
      ques: "To continue providing the highest level of ----- (131) to our corporate tenants, we have scheduled the south lobby restrooms for maintenance this weekend, May 13 and May 14. ----- (132)this time, the restrooms will be out of order, so tenants andtheir guests should instead use the facilities in the northlobby. We ----- (133) for any inconvenience this might cause.-----(134). Denville Property Management Partners",
      answers: [
        {
          number: 131,
          text: "",
          answers: answersExPart6,
          isDone: false,
        },
      ],
    },
    {
      id: 132,
      number: 132,
      ques: "To continue providing the highest level of ----- (132) to our corporate tenants, we have scheduled the south lobby restrooms for maintenance this weekend, May 13 and May 14. ----- (132)this time, the restrooms will be out of order, so tenants andtheir guests should instead use the facilities in the northlobby. We ----- (133) for any inconvenience this might cause.-----(134). Denville Property Management Partners",
      answers: [
        {
          number: 132,
          text: "",
          answers: answersExPart6b,
          isDone: false,
        },
      ],
    },
  ];
  const dataTemplatePart7 = [
    {
      id: 147,
      number: 147,
      ques: "http://www.moonglowairways.com.au Special Announcement by Geoff Clifford, President of Moon Glow Airways As many of you are aware, there was a problem with Pelman Technology, the system that handles our airline reservations. This outage has affected several airlines. It's been a rough week, but the good news is it that it has been repaired, and we are re-setting our system. However, Moon Glow passengers may still face delays for day or two. This most likely will include longer lines at airports. We have added more on-site customer service representatives at airports in all of our destination cities to assist customers with their flights and information. We appreciate your understanding and patience.",
      answers: [
        {
          number: 147,
          text: "What is the purpose of the announcement?",
          answers: answersExPart7,
          isDone: false,
        },
      ],
    },
    {
      id: 148,
      number: 148,
      ques: "http://www.moonglowairways.com.au Special Announcement by Geoff Clifford, President of Moon Glow Airways As many of you are aware, there was a problem with Pelman Technology, the system that handles our airline reservations. This outage has affected several airlines. It's been a rough week, but the good news is it that it has been repaired, and we are re-setting our system. However, Moon Glow passengers may still face delays for day or two. This most likely will include longer lines at airports. We have added more on-site customer service representatives at airports in all of our destination cities to assist customers with their flights and information. We appreciate your understanding and patience.",
      answers: [
        {
          number: 148,
          text: "What is the purpose of the announcement?",
          answers: answersExPart7b,
          isDone: false,
        },
      ],
    },
  ];
  const parts = [
    {
      title: "Part 1",
      id: "partcontent1",
      questions: dataTemplatePart1,
      isTwoCols: false,
      isListening: true,
    },
    {
      title: "Part 2",
      id: "partcontent2",
      questions: dataTemplatePart2,
      isTwoCols: false,
      isListening: true,
    },
    {
      title: "Part 3",
      id: "partcontent3",
      questions: dataTemplatePart3,
      isTwoCols: false,
      isListening: true,
    },
    {
      title: "Part 4",
      id: "partcontent4",
      questions: dataTemplatePart4,
      isTwoCols: false,
      isListening: true,
    },
    {
      title: "Part 5",
      id: "partcontent5",
      questions: dataTemplatePart5,
      isTwoCols: false,
      isListening: false,
    },
    {
      title: "Part 6",
      id: "partcontent6",
      questions: dataTemplatePart6,
      isTwoCols: true,
      isListening: false,
    },
    {
      title: "Part 7",
      id: "partcontent7",
      questions: dataTemplatePart7,
      isTwoCols: true,
      isListening: false,
    },
  ];
  const userResult = [
    { number: 1, result: "A" },
    { number: 2, result: "A" },
    { number: 3, result: "B" },
    { number: 4, result: "B" },
    { number: 5, result: "B" },
    { number: 6, result: "B" },
    { number: 7, result: "B" },
  ];
  const resultDetail = [
    {
      number: 1,
      result: "B",
      transcript:
        "M-Au(A) He's parking a truck.(B) He's lifting some furniture.(C) He's starting an engine.(D) He's driving a car.",
      detail: "M-Cn Bạn muốn một cuộc hẹn buổi sáng hay buổi chiều?",
    },
    {
      number: 2,
      result: "C",
      transcript:
        "W-Br(A) Some curtains have been closed.(B) Some jackets have been laid on a chair.(C) Some people are gathered around a desk.(D) Someone is turning on a lamp.",
      detail: "M-Cn Bạn muốn một cuộc hẹn buổi sáng hay buổi chiều?",
    },
    {
      number: 7,
      result: "B",
      transcript:
        "M-Au: Why was this afternoon's meeting canceled?(A) Room 206, I think.(B) Because the manager is out of the office.(C) Let's review the itinerary for our trip.",
      detail: "M-Au: Tại sao cuộc họp chiều nay đã bị hủy? W-Br:",
    },
    {
      number: 8,
      result: "A",
      transcript:
        "W-Br You use the company fitness center, don't you?(A) Yes, every now and then.(B) Please center the text on the page.(C) I think it fits you well.",
      detail:
        "W-Br Bạn sử dụng trung tâm thể dục của công ty, phải không? M-Cn",
    },
    {
      number: 32,
      result: "D",
      transcript: `W-Br Hi, it's Martina from Accounting. (32, 33) l'd like to reserve the main conference room for a meeting I'll be leading on Friday with colleagues from our New York office.
        M-Cn Sure, that shouldn't be a problem. (33) What time is the meeting?
        W-Br It's from nine to eleven A.M.
        M-Cn OK (33)I'll block off that time slot for you. Do you need any special equipment besides a laptop and projector?
        W-Br No, but (34) I'll need the key so I can go in a little early and set up. Can pick that up on Friday morning?
        M-Cn Absolutely.
        W-Br Xin chào, tôi là Martina từ Bộ phận Kế toán. (32, 33) Tôi muốn dành phòng họp chính cho một cuộc họp mà tôi sẽ phụ trách vào thứ Sáu với các đồng nghiệp từ văn phòng New York của chúng tôi.
        M-Cn Chắc chắn, đó không phải là vấn đề. (33) Cuộc họp diễn ra lúc mấy giờ?
        W-Br Nó từ chín đến mười một giờ sáng.
        M-Cn OK (33) Tôi sẽ khóa khoảng thời gian đó cho bạn. Bạn có cần thiết bị đặc biệt nào ngoài máy tính xách tay và máy chiếu không?
        W-Br Không, nhưng (34) tôi sẽ cần chìa khóa để có thể đến sớm một chút và sắp xếp. Có thể nhận nó vào sáng thứ Sáu không?
        M-Cn Chắc chắn rồi.`,
      detail: "Người phụ nữ đang chuẩn bị cho điều gì?",
    },
    {
      number: 33,
      result: "B",
      transcript: "",
      detail: "Ai có khả năng là người đàn ông?",
    },
    {
      number: 71,
      result: "D",
      transcript: `W-Am Hello, this is Karen Smith. (71) I have an appointment with Dr. Miller for my annual eye exam on Tuesday. (72) Unfortunately, I won't be able to make it. If possible, I'd like to reschedule for later in the week. If Dr. Miller is available in the afternoon, that would work better for me. (73) I also wanted to ask about your warranty for eyeglasses. What exactly does the warranty cover? Thank you, and please call me back at 555-0110.

        W-Am Xin chào, đây là Karen Smith. (71) Tôi có một cuộc hẹn với Tiến sĩ Miller để khám mắt định kỳ hàng năm của tôi vào thứ Ba. (72) Thật không may, tôi sẽ không thể đến được. Nếu có thể, tôi muốn lên lịch lại vào cuối tuần. Nếu bác sĩ Miller có mặt vào buổi chiều, điều đó sẽ tốt hơn cho tôi. (73) Tôi cũng muốn hỏi về bảo hành của các bạn cho kính mắt. Chính xác thì bảo hành bao gồm những gì? Cảm ơn bạn và vui lòng gọi lại cho tôi theo số 555-0110.`,
      detail: "Người nói có khả năng đang gọi đến loại hình doanh nghiệp nào?",
    },
    {
      number: 72,
      result: "B",
      transcript: "",
      detail: "Người nói nói gì về cuộc hẹn của cô ấy?",
    },
    {
      number: 101,
      result: "A",
      transcript: "",
      detail: `<p>Gi&#7843;i th&iacute;ch: C&#7847;n 1 t&iacute;nh t&#7915; &#273;&#7875; b&#7893; sung cho danh t&#7915; &quot;goods&quot;. &#272;&aacute;p &aacute;n &#273;&uacute;ng l&agrave; A.</p>

      <p>D&#7883;ch: Mougey Fine Gifts n&#7893;i ti&#7871;ng v&igrave; c&oacute; nhi&#7873;u lo&#7841;i h&agrave;ng h&oacute;a &#273;&#7883;a ph&#432;&#417;ng.<br>
      T&#7915; v&#7921;ng:<br>
      - be known for: &#273;&#432;&#7907;c bi&#7871;t &#273;&#7871;n/n&#7893;i ti&#7871;ng<br>
      - goods (n): h&agrave;ng h&oacute;a</p>
      
      <p>Mougey Fine Gifts n&#7893;i ti&#7871;ng v&igrave; c&oacute; nhi&#7873;u lo&#7841;i h&agrave;ng h&oacute;a &#273;&#7883;a ph&#432;&#417;ng.</p>`,
    },
    {
      number: 102,
      result: "A",
      transcript: "",
      detail: `<p>Gi&#7843;i th&iacute;ch: D&#7921;a v&agrave;o ngh&#297;a &#273;&#7875; ch&#7885;n. ph&iacute;a sau kho&#7843;ng tr&#7889;ng c&oacute; &quot;and&quot; v&agrave; c&#7909;m danh t&#7915; &quot;surrounding areas&quot; th&igrave; kho&#7843;ng tr&#7889;ng c&#7847;n m&#7897;t danh t&#7915; t&#432;&#417;ng &#273;&#432;&#417;ng. &#7902; &#273;&acirc;y, ch&#7881; c&oacute; &#273;&aacute;p &aacute;n D (city) l&agrave; ph&ugrave; h&#7907;p. <br>
      D&#7883;ch: M&#7913;c thu nh&#7853;p &#273;ang t&#259;ng l&ecirc;n &#7903; th&agrave;nh ph&#7889; v&agrave; c&aacute;c khu v&#7921;c xung quanh.<br>
      T&#7915; v&#7921;ng:<br>
      - income: (n) thu nh&#7853;p<br>
      - rise: (n) t&#259;ng l&ecirc;n</p>
      
      <p>M&#7913;c thu nh&#7853;p &#273;ang t&#259;ng l&ecirc;n &#7903; th&agrave;nh ph&#7889; v&agrave; c&aacute;c khu v&#7921;c xung quanh.</p>`,
    },
    {
      number: 131,
      result: "D",
      transcript: "",
      detail: ``,
    },
    {
      number: 132,
      result: "B",
      transcript: "",
      detail: ``,
    },
    {
      number: 147,
      result: "B",
      transcript: "",
      detail: `Mục đích của thông báo là gì?`,
    },
    {
      number: 148,
      result: "B",
      transcript: "",
      detail: `Theo ông Clifford, hãng hàng không tạm thời tăng điều gì?`,
    },
  ];
  const [listParts, setListParts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://tinhoccaogiaphat.com/tests/full-test/1`, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // console.log(response.data);
        setListParts(response?.data?.data?.parts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(listParts);
  const [listResult, setListResult] = useState(userResult);
  const [tabIndex, setTabIndex] = useState(0);
  const [isTimeup, setIsTimeup] = useState(true);
  const timer = useRef(0);
  const navigate = useNavigate();
  // useEffect(() => {
  //   console.log(111, listResult);
  // }, [listResult]);
  const handleSelectTab = (index) => {
    setTabIndex(index);
  };
  const { slug } = useParams();
  const title = slug?.split("-")?.join(" ")?.toUpperCase();

  const handleClickExit = () => {
    navigate(`/fulltest/${slug}/result`);
  };

  return (
    <Container fluid>
      <div className={styles.heading}>
        <h2>{title}</h2>
        <Button variant="outline-primary" onClick={handleClickExit}>
          Quay về trang kết quả
        </Button>
      </div>
      <div className={styles.testWrapper}>
        <div className={styles.testContent}>
          <Audio />
          <div className={styles.nav}>
            <Tabs selectedIndex={tabIndex} onSelect={(i) => handleSelectTab(i)}>
              <TabList>
                {parts &&
                  parts.length > 0 &&
                  parts.map((item, index) => {
                    return (
                      <Tab key={item.id} className={styles.itemLink}>
                        {item?.title}
                      </Tab>
                    );
                  })}
              </TabList>
              {parts &&
                parts.length > 0 &&
                parts.map((item, index) => {
                  return (
                    <TabPanel key={item.id}>
                      <div className={styles.content}>
                        <QuestionGroup
                          isListening={item?.isListening}
                          data={item?.questions}
                          isTwoCols={item?.isTwoCols}
                          listResult={listResult}
                          onSetListResult={setListResult}
                          isFullTest={true}
                          indexTab={tabIndex}
                          onSelectTab={handleSelectTab}
                          isTimeup={isTimeup}
                          isShowResult={true}
                          resultDetail={resultDetail}
                        />
                      </div>
                    </TabPanel>
                  );
                })}
            </Tabs>
          </div>
        </div>
        <div className={styles.naviWrapper}>
          <div className={styles.naviInner}>
            <div className={styles.navMain}>
              {/* <div>Thời gian còn lại:</div>
              <CountDownTimer onComplete={handleTimeup} timer={timer.current} />
              <Button
                variant="outline-primary"
                size="lg"
                onClick={handleClickSubmit}
              >
                {" "}
                NỘP BÀI
              </Button> */}
              {parts &&
                parts.map((item, index) => {
                  return (
                    <ListPart
                      data={item?.questions}
                      key={index}
                      title={item?.title}
                      listRes={listResult}
                      isShowResult={true}
                      userResult={userResult}
                      resultDetail={resultDetail}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default ResultDetail;
