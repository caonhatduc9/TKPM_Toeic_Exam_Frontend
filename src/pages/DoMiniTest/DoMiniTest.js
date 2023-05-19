import Container from "react-bootstrap/Container";
import "react-tabs/style/react-tabs.css";
import styles from "./DoMiniTest.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import {
  Audio,
  CountDownTimer,
  ListPart,
  QuestionGroup,
} from "../../components";
import axios from "axios";

const DoMiniTest = () => {
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
  const [listResult, setListResult] = useState([]);
  const [isTimeup, setIsTimeup] = useState(false);
  const [questionsPart3, setQuestionsPart3] = useState();
  const [questionsPart4, setQuestionsPart4] = useState();
  const [questionsPart6, setQuestionsPart6] = useState();
  const [questionsPart7, setQuestionsPart7] = useState();

  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const timer = useRef(0);
  const { numpart, titletest } = useParams();
  const titleTest =
    `PART ${numpart.charAt(numpart.length - 1)} - ` +
    titletest?.split("-")?.join(" ")?.toUpperCase();
  const navigate = useNavigate();
  // useEffect(() => {
  //   console.log(111, listResult);
  // }, [listResult]);
  const [listPart, setListPart] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://tinhoccaogiaphat.com/tests/skill-test/part${numPart}/${id}`,
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const res = response?.data?.data[0];
        if (
          res?.parts[0]?.name === "Part 1" ||
          res?.parts[0]?.name === "Part 2" ||
          res?.parts[0]?.name === "Part 3" ||
          res?.parts[0]?.name === "Part 4"
        ) {
          res.parts[0].isListening = true;
          res.parts[0].isTwoCols = false;
        } else {
          res.parts[0].isListening = false;
          res.parts[0].isTwoCols = true;
        }
        setListPart(res);
      })
      .catch((err) => {
        //part1
        // const res = {
        //   id: 1,
        //   name: "ETS TOEIC 2022 TEST 1",
        //   description: "đề thi 2022",
        //   parts: [
        //     {
        //       name: "Part 1",
        //       partParagraphs: [],
        //       partQuestions: [
        //         {
        //           partId: 1,
        //           questions: [
        //             {
        //               id: 4,
        //               content: null,
        //               numQuestion: 1,
        //               correctAnswer: "D",
        //               optionAnswers: [
        //                 {
        //                   id: 13,
        //                   value: "A",
        //                   content: "The passengers are boarding the aircraft.",
        //                 },
        //                 {
        //                   id: 14,
        //                   value: "B",
        //                   content:
        //                     "The flight is departing for the destination.",
        //                 },
        //                 {
        //                   id: 15,
        //                   value: "C",
        //                   content:
        //                     ")The plane has landed at the airport for a time.",
        //                 },
        //                 {
        //                   id: 16,
        //                   value: "D",
        //                   content: "The surface of the plane is damaged.",
        //                 },
        //               ],
        //               assets: [
        //                 {
        //                   type: "IMAGE",
        //                   url: "https://storage.googleapis.com/kslearning/images/418922160-1620725865601-pic1.png",
        //                 },
        //               ],
        //             },
        //             {
        //               id: 5,
        //               content: null,
        //               numQuestion: 2,
        //               correctAnswer: "C",
        //               optionAnswers: [
        //                 {
        //                   id: 17,
        //                   value: "A",
        //                   content: " They’re greeting each other.",
        //                 },
        //                 {
        //                   id: 18,
        //                   value: "B",
        //                   content: "They’re walking beside the lake.",
        //                 },
        //                 {
        //                   id: 19,
        //                   value: "C",
        //                   content: "They’re suntanning on the grass.",
        //                 },
        //                 {
        //                   id: 20,
        //                   value: "D",
        //                   content:
        //                     "They’re carrying backpacks on their shoulders.",
        //                 },
        //               ],
        //               assets: [
        //                 {
        //                   type: "IMAGE",
        //                   url: "https://storage.googleapis.com/kslearning/images/94371017-1620725885110-pic2.png",
        //                 },
        //               ],
        //             },
        //             {
        //               id: 6,
        //               content: null,
        //               numQuestion: 3,
        //               correctAnswer: "A",
        //               optionAnswers: [
        //                 {
        //                   id: 21,
        //                   value: "A",
        //                   content: "Several ships are docked at a pier.",
        //                 },
        //                 {
        //                   id: 22,
        //                   value: "B",
        //                   content: "The liner is passing under the bridge.",
        //                 },
        //                 {
        //                   id: 23,
        //                   value: "C",
        //                   content: "The sailors are lowering the sails.",
        //                 },
        //                 {
        //                   id: 24,
        //                   value: "D",
        //                   content:
        //                     "The motorboat is cruising through the harbor.",
        //                 },
        //               ],
        //               assets: [
        //                 {
        //                   type: "IMAGE",
        //                   url: "https://storage.googleapis.com/kslearning/images/974773515-1620725896104-pic3.png",
        //                 },
        //               ],
        //             },
        //             {
        //               id: 7,
        //               content: null,
        //               numQuestion: 4,
        //               correctAnswer: "B",
        //               optionAnswers: [
        //                 {
        //                   id: 25,
        //                   value: "A",
        //                   content: "A woman is setting the table.",
        //                 },
        //                 {
        //                   id: 26,
        //                   value: "B",
        //                   content: "The restaurant is open for business.",
        //                 },
        //                 {
        //                   id: 27,
        //                   value: "C",
        //                   content: "People are sitting outdoors.",
        //                 },
        //                 {
        //                   id: 28,
        //                   value: "D",
        //                   content: "All the seats are not occupied.",
        //                 },
        //               ],
        //               assets: [
        //                 {
        //                   type: "IMAGE",
        //                   url: "https://storage.googleapis.com/kslearning/images/197646363-1620725907323-pic4.png",
        //                 },
        //               ],
        //             },
        //             {
        //               id: 8,
        //               content: null,
        //               numQuestion: 5,
        //               correctAnswer: "C",
        //               optionAnswers: [
        //                 {
        //                   id: 29,
        //                   value: "A",
        //                   content: "People are waiting for a bus",
        //                 },
        //                 {
        //                   id: 30,
        //                   value: "B",
        //                   content: "People are blocking the entrance.",
        //                 },
        //                 {
        //                   id: 31,
        //                   value: "C",
        //                   content: "People are crossing the street.",
        //                 },
        //                 {
        //                   id: 32,
        //                   value: "D",
        //                   content: "People are standing in a line.",
        //                 },
        //               ],
        //               assets: [
        //                 {
        //                   type: "IMAGE",
        //                   url: "https://storage.googleapis.com/kslearning/images/432573172-1620725920118-pic5.png",
        //                 },
        //               ],
        //             },
        //             {
        //               id: 9,
        //               content: null,
        //               numQuestion: 6,
        //               correctAnswer: "B",
        //               optionAnswers: [
        //                 {
        //                   id: 33,
        //                   value: "A",
        //                   content: "Some products are stacked on the rack.",
        //                 },
        //                 {
        //                   id: 34,
        //                   value: "B",
        //                   content: "A boat is floating on the water.",
        //                 },
        //                 {
        //                   id: 35,
        //                   value: "C",
        //                   content: "Some people are rowing a boat.",
        //                 },
        //                 {
        //                   id: 36,
        //                   value: "D",
        //                   content: "A man is putting on a cap.",
        //                 },
        //                 {
        //                   id: 317,
        //                   value: "B",
        //                   content: " A computer scientist",
        //                 },
        //               ],
        //               assets: [
        //                 {
        //                   type: "IMAGE",
        //                   url: "https://storage.googleapis.com/kslearning/images/402218747-1620725955583-pic6.png",
        //                 },
        //               ],
        //             },
        //           ],
        //         },
        //       ],
        //     },
        //   ],
        // };
        //part4
        // const res = {
        //   id: 1,
        //   name: "ETS TOEIC 2022 TEST 1",
        //   description: "đề thi 2022",
        //   parts: [
        //     {
        //       name: "Part 4",
        //       partParagraphs: [
        //         {
        //           partId: 4,
        //           paragraphs: [
        //             {
        //               content:
        //                 "<p>M: Welcome to Language Today on KXRP Radio. (71) I&rsquo;m Ted Costello, and I&rsquo;ll be your host this hour. For today&rsquo;s show, I&rsquo;m thrilled to be interviewing (72) language specialist Dr. Eric Alfson right here in the studio. (72) Dr. Alfson has recently completed groundbreaking research into child language acquisition in bilingual homes. He has agreed to tell us about the surprising results even before (73) his new book hits stores on August 4. Dr. Alfson, it&rsquo;s a pleasure to welcome you to this program.</p>",
        //               questions: [
        //                 {
        //                   id: 75,
        //                   content: "Who most likely is Ted Costello?",
        //                   numQuestion: 71,
        //                   correctAnswer: "C",
        //                   optionAnswers: [
        //                     {
        //                       id: 256,
        //                       value: "A",
        //                       content: "A newspaper reporter",
        //                     },
        //                     {
        //                       id: 257,
        //                       value: "B",
        //                       content: " A computer scientist",
        //                     },
        //                     {
        //                       id: 258,
        //                       value: "C",
        //                       content: "A radio host",
        //                     },
        //                     {
        //                       id: 259,
        //                       value: "D",
        //                       content: "A research assistant",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 76,
        //                   content: "What does Dr. Alfson specialize in?",
        //                   numQuestion: 72,
        //                   correctAnswer: "A",
        //                   optionAnswers: [
        //                     {
        //                       id: 260,
        //                       value: "A",
        //                       content:
        //                         "Dr. Alfson’s new book will be available.",
        //                     },
        //                     {
        //                       id: 261,
        //                       value: "B",
        //                       content:
        //                         " A new research project will be launched.",
        //                     },
        //                     {
        //                       id: 262,
        //                       value: "C",
        //                       content: "The radio will broadcast an interview.",
        //                     },
        //                     {
        //                       id: 263,
        //                       value: "D",
        //                       content:
        //                         " The results of a study will be announced.",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 77,
        //                   content: "What will happen on August 4?",
        //                   numQuestion: 73,
        //                   correctAnswer: "C",
        //                   optionAnswers: [
        //                     {
        //                       id: 264,
        //                       value: "A",
        //                       content: "Get their programs autographed",
        //                     },
        //                     {
        //                       id: 265,
        //                       value: "B",
        //                       content: "Enjoy light refreshments",
        //                     },
        //                     {
        //                       id: 266,
        //                       value: "C",
        //                       content: "Take photos of performers",
        //                     },
        //                     {
        //                       id: 267,
        //                       value: "D",
        //                       content: "Purchase musical recordings",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //               ],
        //             },
        //             {
        //               content:
        //                 "<p>M: Good afternoon. (98) I&rsquo;d like to take a moment to talk about the upcoming Annual Conference for Healthcare one of the highest in the industry, and it will be a great chance to show off our products to these professionals. (99) I&rsquo;ve given you each a pamphlet that highlights the event&rsquo;s activities and speakers. I hope it will encourage you to attend. (100)And I&rsquo;m planning to reserve a booth for both weekend days. I think this is the best value considering our budget.</p>",
        //               questions: [
        //                 {
        //                   id: 78,
        //                   content: "What caused a performance delay?",
        //                   numQuestion: 74,
        //                   correctAnswer: "C",
        //                   optionAnswers: [
        //                     {
        //                       id: 268,
        //                       value: "A",
        //                       content: "A newspaper reporter",
        //                     },
        //                     {
        //                       id: 269,
        //                       value: "B",
        //                       content: " A computer scientist",
        //                     },
        //                     {
        //                       id: 270,
        //                       value: "C",
        //                       content: "A radio host",
        //                     },
        //                     {
        //                       id: 271,
        //                       value: "D",
        //                       content: "A research assistant",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 79,
        //                   content: "What can listeners do near the entrance?",
        //                   numQuestion: 75,
        //                   correctAnswer: "A",
        //                   optionAnswers: [
        //                     {
        //                       id: 272,
        //                       value: "A",
        //                       content:
        //                         "Dr. Alfson’s new book will be available.",
        //                     },
        //                     {
        //                       id: 273,
        //                       value: "B",
        //                       content:
        //                         " A new research project will be launched.",
        //                     },
        //                     {
        //                       id: 274,
        //                       value: "C",
        //                       content: "The radio will broadcast an interview.",
        //                     },
        //                     {
        //                       id: 275,
        //                       value: "D",
        //                       content:
        //                         " The results of a study will be announced.",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 80,
        //                   content:
        //                     "What can be found on the back of the program?",
        //                   numQuestion: 76,
        //                   correctAnswer: "C",
        //                   optionAnswers: [
        //                     {
        //                       id: 276,
        //                       value: "A",
        //                       content: "Get their programs autographed",
        //                     },
        //                     {
        //                       id: 277,
        //                       value: "B",
        //                       content: "Enjoy light refreshments",
        //                     },
        //                     {
        //                       id: 278,
        //                       value: "C",
        //                       content: "Take photos of performers",
        //                     },
        //                     {
        //                       id: 279,
        //                       value: "D",
        //                       content: "Purchase musical recordings",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //               ],
        //             },
        //             {
        //               content:
        //                 "<p>Good evening, and welcome to the Lucero Theater. (74) Tonight&rsquo;s performance of La Traviata will begin at 7:20 P.M. instead of 7:00 P.M. as some of our singers arrived at the theater late because of the icy roads. We sincerely apologize for the delay, and we thank you for your patience. In the meantime, (75) please visit the table near the main entrance, where our staff is selling professionally produced copies of the soundtrack from the performance. (76) On the back of your programs you will find details of our theater&rsquo;s membership program, which we encourage you to join. Without the generous support from our members, we wouldn&rsquo;t be able to stay in operation.</p> ",
        //               questions: [
        //                 {
        //                   id: 81,
        //                   content: "Who most likely is Ted Costello?",
        //                   numQuestion: 77,
        //                   correctAnswer: "C",
        //                   optionAnswers: [
        //                     {
        //                       id: 280,
        //                       value: "A",
        //                       content: "A newspaper reporter",
        //                     },
        //                     {
        //                       id: 281,
        //                       value: "B",
        //                       content: " A computer scientist",
        //                     },
        //                     {
        //                       id: 282,
        //                       value: "C",
        //                       content: "A radio host",
        //                     },
        //                     {
        //                       id: 283,
        //                       value: "D",
        //                       content: "A research assistant",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 82,
        //                   content: "What does Dr. Alfson specialize in?",
        //                   numQuestion: 78,
        //                   correctAnswer: "A",
        //                   optionAnswers: [
        //                     {
        //                       id: 284,
        //                       value: "A",
        //                       content:
        //                         "Dr. Alfson’s new book will be available.",
        //                     },
        //                     {
        //                       id: 285,
        //                       value: "B",
        //                       content:
        //                         " A new research project will be launched.",
        //                     },
        //                     {
        //                       id: 286,
        //                       value: "C",
        //                       content: "The radio will broadcast an interview.",
        //                     },
        //                     {
        //                       id: 287,
        //                       value: "D",
        //                       content:
        //                         " The results of a study will be announced.",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 83,
        //                   content: "What will happen on August 4?",
        //                   numQuestion: 79,
        //                   correctAnswer: "C",
        //                   optionAnswers: [
        //                     {
        //                       id: 288,
        //                       value: "A",
        //                       content: "Get their programs autographed",
        //                     },
        //                     {
        //                       id: 289,
        //                       value: "B",
        //                       content: "Enjoy light refreshments",
        //                     },
        //                     {
        //                       id: 290,
        //                       value: "C",
        //                       content: "Take photos of performers",
        //                     },
        //                     {
        //                       id: 291,
        //                       value: "D",
        //                       content: "Purchase musical recordings",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //               ],
        //             },
        //             {
        //               content:
        //                 "<p>M: I&rsquo;m glad to see that everyone was able to make it today. Our first order of business, before the presentations, is to offer our sincere appreciation to (77) Dr. Darren Heinz, who was the top donor to the Bright Future Research Foundation. Thanks to his generous contribution, our poverty research team will be able to continue numerous projects. Their work for the past fifteen years has been at the forefront of this field, (78) and this money will allow the development of new initiatives to better assist disadvantaged children and teenagers. We are so pleased that we reached our fundraising goal this year. (79)We hope all of you will be able to attend a celebratory dinner to honor Dr. Heinz and our other supporters at the Eagle Club on November 12.</p>",
        //               questions: [
        //                 {
        //                   id: 84,
        //                   content: "What caused a performance delay?",
        //                   numQuestion: 80,
        //                   correctAnswer: "C",
        //                   optionAnswers: [
        //                     {
        //                       id: 292,
        //                       value: "A",
        //                       content: "A newspaper reporter",
        //                     },
        //                     {
        //                       id: 293,
        //                       value: "B",
        //                       content: " A computer scientist",
        //                     },
        //                     {
        //                       id: 294,
        //                       value: "C",
        //                       content: "A radio host",
        //                     },
        //                     {
        //                       id: 295,
        //                       value: "D",
        //                       content: "A research assistant",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 85,
        //                   content: "What can listeners do near the entrance?",
        //                   numQuestion: 81,
        //                   correctAnswer: "A",
        //                   optionAnswers: [
        //                     {
        //                       id: 296,
        //                       value: "A",
        //                       content:
        //                         "Dr. Alfson’s new book will be available.",
        //                     },
        //                     {
        //                       id: 297,
        //                       value: "B",
        //                       content:
        //                         " A new research project will be launched.",
        //                     },
        //                     {
        //                       id: 298,
        //                       value: "C",
        //                       content: "The radio will broadcast an interview.",
        //                     },
        //                     {
        //                       id: 299,
        //                       value: "D",
        //                       content:
        //                         " The results of a study will be announced.",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 86,
        //                   content:
        //                     "What can be found on the back of the program?",
        //                   numQuestion: 82,
        //                   correctAnswer: "C",
        //                   optionAnswers: [
        //                     {
        //                       id: 300,
        //                       value: "A",
        //                       content: "Get their programs autographed",
        //                     },
        //                     {
        //                       id: 301,
        //                       value: "B",
        //                       content: "Enjoy light refreshments",
        //                     },
        //                     {
        //                       id: 302,
        //                       value: "C",
        //                       content: "Take photos of performers",
        //                     },
        //                     {
        //                       id: 303,
        //                       value: "D",
        //                       content: "Purchase musical recordings",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //               ],
        //             },
        //             {
        //               content:
        //                 "<p>W: Hi. This is Deidre Elliot (80) calling with a message for the general manager. I purchased a dryer from your store earlier this week, (81) and I wanted to tell you how pleased I was with your delivery person, Ivan Podolski. He arrived as scheduled and set up the dryer quickly. He was also careful to clean up all of the packaging before he left. I had not realized how many steps were involved in the set up, so I really appreciated his work. (82)I will certainly be recommending you to my friends and will return myself for future purchases. Thank you for the excellent customer service I received.</p>",
        //               questions: [
        //                 {
        //                   id: 87,
        //                   content: "Who most likely is Ted Costello?",
        //                   numQuestion: 83,
        //                   correctAnswer: "C",
        //                   optionAnswers: [
        //                     {
        //                       id: 304,
        //                       value: "A",
        //                       content: "A newspaper reporter",
        //                     },
        //                     {
        //                       id: 305,
        //                       value: "B",
        //                       content: " A computer scientist",
        //                     },
        //                     {
        //                       id: 306,
        //                       value: "C",
        //                       content: "A radio host",
        //                     },
        //                     {
        //                       id: 307,
        //                       value: "D",
        //                       content: "A research assistant",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 88,
        //                   content: "What does Dr. Alfson specialize in?",
        //                   numQuestion: 84,
        //                   correctAnswer: "A",
        //                   optionAnswers: [
        //                     {
        //                       id: 308,
        //                       value: "A",
        //                       content:
        //                         "Dr. Alfson’s new book will be available.",
        //                     },
        //                     {
        //                       id: 309,
        //                       value: "B",
        //                       content:
        //                         " A new research project will be launched.",
        //                     },
        //                     {
        //                       id: 310,
        //                       value: "C",
        //                       content: "The radio will broadcast an interview.",
        //                     },
        //                     {
        //                       id: 311,
        //                       value: "D",
        //                       content:
        //                         " The results of a study will be announced.",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 89,
        //                   content: "What will happen on August 4?",
        //                   numQuestion: 85,
        //                   correctAnswer: "C",
        //                   optionAnswers: [
        //                     {
        //                       id: 312,
        //                       value: "A",
        //                       content: "Get their programs autographed",
        //                     },
        //                     {
        //                       id: 313,
        //                       value: "B",
        //                       content: "Enjoy light refreshments",
        //                     },
        //                     {
        //                       id: 314,
        //                       value: "C",
        //                       content: "Take photos of performers",
        //                     },
        //                     {
        //                       id: 315,
        //                       value: "D",
        //                       content: "Purchase musical recordings",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //               ],
        //             },
        //             {
        //               content:
        //                 "<p>M: Researchers at the Minnesota Sleep Clinic are recruiting volunteers to participate in (83) the largest-ever study about the effects of caffeine on sleep. Dr. Wendy Senequa, lead researcher for the project, said that (84) participants will spend seven days at the clinic having their sleep patterns monitored and recorded. They will be required to consume varying amounts of caffeine over the test period and (85) keep a detailed journal. The study is due to start in two months, so interested parties should visit www.sleepclinic.net to complete the application form and health survey before November 15.</p>",
        //               questions: [
        //                 {
        //                   id: 90,
        //                   content: "What caused a performance delay?",
        //                   numQuestion: 86,
        //                   correctAnswer: "C",
        //                   optionAnswers: [
        //                     {
        //                       id: 316,
        //                       value: "A",
        //                       content: "A newspaper reporter",
        //                     },
        //                     {
        //                       id: 318,
        //                       value: "C",
        //                       content: "A radio host",
        //                     },
        //                     {
        //                       id: 319,
        //                       value: "D",
        //                       content: "A research assistant",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 91,
        //                   content: "What can listeners do near the entrance?",
        //                   numQuestion: 87,
        //                   correctAnswer: "A",
        //                   optionAnswers: [
        //                     {
        //                       id: 320,
        //                       value: "A",
        //                       content:
        //                         "Dr. Alfson’s new book will be available.",
        //                     },
        //                     {
        //                       id: 321,
        //                       value: "B",
        //                       content:
        //                         " A new research project will be launched.",
        //                     },
        //                     {
        //                       id: 322,
        //                       value: "C",
        //                       content: "The radio will broadcast an interview.",
        //                     },
        //                     {
        //                       id: 323,
        //                       value: "D",
        //                       content:
        //                         " The results of a study will be announced.",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 92,
        //                   content:
        //                     "What can be found on the back of the program?",
        //                   numQuestion: 88,
        //                   correctAnswer: "C",
        //                   optionAnswers: [
        //                     {
        //                       id: 324,
        //                       value: "A",
        //                       content: "Get their programs autographed",
        //                     },
        //                     {
        //                       id: 325,
        //                       value: "B",
        //                       content: "Enjoy light refreshments",
        //                     },
        //                     {
        //                       id: 326,
        //                       value: "C",
        //                       content: "Take photos of performers",
        //                     },
        //                     {
        //                       id: 327,
        //                       value: "D",
        //                       content: "Purchase musical recordings",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //               ],
        //             },
        //             {
        //               content:
        //                 "<p>W: Hi. This is Erin Gibbs calling for Clifford Johnston. I&rsquo;m the one who visited your home earlier this week (86)to discuss the renovation project for your basement. I checked with our supplier, and it will be no problem to get wood paneling that matches the type of wood used in your living room. However, you said that you needed everything finished by August 17. Unfortunately, I just found out that a few of our crew members will be using vacation time in August, (87) so we&rsquo;ll be short-staffed. If you would be able to have the work done at the end of August instead, (88)1 could give you a lower price. Please call me back at 555-4175 to let me know what you think. Thank you.</p>",
        //               questions: [
        //                 {
        //                   id: 93,
        //                   content: "Who most likely is Ted Costello?",
        //                   numQuestion: 89,
        //                   correctAnswer: "C",
        //                   optionAnswers: [
        //                     {
        //                       id: 328,
        //                       value: "A",
        //                       content: "A newspaper reporter",
        //                     },
        //                     {
        //                       id: 329,
        //                       value: "B",
        //                       content: " A computer scientist",
        //                     },
        //                     {
        //                       id: 330,
        //                       value: "C",
        //                       content: "A radio host",
        //                     },
        //                     {
        //                       id: 331,
        //                       value: "D",
        //                       content: "A research assistant",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 94,
        //                   content: "What does Dr. Alfson specialize in?",
        //                   numQuestion: 90,
        //                   correctAnswer: "A",
        //                   optionAnswers: [
        //                     {
        //                       id: 332,
        //                       value: "A",
        //                       content:
        //                         "Dr. Alfson’s new book will be available.",
        //                     },
        //                     {
        //                       id: 333,
        //                       value: "B",
        //                       content:
        //                         " A new research project will be launched.",
        //                     },
        //                     {
        //                       id: 334,
        //                       value: "C",
        //                       content: "The radio will broadcast an interview.",
        //                     },
        //                     {
        //                       id: 335,
        //                       value: "D",
        //                       content:
        //                         " The results of a study will be announced.",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 95,
        //                   content: "What will happen on August 4?",
        //                   numQuestion: 91,
        //                   correctAnswer: "C",
        //                   optionAnswers: [
        //                     {
        //                       id: 336,
        //                       value: "A",
        //                       content: "Get their programs autographed",
        //                     },
        //                     {
        //                       id: 337,
        //                       value: "B",
        //                       content: "Enjoy light refreshments",
        //                     },
        //                     {
        //                       id: 338,
        //                       value: "C",
        //                       content: "Take photos of performers",
        //                     },
        //                     {
        //                       id: 339,
        //                       value: "D",
        //                       content: "Purchase musical recordings",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //               ],
        //             },
        //             {
        //               content:
        //                 "<p>M: (89) It&rsquo;s great to see so much enthusiasm for your first day here at Blane Advertising. We&rsquo;re glad you&rsquo;ll be a part of our team. (90) I&rsquo;m sure you&rsquo;re wondering exactly what your work will involve. Let&rsquo;s get to that. Each month, we create several marketing campaigns for newspapers, magazines, Web sites, and television. Your role will be creating custom photographs to accompany these campaigns. You will work on projects individually and then pass them on to Gary Eldon, our project lead. To make sure everyone is following the same criteria, we will start with some training. (91) I&rsquo;ll show you a brief video that highlights some of our best work, and then we&rsquo;ll discuss it together.</p>",
        //               questions: [
        //                 {
        //                   id: 96,
        //                   content: "What caused a performance delay?",
        //                   numQuestion: 92,
        //                   correctAnswer: "C",
        //                   optionAnswers: [
        //                     {
        //                       id: 340,
        //                       value: "A",
        //                       content: "A newspaper reporter",
        //                     },
        //                     {
        //                       id: 341,
        //                       value: "B",
        //                       content: " A computer scientist",
        //                     },
        //                     {
        //                       id: 342,
        //                       value: "C",
        //                       content: "A radio host",
        //                     },
        //                     {
        //                       id: 343,
        //                       value: "D",
        //                       content: "A research assistant",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 97,
        //                   content: "What can listeners do near the entrance?",
        //                   numQuestion: 93,
        //                   correctAnswer: "A",
        //                   optionAnswers: [
        //                     {
        //                       id: 344,
        //                       value: "A",
        //                       content:
        //                         "Dr. Alfson’s new book will be available.",
        //                     },
        //                     {
        //                       id: 345,
        //                       value: "B",
        //                       content:
        //                         " A new research project will be launched.",
        //                     },
        //                     {
        //                       id: 346,
        //                       value: "C",
        //                       content: "The radio will broadcast an interview.",
        //                     },
        //                     {
        //                       id: 347,
        //                       value: "D",
        //                       content:
        //                         " The results of a study will be announced.",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 98,
        //                   content:
        //                     "What can be found on the back of the program?",
        //                   numQuestion: 94,
        //                   correctAnswer: "C",
        //                   optionAnswers: [
        //                     {
        //                       id: 348,
        //                       value: "A",
        //                       content: "Get their programs autographed",
        //                     },
        //                     {
        //                       id: 349,
        //                       value: "B",
        //                       content: "Enjoy light refreshments",
        //                     },
        //                     {
        //                       id: 350,
        //                       value: "C",
        //                       content: "Take photos of performers",
        //                     },
        //                     {
        //                       id: 351,
        //                       value: "D",
        //                       content: "Purchase musical recordings",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //               ],
        //             },
        //             {
        //               content:
        //                 "<p>W: (93) Enjoy dining at its finest with a visit to Trentini&rsquo;s, located across the street from Lindale Apartments. Trentini&rsquo;s features authentic Italian food with a menu designed by chefs trained in the heart of Italy. (92)To celebrate our official opening on Saturday, April 5, we&rsquo;ll be providing free appetizers and half-price cocktails. Stay for a full dinner and discover delicious dishes cooked to perfection. (94) Have you been searching for your next favorite restaurant? Here&rsquo;s the answer. (94) I guarantee you won&rsquo;t be disappointed.</p>",
        //               questions: [
        //                 {
        //                   id: 99,
        //                   content: "Who most likely is Ted Costello?",
        //                   numQuestion: 95,
        //                   correctAnswer: "C",
        //                   optionAnswers: [
        //                     {
        //                       id: 352,
        //                       value: "A",
        //                       content:
        //                         "Dr. Alfson’s new book will be available.",
        //                     },
        //                     {
        //                       id: 353,
        //                       value: "B",
        //                       content:
        //                         " A new research project will be launched.",
        //                     },
        //                     {
        //                       id: 354,
        //                       value: "C",
        //                       content: "The radio will broadcast an interview.",
        //                     },
        //                     {
        //                       id: 355,
        //                       value: "D",
        //                       content:
        //                         " The results of a study will be announced.",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 100,
        //                   content: "What does Dr. Alfson specialize in?",
        //                   numQuestion: 96,
        //                   correctAnswer: "A",
        //                   optionAnswers: [
        //                     {
        //                       id: 356,
        //                       value: "A",
        //                       content: "Get their programs autographed",
        //                     },
        //                     {
        //                       id: 357,
        //                       value: "B",
        //                       content: "Enjoy light refreshments",
        //                     },
        //                     {
        //                       id: 358,
        //                       value: "C",
        //                       content: "Take photos of performers",
        //                     },
        //                     {
        //                       id: 359,
        //                       value: "D",
        //                       content: "Purchase musical recordings",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 101,
        //                   content: "What will happen on August 4?",
        //                   numQuestion: 97,
        //                   correctAnswer: "C",
        //                   optionAnswers: [
        //                     {
        //                       id: 360,
        //                       value: "A",
        //                       content: "A newspaper reporter",
        //                     },
        //                     {
        //                       id: 361,
        //                       value: "B",
        //                       content: " A computer scientist",
        //                     },
        //                     {
        //                       id: 362,
        //                       value: "C",
        //                       content: "A radio host",
        //                     },
        //                     {
        //                       id: 363,
        //                       value: "D",
        //                       content: "A research assistant",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //               ],
        //             },
        //             {
        //               content:
        //                 "<p>W: (93) Enjoy dining at its finest with a visit to Trentini&rsquo;s, located across the street from Lindale Apartments. Trentini&rsquo;s features authentic Italian food with a menu designed by chefs trained in the heart of Italy. (92)To celebrate our official opening on Saturday, April 5, we&rsquo;ll be providing free appetizers and half-price cocktails. Stay for a full dinner and discover delicious dishes cooked to perfection. (94) Have you been searching for your next favorite restaurant? Here&rsquo;s the answer. (94) I guarantee you won&rsquo;t be disappointed.</p>",
        //               questions: [
        //                 {
        //                   id: 102,
        //                   content: "What caused a performance delay?",
        //                   numQuestion: 98,
        //                   correctAnswer: "C",
        //                   optionAnswers: [
        //                     {
        //                       id: 364,
        //                       value: "A",
        //                       content:
        //                         "Dr. Alfson’s new book will be available.",
        //                     },
        //                     {
        //                       id: 365,
        //                       value: "B",
        //                       content:
        //                         " A new research project will be launched.",
        //                     },
        //                     {
        //                       id: 366,
        //                       value: "C",
        //                       content: "The radio will broadcast an interview.",
        //                     },
        //                     {
        //                       id: 367,
        //                       value: "D",
        //                       content:
        //                         " The results of a study will be announced.",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 103,
        //                   content: "What can listeners do near the entrance?",
        //                   numQuestion: 99,
        //                   correctAnswer: "A",
        //                   optionAnswers: [
        //                     {
        //                       id: 368,
        //                       value: "A",
        //                       content: "Get their programs autographed",
        //                     },
        //                     {
        //                       id: 369,
        //                       value: "B",
        //                       content: "Enjoy light refreshments",
        //                     },
        //                     {
        //                       id: 370,
        //                       value: "C",
        //                       content: "Take photos of performers",
        //                     },
        //                     {
        //                       id: 371,
        //                       value: "D",
        //                       content: "Purchase musical recordings",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 104,
        //                   content:
        //                     "What can be found on the back of the program?",
        //                   numQuestion: 100,
        //                   correctAnswer: "D",
        //                   optionAnswers: [
        //                     {
        //                       id: 372,
        //                       value: "A",
        //                       content: "Get their programs autographed",
        //                     },
        //                     {
        //                       id: 373,
        //                       value: "B",
        //                       content: "Enjoy light refreshments",
        //                     },
        //                     {
        //                       id: 374,
        //                       value: "C",
        //                       content: "Take photos of performers",
        //                     },
        //                     {
        //                       id: 375,
        //                       value: "D",
        //                       content: "Purchase musical recordings",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //               ],
        //             },
        //           ],
        //         },
        //       ],
        //       partQuestions: [],
        //     },
        //   ],
        // };
        //part 5
        // const res = {
        //   id: 1,
        //   name: "ETS TOEIC 2022 TEST 1",
        //   description: "đề thi 2022",
        //   parts: [
        //     {
        //       name: "Part 5",
        //       partParagraphs: [],
        //       partQuestions: [
        //         {
        //           partId: 5,
        //           questions: [
        //             {
        //               id: 105,
        //               content:
        //                 "Relative housing values have dropped more than 10 percent from ____ peak in the first half of the year",
        //               numQuestion: 101,
        //               correctAnswer: "A",
        //               optionAnswers: [
        //                 {
        //                   id: 376,
        //                   value: "A",
        //                   content: "they",
        //                 },
        //                 {
        //                   id: 377,
        //                   value: "B",
        //                   content: "their",
        //                 },
        //                 {
        //                   id: 378,
        //                   value: "C",
        //                   content: "them",
        //                 },
        //                 {
        //                   id: 379,
        //                   value: "D",
        //                   content: "theirs",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 106,
        //               content:
        //                 "The botanical garden____ on the south side of the island and can easily be found on any map.",
        //               numQuestion: 102,
        //               correctAnswer: "A",
        //               optionAnswers: [
        //                 {
        //                   id: 380,
        //                   value: "A",
        //                   content: "is located",
        //                 },
        //                 {
        //                   id: 381,
        //                   value: "B",
        //                   content: "locates",
        //                 },
        //                 {
        //                   id: 382,
        //                   value: "C",
        //                   content: "locating",
        //                 },
        //                 {
        //                   id: 383,
        //                   value: "D",
        //                   content: "was locating",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 107,
        //               content:
        //                 "A special luncheon for the advertising team will be____ in the main banquet hall of the Phalya Hotel.",
        //               numQuestion: 103,
        //               correctAnswer: "D",
        //               optionAnswers: [
        //                 {
        //                   id: 384,
        //                   value: "A",
        //                   content: "staged",
        //                 },
        //                 {
        //                   id: 385,
        //                   value: "B",
        //                   content: "referred",
        //                 },
        //                 {
        //                   id: 386,
        //                   value: "C",
        //                   content: "held",
        //                 },
        //                 {
        //                   id: 387,
        //                   value: "D",
        //                   content: "went",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 108,
        //               content:
        //                 "Because it is taking____ long for the staff to get used to the software, the office manager is planning to organize a training workshop.",
        //               numQuestion: 104,
        //               correctAnswer: "C",
        //               optionAnswers: [
        //                 {
        //                   id: 388,
        //                   value: "A",
        //                   content: "immediately",
        //                 },
        //                 {
        //                   id: 389,
        //                   value: "B",
        //                   content: "unexpectedly",
        //                 },
        //                 {
        //                   id: 390,
        //                   value: "C",
        //                   content: "exactly",
        //                 },
        //                 {
        //                   id: 391,
        //                   value: "D",
        //                   content: "attentively",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 109,
        //               content:
        //                 "____ newly-hired employees on the management level should attend the training workshop about the company values.",
        //               numQuestion: 105,
        //               correctAnswer: "C",
        //               optionAnswers: [
        //                 {
        //                   id: 392,
        //                   value: "A",
        //                   content: "Neither",
        //                 },
        //                 {
        //                   id: 393,
        //                   value: "B",
        //                   content: "Every",
        //                 },
        //                 {
        //                   id: 394,
        //                   value: "C",
        //                   content: "Each",
        //                 },
        //                 {
        //                   id: 395,
        //                   value: "D",
        //                   content: "All",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 110,
        //               content:
        //                 "Masara Bankole, an award-winning____ at the Toronto Star, has agreed to host radio show for charity fundraising.",
        //               numQuestion: 106,
        //               correctAnswer: "C",
        //               optionAnswers: [
        //                 {
        //                   id: 396,
        //                   value: "A",
        //                   content: "journal",
        //                 },
        //                 {
        //                   id: 397,
        //                   value: "B",
        //                   content: "journal",
        //                 },
        //                 {
        //                   id: 398,
        //                   value: "C",
        //                   content: "journalism",
        //                 },
        //                 {
        //                   id: 399,
        //                   value: "D",
        //                   content: "journalistic",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 111,
        //               content:
        //                 "Although a sufficient number of rooms in the company housing were offered, several attendees chose to stay at a ____hotel instead.",
        //               numQuestion: 107,
        //               correctAnswer: "C",
        //               optionAnswers: [
        //                 {
        //                   id: 400,
        //                   value: "A",
        //                   content: "next",
        //                 },
        //                 {
        //                   id: 401,
        //                   value: "B",
        //                   content: "closest",
        //                 },
        //                 {
        //                   id: 402,
        //                   value: "C",
        //                   content: "nearby",
        //                 },
        //                 {
        //                   id: 403,
        //                   value: "D",
        //                   content: "brief",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 112,
        //               content:
        //                 "Halloween costumes of the faculty members are welcome but entirely____.",
        //               numQuestion: 108,
        //               correctAnswer: "A",
        //               optionAnswers: [
        //                 {
        //                   id: 404,
        //                   value: "A",
        //                   content: "A newspaper reporter",
        //                 },
        //                 {
        //                   id: 405,
        //                   value: "B",
        //                   content: " A computer scientist",
        //                 },
        //                 {
        //                   id: 406,
        //                   value: "C",
        //                   content: "A radio host",
        //                 },
        //                 {
        //                   id: 407,
        //                   value: "D",
        //                   content: "A research assistant",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 113,
        //               content:
        //                 "Saitama Vehicles Company is expected to reach this year’s sales goal by ____ record sales numbers in the third quarter of the year.",
        //               numQuestion: 109,
        //               correctAnswer: "A",
        //               optionAnswers: [
        //                 {
        //                   id: 408,
        //                   value: "A",
        //                   content: "Dr. Alfson’s new book will be available.",
        //                 },
        //                 {
        //                   id: 409,
        //                   value: "B",
        //                   content: " A new research project will be launched.",
        //                 },
        //                 {
        //                   id: 410,
        //                   value: "C",
        //                   content: "The radio will broadcast an interview.",
        //                 },
        //                 {
        //                   id: 411,
        //                   value: "D",
        //                   content: " The results of a study will be announced.",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 114,
        //               content:
        //                 "Image Horizon Corporation announced this morning that its chief financial officer, Julia Park, will____ Maholia Green as chief executive officer on March 22.",
        //               numQuestion: 110,
        //               correctAnswer: "B",
        //               optionAnswers: [
        //                 {
        //                   id: 412,
        //                   value: "A",
        //                   content: "Get their programs autographed",
        //                 },
        //                 {
        //                   id: 413,
        //                   value: "B",
        //                   content: "Enjoy light refreshments",
        //                 },
        //                 {
        //                   id: 414,
        //                   value: "C",
        //                   content: "Take photos of performers",
        //                 },
        //                 {
        //                   id: 415,
        //                   value: "D",
        //                   content: "Purchase musical recordings",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 115,
        //               content:
        //                 "Montaz Motorcycles wants to make the partnership between the product and research department ____.",
        //               numQuestion: 111,
        //               correctAnswer: "B",
        //               optionAnswers: [
        //                 {
        //                   id: 416,
        //                   value: "A",
        //                   content: "A newspaper reporter",
        //                 },
        //                 {
        //                   id: 417,
        //                   value: "B",
        //                   content: " A computer scientist",
        //                 },
        //                 {
        //                   id: 418,
        //                   value: "C",
        //                   content: "A radio host",
        //                 },
        //                 {
        //                   id: 419,
        //                   value: "D",
        //                   content: "A research assistant",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 116,
        //               content:
        //                 "The display in the Raymond Art Gallery will feature a number of____ creative art works by promising contemporary artists.",
        //               numQuestion: 112,
        //               correctAnswer: "D",
        //               optionAnswers: [
        //                 {
        //                   id: 420,
        //                   value: "A",
        //                   content: "Dr. Alfson’s new book will be available.",
        //                 },
        //                 {
        //                   id: 421,
        //                   value: "B",
        //                   content: " A new research project will be launched.",
        //                 },
        //                 {
        //                   id: 422,
        //                   value: "C",
        //                   content: "The radio will broadcast an interview.",
        //                 },
        //                 {
        //                   id: 423,
        //                   value: "D",
        //                   content: " The results of a study will be announced.",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 117,
        //               content:
        //                 "Whether the tour members take a sightseeing cruise on the waterway ____ spend the day visiting the museum, they will be relaxed and comfortable.",
        //               numQuestion: 113,
        //               correctAnswer: "A",
        //               optionAnswers: [
        //                 {
        //                   id: 424,
        //                   value: "A",
        //                   content: "Get their programs autographed",
        //                 },
        //                 {
        //                   id: 425,
        //                   value: "B",
        //                   content: "Enjoy light refreshments",
        //                 },
        //                 {
        //                   id: 426,
        //                   value: "C",
        //                   content: "Take photos of performers",
        //                 },
        //                 {
        //                   id: 427,
        //                   value: "D",
        //                   content: "Purchase musical recordings",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 118,
        //               content:
        //                 "The new innovative diesel engine works____ than the other competitive engines of other companies.",
        //               numQuestion: 114,
        //               correctAnswer: "A",
        //               optionAnswers: [
        //                 {
        //                   id: 428,
        //                   value: "A",
        //                   content: "A newspaper reporter",
        //                 },
        //                 {
        //                   id: 429,
        //                   value: "B",
        //                   content: " A computer scientist",
        //                 },
        //                 {
        //                   id: 430,
        //                   value: "C",
        //                   content: "A radio host",
        //                 },
        //                 {
        //                   id: 431,
        //                   value: "D",
        //                   content: "A research assistant",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 119,
        //               content:
        //                 "The proposed service center would provide additional services _______ Kovac Industry customers in the region.",
        //               numQuestion: 115,
        //               correctAnswer: "A",
        //               optionAnswers: [
        //                 {
        //                   id: 432,
        //                   value: "A",
        //                   content: "Dr. Alfson’s new book will be available.",
        //                 },
        //                 {
        //                   id: 433,
        //                   value: "B",
        //                   content: " A new research project will be launched.",
        //                 },
        //                 {
        //                   id: 434,
        //                   value: "C",
        //                   content: "The radio will broadcast an interview.",
        //                 },
        //                 {
        //                   id: 435,
        //                   value: "D",
        //                   content: " The results of a study will be announced.",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 120,
        //               content:
        //                 "The Gift Boy company has a system to automatically send____ of every online order by e-mail.",
        //               numQuestion: 116,
        //               correctAnswer: "A",
        //               optionAnswers: [
        //                 {
        //                   id: 436,
        //                   value: "A",
        //                   content: "Get their programs autographed",
        //                 },
        //                 {
        //                   id: 437,
        //                   value: "B",
        //                   content: "Enjoy light refreshments",
        //                 },
        //                 {
        //                   id: 438,
        //                   value: "C",
        //                   content: "Take photos of performers",
        //                 },
        //                 {
        //                   id: 439,
        //                   value: "D",
        //                   content: "Purchase musical recordings",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 121,
        //               content:
        //                 "Reed-Winton Machines____ announced that its researchers are in the final stages of developing a revolutionary new natural gas-powered engine.",
        //               numQuestion: 117,
        //               correctAnswer: "A",
        //               optionAnswers: [
        //                 {
        //                   id: 440,
        //                   value: "A",
        //                   content: "A newspaper reporter",
        //                 },
        //                 {
        //                   id: 441,
        //                   value: "B",
        //                   content: " A computer scientist",
        //                 },
        //                 {
        //                   id: 442,
        //                   value: "C",
        //                   content: "A radio host",
        //                 },
        //                 {
        //                   id: 443,
        //                   value: "D",
        //                   content: "A research assistant",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 122,
        //               content:
        //                 "Guests who are interested in tomorrow’s ____ to Ko Kret Island may join the tour group by signing up at the reception desk.",
        //               numQuestion: 118,
        //               correctAnswer: "A",
        //               optionAnswers: [
        //                 {
        //                   id: 444,
        //                   value: "A",
        //                   content: "Dr. Alfson’s new book will be available.",
        //                 },
        //                 {
        //                   id: 445,
        //                   value: "B",
        //                   content: " A new research project will be launched.",
        //                 },
        //                 {
        //                   id: 446,
        //                   value: "C",
        //                   content: "The radio will broadcast an interview.",
        //                 },
        //                 {
        //                   id: 447,
        //                   value: "D",
        //                   content: " The results of a study will be announced.",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 123,
        //               content:
        //                 "Of all the customers____ responded to the survey, 80 percent usually purchase industrial products online.",
        //               numQuestion: 119,
        //               correctAnswer: "B",
        //               optionAnswers: [
        //                 {
        //                   id: 448,
        //                   value: "A",
        //                   content: "Get their programs autographed",
        //                 },
        //                 {
        //                   id: 449,
        //                   value: "B",
        //                   content: "Enjoy light refreshments",
        //                 },
        //                 {
        //                   id: 450,
        //                   value: "C",
        //                   content: "Take photos of performers",
        //                 },
        //                 {
        //                   id: 451,
        //                   value: "D",
        //                   content: "Purchase musical recordings",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 124,
        //               content:
        //                 "The Library of the National Assembly is ____ to all members of the public, but books cannot be checked out.",
        //               numQuestion: 120,
        //               correctAnswer: "C",
        //               optionAnswers: [
        //                 {
        //                   id: 452,
        //                   value: "A",
        //                   content: "A newspaper reporter",
        //                 },
        //                 {
        //                   id: 453,
        //                   value: "B",
        //                   content: " A computer scientist",
        //                 },
        //                 {
        //                   id: 454,
        //                   value: "C",
        //                   content: "A radio host",
        //                 },
        //                 {
        //                   id: 455,
        //                   value: "D",
        //                   content: "A research assistant",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 125,
        //               content:
        //                 "The recruiter in charge of the vacancy will examine the applications and contact the candidates____ the next five working days",
        //               numQuestion: 121,
        //               correctAnswer: "B",
        //               optionAnswers: [
        //                 {
        //                   id: 456,
        //                   value: "A",
        //                   content: "Dr. Alfson’s new book will be available.",
        //                 },
        //                 {
        //                   id: 457,
        //                   value: "B",
        //                   content: " A new research project will be launched.",
        //                 },
        //                 {
        //                   id: 458,
        //                   value: "C",
        //                   content: "The radio will broadcast an interview.",
        //                 },
        //                 {
        //                   id: 459,
        //                   value: "D",
        //                   content: " The results of a study will be announced.",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 126,
        //               content:
        //                 "Due to____ weather conditions, all ships scheduled to depart from Port Bremerhaven have been delayed.",
        //               numQuestion: 122,
        //               correctAnswer: "B",
        //               optionAnswers: [
        //                 {
        //                   id: 460,
        //                   value: "A",
        //                   content: "Get their programs autographed",
        //                 },
        //                 {
        //                   id: 461,
        //                   value: "B",
        //                   content: "Enjoy light refreshments",
        //                 },
        //                 {
        //                   id: 462,
        //                   value: "C",
        //                   content: "Take photos of performers",
        //                 },
        //                 {
        //                   id: 463,
        //                   value: "D",
        //                   content: "Purchase musical recordings",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 127,
        //               content:
        //                 "In the last decade, there has been____ little medical research achievement regarding the factors that can affect human memory.",
        //               numQuestion: 123,
        //               correctAnswer: "C",
        //               optionAnswers: [
        //                 {
        //                   id: 464,
        //                   value: "A",
        //                   content: "A newspaper reporter",
        //                 },
        //                 {
        //                   id: 465,
        //                   value: "B",
        //                   content: " A computer scientist",
        //                 },
        //                 {
        //                   id: 466,
        //                   value: "C",
        //                   content: "A radio host",
        //                 },
        //                 {
        //                   id: 467,
        //                   value: "D",
        //                   content: "A research assistant",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 128,
        //               content:
        //                 "The proper____ of steps must be followed to ensure that the television is mounted on the wall securely.",
        //               numQuestion: 124,
        //               correctAnswer: "C",
        //               optionAnswers: [
        //                 {
        //                   id: 468,
        //                   value: "A",
        //                   content: "Dr. Alfson’s new book will be available.",
        //                 },
        //                 {
        //                   id: 469,
        //                   value: "B",
        //                   content: " A new research project will be launched.",
        //                 },
        //                 {
        //                   id: 470,
        //                   value: "C",
        //                   content: "The radio will broadcast an interview.",
        //                 },
        //                 {
        //                   id: 471,
        //                   value: "D",
        //                   content: " The results of a study will be announced.",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 129,
        //               content:
        //                 "Mr. Fernandez called to ask if his Monday morning meeting could be postponed____ later in the week.",
        //               numQuestion: 125,
        //               correctAnswer: "D",
        //               optionAnswers: [
        //                 {
        //                   id: 472,
        //                   value: "A",
        //                   content: "Get their programs autographed",
        //                 },
        //                 {
        //                   id: 473,
        //                   value: "B",
        //                   content: "Enjoy light refreshments",
        //                 },
        //                 {
        //                   id: 474,
        //                   value: "C",
        //                   content: "Take photos of performers",
        //                 },
        //                 {
        //                   id: 475,
        //                   value: "D",
        //                   content: "Purchase musical recordings",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 130,
        //               content:
        //                 "The Delain Technology is aggressively seeking seasoned computer programmers with____ skills that enable them to solve the clients’ most demanding security needs.",
        //               numQuestion: 126,
        //               correctAnswer: "C",
        //               optionAnswers: [
        //                 {
        //                   id: 476,
        //                   value: "A",
        //                   content: "Dr. Alfson’s new book will be available.",
        //                 },
        //                 {
        //                   id: 477,
        //                   value: "B",
        //                   content: " A new research project will be launched.",
        //                 },
        //                 {
        //                   id: 478,
        //                   value: "C",
        //                   content: "The radio will broadcast an interview.",
        //                 },
        //                 {
        //                   id: 479,
        //                   value: "D",
        //                   content: " The results of a study will be announced.",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 131,
        //               content:
        //                 "Watertrek Power company has recently had to____ the rate it charges for electricity due to rising expenses.",
        //               numQuestion: 127,
        //               correctAnswer: "B",
        //               optionAnswers: [
        //                 {
        //                   id: 480,
        //                   value: "A",
        //                   content: "Get their programs autographed",
        //                 },
        //                 {
        //                   id: 481,
        //                   value: "B",
        //                   content: "Enjoy light refreshments",
        //                 },
        //                 {
        //                   id: 482,
        //                   value: "C",
        //                   content: "Take photos of performers",
        //                 },
        //                 {
        //                   id: 483,
        //                   value: "D",
        //                   content: "Purchase musical recordings",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 132,
        //               content:
        //                 "Venetian Blinds Company’s colorful blinds and curtains are guaranteed to____ your home atmosphere.",
        //               numQuestion: 128,
        //               correctAnswer: "A",
        //               optionAnswers: [
        //                 {
        //                   id: 484,
        //                   value: "A",
        //                   content: "A newspaper reporter",
        //                 },
        //                 {
        //                   id: 485,
        //                   value: "B",
        //                   content: " A computer scientist",
        //                 },
        //                 {
        //                   id: 486,
        //                   value: "C",
        //                   content: "A radio host",
        //                 },
        //                 {
        //                   id: 487,
        //                   value: "D",
        //                   content: "A research assistant",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 133,
        //               content:
        //                 "The Kilimanjaro Espresso Chain distributes mugs instead of____ promotional items because of their durability and visibility.",
        //               numQuestion: 129,
        //               correctAnswer: "D",
        //               optionAnswers: [
        //                 {
        //                   id: 488,
        //                   value: "A",
        //                   content: "Dr. Alfson’s new book will be available.",
        //                 },
        //                 {
        //                   id: 489,
        //                   value: "B",
        //                   content: " A new research project will be launched.",
        //                 },
        //                 {
        //                   id: 490,
        //                   value: "C",
        //                   content: "The radio will broadcast an interview.",
        //                 },
        //                 {
        //                   id: 491,
        //                   value: "D",
        //                   content: " The results of a study will be announced.",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //             {
        //               id: 134,
        //               content:
        //                 "At a retirement dinner last week, Kenichi Tatsumi ____ for his 30 years of service to the Range Engineering Group.",
        //               numQuestion: 130,
        //               correctAnswer: "C",
        //               optionAnswers: [
        //                 {
        //                   id: 492,
        //                   value: "A",
        //                   content: "Get their programs autographed",
        //                 },
        //                 {
        //                   id: 493,
        //                   value: "B",
        //                   content: "Enjoy light refreshments",
        //                 },
        //                 {
        //                   id: 494,
        //                   value: "C",
        //                   content: "Take photos of performers",
        //                 },
        //                 {
        //                   id: 495,
        //                   value: "D",
        //                   content: "Purchase musical recordings",
        //                 },
        //               ],
        //               assets: [],
        //             },
        //           ],
        //         },
        //       ],
        //     },
        //   ],
        // };
        //part 6
        // const res = {
        //   id: 1,
        //   name: "ETS TOEIC 2022 TEST 1",
        //   description: "đề thi 2022",
        //   parts: [
        //     {
        //       name: "Part 6",
        //       partParagraphs: [
        //         {
        //           partId: 6,
        //           paragraphs: [
        //             {
        //               content:
        //                 "<p>NOTICE TO EMPLOYEES<br> The IT department maintains the proper working order of all on-site computer hardware. We also ensure that the accompanying software (131) ___ at its top level of performance.<br> If you are having trouble with your office computer, please contact the IT department on extension 233 and leave a message explaining the (132) ___<br> To best serve you, we ask you to include as many details as possible. This includes when the issue began. (133)___.The more information we have, the faster we can find a solution.<br> We will (134) ____ contact you to set up a time for a visit from one of our technicians.<br> Thank you for your cooperation.</p>",
        //               questions: [
        //                 {
        //                   id: 135,
        //                   content: null,
        //                   numQuestion: 131,
        //                   correctAnswer: "A",
        //                   optionAnswers: [
        //                     {
        //                       id: 496,
        //                       value: "A",
        //                       content: "functionally",
        //                     },
        //                     {
        //                       id: 497,
        //                       value: "B",
        //                       content: "functional",
        //                     },
        //                     {
        //                       id: 498,
        //                       value: "C",
        //                       content: "to function",
        //                     },
        //                     {
        //                       id: 499,
        //                       value: "D",
        //                       content: "is functioning",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 136,
        //                   content: null,
        //                   numQuestion: 132,
        //                   correctAnswer: "B",
        //                   optionAnswers: [
        //                     {
        //                       id: 500,
        //                       value: "A",
        //                       content: "Get their programs autographed",
        //                     },
        //                     {
        //                       id: 501,
        //                       value: "B",
        //                       content: "Enjoy light refreshments",
        //                     },
        //                     {
        //                       id: 502,
        //                       value: "C",
        //                       content: "Take photos of performers",
        //                     },
        //                     {
        //                       id: 503,
        //                       value: "D",
        //                       content: "Purchase musical recordings",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 137,
        //                   content: null,
        //                   numQuestion: 133,
        //                   correctAnswer: "A",
        //                   optionAnswers: [
        //                     {
        //                       id: 504,
        //                       value: "A",
        //                       content: "A newspaper reporter",
        //                     },
        //                     {
        //                       id: 505,
        //                       value: "B",
        //                       content: " A computer scientist",
        //                     },
        //                     {
        //                       id: 506,
        //                       value: "C",
        //                       content: "A radio host",
        //                     },
        //                     {
        //                       id: 507,
        //                       value: "D",
        //                       content: "A research assistant",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 138,
        //                   content: null,
        //                   numQuestion: 134,
        //                   correctAnswer: "A",
        //                   optionAnswers: [
        //                     {
        //                       id: 508,
        //                       value: "A",
        //                       content:
        //                         "Dr. Alfson’s new book will be available.",
        //                     },
        //                     {
        //                       id: 509,
        //                       value: "B",
        //                       content:
        //                         " A new research project will be launched.",
        //                     },
        //                     {
        //                       id: 510,
        //                       value: "C",
        //                       content: "The radio will broadcast an interview.",
        //                     },
        //                     {
        //                       id: 511,
        //                       value: "D",
        //                       content:
        //                         " The results of a study will be announced.",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //               ],
        //             },
        //             {
        //               content:
        //                 "<p>Hi Vincent,</p> <p>It&rsquo;s just come to my attention that there&rsquo;s been a setback with the Lambert project. Apparently the posters for their product launch contain a (135)____.<br> The company name was typed incorrectly in the heading on the final version. As the liaison for this client, I need you to contact Mr. Lambert, notify him of the issue, and (136) ___ for the oversight.<br> Because we were responsible for this error, please reassure Mr. Lambert that reprinting of the posters will occur at (137) ___ expense and will be completed by the end of next week.<br> (138) ____.</p> <p>Regards,<br> Joseph Craig Production Manager, TJR Printing</p>",
        //               questions: [
        //                 {
        //                   id: 139,
        //                   content: null,
        //                   numQuestion: 135,
        //                   correctAnswer: "C",
        //                   optionAnswers: [
        //                     {
        //                       id: 512,
        //                       value: "A",
        //                       content: "Get their programs autographed",
        //                     },
        //                     {
        //                       id: 513,
        //                       value: "B",
        //                       content: "Enjoy light refreshments",
        //                     },
        //                     {
        //                       id: 514,
        //                       value: "C",
        //                       content: "Take photos of performers",
        //                     },
        //                     {
        //                       id: 515,
        //                       value: "D",
        //                       content: "Purchase musical recordings",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 140,
        //                   content: null,
        //                   numQuestion: 136,
        //                   correctAnswer: "C",
        //                   optionAnswers: [
        //                     {
        //                       id: 516,
        //                       value: "A",
        //                       content: "A newspaper reporter",
        //                     },
        //                     {
        //                       id: 517,
        //                       value: "B",
        //                       content: " A computer scientist",
        //                     },
        //                     {
        //                       id: 518,
        //                       value: "C",
        //                       content: "A radio host",
        //                     },
        //                     {
        //                       id: 519,
        //                       value: "D",
        //                       content: "A research assistant",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 141,
        //                   content: null,
        //                   numQuestion: 137,
        //                   correctAnswer: "C",
        //                   optionAnswers: [
        //                     {
        //                       id: 520,
        //                       value: "A",
        //                       content:
        //                         "Dr. Alfson’s new book will be available.",
        //                     },
        //                     {
        //                       id: 521,
        //                       value: "B",
        //                       content:
        //                         " A new research project will be launched.",
        //                     },
        //                     {
        //                       id: 522,
        //                       value: "C",
        //                       content: "The radio will broadcast an interview.",
        //                     },
        //                     {
        //                       id: 523,
        //                       value: "D",
        //                       content:
        //                         " The results of a study will be announced.",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 142,
        //                   content: null,
        //                   numQuestion: 138,
        //                   correctAnswer: "B",
        //                   optionAnswers: [
        //                     {
        //                       id: 524,
        //                       value: "A",
        //                       content: "Get their programs autographed",
        //                     },
        //                     {
        //                       id: 525,
        //                       value: "B",
        //                       content: "Enjoy light refreshments",
        //                     },
        //                     {
        //                       id: 526,
        //                       value: "C",
        //                       content: "Take photos of performers",
        //                     },
        //                     {
        //                       id: 527,
        //                       value: "D",
        //                       content: "Purchase musical recordings",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //               ],
        //             },
        //             {
        //               content:
        //                 "<p>refer to the following article.</p> <p>Sales Manager Wins Negotiation Prize!</p> <p>Our very own Nigel Davis, head of the direct sales division, has won the National Negotiation Prize this year. In recognition of his (139) ___, he has been awarded an all-expenses-paid trip for two to Spain, where he&rsquo;ll stay in a luxury hotel for seven days.<br> In a hotly contested final round held in New York, Davis eventually prevailed against last year&rsquo;s winner, Gupta Singh. (140) ___, Davis also managed to score the highest level of points ever for this stage of the competition.(141) ___.<br> Davis said he is grateful for the support he has received and that he (142) ___ his time abroad.</p>",
        //               questions: [
        //                 {
        //                   id: 143,
        //                   content: null,
        //                   numQuestion: 139,
        //                   correctAnswer: "D",
        //                   optionAnswers: [
        //                     {
        //                       id: 528,
        //                       value: "A",
        //                       content: "A newspaper reporter",
        //                     },
        //                     {
        //                       id: 529,
        //                       value: "B",
        //                       content: " A computer scientist",
        //                     },
        //                     {
        //                       id: 530,
        //                       value: "C",
        //                       content: "A radio host",
        //                     },
        //                     {
        //                       id: 531,
        //                       value: "D",
        //                       content: "A research assistant",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 144,
        //                   content: null,
        //                   numQuestion: 140,
        //                   correctAnswer: "C",
        //                   optionAnswers: [
        //                     {
        //                       id: 532,
        //                       value: "A",
        //                       content:
        //                         "Dr. Alfson’s new book will be available.",
        //                     },
        //                     {
        //                       id: 533,
        //                       value: "B",
        //                       content:
        //                         " A new research project will be launched.",
        //                     },
        //                     {
        //                       id: 534,
        //                       value: "C",
        //                       content: "The radio will broadcast an interview.",
        //                     },
        //                     {
        //                       id: 535,
        //                       value: "D",
        //                       content:
        //                         " The results of a study will be announced.",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 145,
        //                   content: null,
        //                   numQuestion: 141,
        //                   correctAnswer: "C",
        //                   optionAnswers: [
        //                     {
        //                       id: 536,
        //                       value: "A",
        //                       content: "Get their programs autographed",
        //                     },
        //                     {
        //                       id: 537,
        //                       value: "B",
        //                       content: "Enjoy light refreshments",
        //                     },
        //                     {
        //                       id: 538,
        //                       value: "C",
        //                       content: "Take photos of performers",
        //                     },
        //                     {
        //                       id: 539,
        //                       value: "D",
        //                       content: "Purchase musical recordings",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 146,
        //                   content: null,
        //                   numQuestion: 142,
        //                   correctAnswer: "A",
        //                   optionAnswers: [
        //                     {
        //                       id: 540,
        //                       value: "A",
        //                       content:
        //                         "Dr. Alfson’s new book will be available.",
        //                     },
        //                     {
        //                       id: 541,
        //                       value: "B",
        //                       content:
        //                         " A new research project will be launched.",
        //                     },
        //                     {
        //                       id: 542,
        //                       value: "C",
        //                       content: "The radio will broadcast an interview.",
        //                     },
        //                     {
        //                       id: 543,
        //                       value: "D",
        //                       content:
        //                         " The results of a study will be announced.",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //               ],
        //             },
        //             {
        //               content:
        //                 "<p>refer to the following instructions.</p> <p>Queensville University E-Learning<br> E-University Software</p> <p>Prospective students should visit the university Web site and download the E-University software (143) ___ onto their computers.<br> The software gives students access to assessments, modules, and online classrooms. Upon (144) ___, each student is provided with a brochure detailing the features of the software.<br> Once you have installed the program, you need to register by providing your student information as well as a username and a password. Any (145)___ login to your account will only require your username and password.<br> (146) ___ . Alternatively, you can call the Queensville University E-Learning Office at 555-9090.</p>",
        //               questions: [
        //                 {
        //                   id: 147,
        //                   content: null,
        //                   numQuestion: 143,
        //                   correctAnswer: "A",
        //                   optionAnswers: [
        //                     {
        //                       id: 544,
        //                       value: "A",
        //                       content: "Get their programs autographed",
        //                     },
        //                     {
        //                       id: 545,
        //                       value: "B",
        //                       content: "Enjoy light refreshments",
        //                     },
        //                     {
        //                       id: 546,
        //                       value: "C",
        //                       content: "Take photos of performers",
        //                     },
        //                     {
        //                       id: 547,
        //                       value: "D",
        //                       content: "Purchase musical recordings",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 148,
        //                   content: null,
        //                   numQuestion: 144,
        //                   correctAnswer: "D",
        //                   optionAnswers: [
        //                     {
        //                       id: 548,
        //                       value: "A",
        //                       content: "enrollment",
        //                     },
        //                     {
        //                       id: 549,
        //                       value: "B",
        //                       content: "enrolls",
        //                     },
        //                     {
        //                       id: 550,
        //                       value: "C",
        //                       content: "enrolled",
        //                     },
        //                     {
        //                       id: 551,
        //                       value: "D",
        //                       content: "enroll",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 149,
        //                   content: null,
        //                   numQuestion: 145,
        //                   correctAnswer: "B",
        //                   optionAnswers: [
        //                     {
        //                       id: 552,
        //                       value: "A",
        //                       content: "final",
        //                     },
        //                     {
        //                       id: 553,
        //                       value: "B",
        //                       content: "subsequent",
        //                     },
        //                     {
        //                       id: 554,
        //                       value: "C",
        //                       content: "distinctive",
        //                     },
        //                     {
        //                       id: 555,
        //                       value: "D",
        //                       content: "failed",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //                 {
        //                   id: 150,
        //                   content: null,
        //                   numQuestion: 146,
        //                   correctAnswer: "D",
        //                   optionAnswers: [
        //                     {
        //                       id: 556,
        //                       value: "A",
        //                       content:
        //                         "The software must be purchased before the end of the month.",
        //                     },
        //                     {
        //                       id: 557,
        //                       value: "B",
        //                       content:
        //                         "Usernames are the same as your university-assigned student number.",
        //                     },
        //                     {
        //                       id: 558,
        //                       value: "C",
        //                       content:
        //                         "If you experience any problems with the software, e-mail it@quelearning.edu.",
        //                     },
        //                     {
        //                       id: 559,
        //                       value: "D",
        //                       content:
        //                         "The software can be installed on a maximum of two computers.",
        //                     },
        //                   ],
        //                   assets: [],
        //                 },
        //               ],
        //             },
        //           ],
        //         },
        //       ],
        //       partQuestions: [],
        //     },
        //   ],
        // };
        //part 7
        const res = {
          id: 1,
          name: "ETS TOEIC 2022 TEST 1",
          description: "đề thi 2022",
          parts: [
            {
              name: "Part 7",
              partParagraphs: [
                {
                  partId: 7,
                  paragraphs: [
                    {
                      content:
                        "<p>refer to the following information.</p> <p>Thank you for purchasing the TechRight 1400 Scanner. In this publication, you will find everything you need to know to start scanning documents and images into a computer running any common operating system. You can learn about the various parts of your scanner, its advanced features, and review our start-up guide. For more detailed instructions on how to use your TechRight scanner, visit us at www.techright.com.</p>",
                      questions: [
                        {
                          id: 151,
                          content:
                            "Where would this information most likely be found?",
                          numQuestion: 147,
                          correctAnswer: "A",
                          optionAnswers: [
                            {
                              id: 560,
                              value: "A",
                              content: "In a user manual",
                            },
                            {
                              id: 561,
                              value: "B",
                              content: "On a receipt",
                            },
                            {
                              id: 562,
                              value: "C",
                              content: "On a product’s packaging",
                            },
                            {
                              id: 563,
                              value: "D",
                              content: "In an advertisemen",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 152,
                          content:
                            "According to the information, what is provided on the Web site?",
                          numQuestion: 148,
                          correctAnswer: "A",
                          optionAnswers: [
                            {
                              id: 564,
                              value: "A",
                              content: "Antivirus software",
                            },
                            {
                              id: 565,
                              value: "B",
                              content: "A copy of a publication",
                            },
                            {
                              id: 566,
                              value: "C",
                              content: "Operating instructions",
                            },
                            {
                              id: 567,
                              value: "D",
                              content: "Detailed images",
                            },
                          ],
                          assets: [],
                        },
                      ],
                    },
                    {
                      content:
                        "<p>refer to the following e-mail.</p> <p>To: Mei Wan (wan_mei@maillinked.com)<br> From: Nahum Balashov (n.balashov@zapatacarlot.com)<br> Date: January 30<br> Subject: Zapata Cars</p> <p>Dear Ms. Wan,</p> <p>We regret to inform you that you have not been selected for the vehicle sales position you interviewed for last week. While we were impressed with your enthusiastic personality, we decided to hire someone with a more intimate knowledge of the individual makes and models in order to reduce the need for in-house training. You also mentioned that you are working mornings at a high- end boutique and that you would need to give at least 30 days' notice to your current employer. As we discussed in the interview, we need a full-time worker available as soon as possible. Thank you for your understanding.</p> <p>Sincerely,<br> Nahum Balashov HR Director, Zapata Cars</p>",
                      questions: [
                        {
                          id: 153,
                          content: "What is the purpose of the e-mail?",
                          numQuestion: 149,
                          correctAnswer: "B",
                          optionAnswers: [
                            {
                              id: 568,
                              value: "A",
                              content:
                                "Dr. Alfson’s new book will be available.",
                            },
                            {
                              id: 569,
                              value: "B",
                              content:
                                " A new research project will be launched.",
                            },
                            {
                              id: 570,
                              value: "C",
                              content: "The radio will broadcast an interview.",
                            },
                            {
                              id: 571,
                              value: "D",
                              content:
                                " The results of a study will be announced.",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 154,
                          content: "What is indicated about Ms. Wan?",
                          numQuestion: 150,
                          correctAnswer: "A",
                          optionAnswers: [
                            {
                              id: 572,
                              value: "A",
                              content: "Get their programs autographed",
                            },
                            {
                              id: 573,
                              value: "B",
                              content: "Enjoy light refreshments",
                            },
                            {
                              id: 574,
                              value: "C",
                              content: "Take photos of performers",
                            },
                            {
                              id: 575,
                              value: "D",
                              content: "Purchase musical recordings",
                            },
                          ],
                          assets: [],
                        },
                      ],
                    },
                    {
                      content:
                        "<p>For over 60 years, Harrison&rsquo;s has been Hartwick City&rsquo;s leading retailer of wooden tables, shelving, bed frames, and more. 0ur inventory includes merchandise at the forefront of modern trends, as well as items with classic styles. We have also won a number of awards from the local Chamber of Commerce for our delivery service.<br> Our in-house carpenters and creative designers have been praised in the local and national press for their ability to create in consultation with the client, one-of-a-kind pieces using materials that range from the mundane to the exotic.<br> Drop in to our store anytime or click here for pictures of our work.</p>",
                      questions: [
                        {
                          id: 155,
                          content: "What kind of business is Harrison’s?",
                          numQuestion: 151,
                          correctAnswer: "A",
                          optionAnswers: [
                            {
                              id: 576,
                              value: "A",
                              content: "A newspaper reporter",
                            },
                            {
                              id: 577,
                              value: "B",
                              content: " A computer scientist",
                            },
                            {
                              id: 578,
                              value: "C",
                              content: "A radio host",
                            },
                            {
                              id: 579,
                              value: "D",
                              content: "A research assistant",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 156,
                          content:
                            "What does the Web site indicate about Harrison’s?",
                          numQuestion: 152,
                          correctAnswer: "C",
                          optionAnswers: [
                            {
                              id: 580,
                              value: "A",
                              content:
                                "Dr. Alfson’s new book will be available.",
                            },
                            {
                              id: 581,
                              value: "B",
                              content:
                                " A new research project will be launched.",
                            },
                            {
                              id: 582,
                              value: "C",
                              content: "The radio will broadcast an interview.",
                            },
                            {
                              id: 583,
                              value: "D",
                              content:
                                " The results of a study will be announced.",
                            },
                          ],
                          assets: [],
                        },
                      ],
                    },
                    {
                      content:
                        "<p>This morning, we have received reports from various departments stating that the phone lines are down. We believe this has been caused by the lightning storm that occurred overnight. It seems that only the customer service, personnel, and marketing departments have been affected by this fault, with your phone lines in the sales department remaining unaffected. At this very moment, Terrence Preece from the IT department is working hard to restore full service to our phone network, and he is optimistic that this will be achieved by 6 P.M. today.<br> In the meantime, we ask that even those who are able to use your phones, please communicate with the affected departments using e-mail only. We understand the impact that this disruption will have on your productivity rates, but we are hopeful that you will do your best to work within the limitations presented.</p> <p>Thank you for understanding.</p> <p>Dean Glover<br> Network Manager</p>",
                      questions: [
                        {
                          id: 157,
                          content: "Who most likely was the e-mail sent to?",
                          numQuestion: 153,
                          correctAnswer: "C",
                          optionAnswers: [
                            {
                              id: 584,
                              value: "A",
                              content: "Get their programs autographed",
                            },
                            {
                              id: 585,
                              value: "B",
                              content: "Enjoy light refreshments",
                            },
                            {
                              id: 586,
                              value: "C",
                              content: "Take photos of performers",
                            },
                            {
                              id: 587,
                              value: "D",
                              content: "Purchase musical recordings",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 158,
                          content:
                            "What does Mr. Glover advise recipients to do?",
                          numQuestion: 154,
                          correctAnswer: "C",
                          optionAnswers: [
                            {
                              id: 588,
                              value: "A",
                              content: "Get their programs autographed",
                            },
                            {
                              id: 589,
                              value: "B",
                              content: "Enjoy light refreshments",
                            },
                            {
                              id: 590,
                              value: "C",
                              content: "Take photos of performers",
                            },
                            {
                              id: 591,
                              value: "D",
                              content: "Purchase musical recordings",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 159,
                          content:
                            "What is one thing that Ms. Tanner is missing?",
                          numQuestion: 155,
                          correctAnswer: "B",
                          optionAnswers: [
                            {
                              id: 592,
                              value: "A",
                              content: "they",
                            },
                            {
                              id: 593,
                              value: "B",
                              content: "their",
                            },
                            {
                              id: 594,
                              value: "C",
                              content: "them",
                            },
                            {
                              id: 595,
                              value: "D",
                              content: "theirs",
                            },
                          ],
                          assets: [],
                        },
                      ],
                    },
                    {
                      content:
                        "<p>refer to the following message chain.</p> <p><strong>ELIZABETH TANNER</strong><br> 13:11<br> I'm setting up the conference room for the board meeting, but can't find the the cable for the laptop.</p> <p><strong>DANNY OLSEN</strong><br> 13:12<br> I'm not sure which cable you mean.</p> <p><strong>ELIZABETH TANNER</strong><br> 13:13<br> The one that hooks up a computer to the projector for videos and slideshows. I need one of those but it's missing.</p> <p><strong>DANNY OLSEN</strong><br> 13:14<br> Oh, that's happened before. I&rsquo;ll bring one down in a few minutes.</p> <p><strong>DANNY OLSEN</strong><br> 13:15<br> Should I take anything else with me?</p> <p><strong>ELIZABETH TANNER</strong><br> 13:19<br> I think there's also a remote for the projector. I can't find that either.</p> <p><strong>DANNY OLSEN</strong><br> 13:20<br> I'll grab that as well.</p> <p><strong>ELIZABETH TANNER</strong><br> 13:21<br> I really appreciate it!</p> <p>SEND</p>",
                      questions: [
                        {
                          id: 160,
                          content:
                            "At 13:14, what does Mr. Olsen mean when he writes, “Oh, that’s happened before”?",
                          numQuestion: 156,
                          correctAnswer: "D",
                          optionAnswers: [
                            {
                              id: 596,
                              value: "A",
                              content: "is located",
                            },
                            {
                              id: 597,
                              value: "B",
                              content: "locates",
                            },
                            {
                              id: 598,
                              value: "C",
                              content: "locating",
                            },
                            {
                              id: 599,
                              value: "D",
                              content: "was locating",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 161,
                          content:
                            "What is suggested about the vehicle in the advertisement?",
                          numQuestion: 157,
                          correctAnswer: "C",
                          optionAnswers: [
                            {
                              id: 600,
                              value: "A",
                              content: "staged",
                            },
                            {
                              id: 601,
                              value: "B",
                              content: "referred",
                            },
                            {
                              id: 602,
                              value: "C",
                              content: "held",
                            },
                            {
                              id: 603,
                              value: "D",
                              content: "went",
                            },
                          ],
                          assets: [],
                        },
                      ],
                    },
                    {
                      content:
                        "<p>refer to the following information.</p> <p>Thank you for purchasing the TechRight 1400 Scanner. In this publication, you will find everything you need to know to start scanning documents and images into a computer running any common operating system. You can learn about the various parts of your scanner, its advanced features, and review our start-up guide. For more detailed instructions on how to use your TechRight scanner, visit us at www.techright.com.</p>",
                      questions: [
                        {
                          id: 163,
                          content:
                            "Where would this information most likely be found?",
                          numQuestion: 158,
                          correctAnswer: "A",
                          optionAnswers: [
                            {
                              id: 609,
                              value: "A",
                              content: "Neither",
                            },
                            {
                              id: 610,
                              value: "B",
                              content: "Every",
                            },
                            {
                              id: 611,
                              value: "C",
                              content: "Each",
                            },
                            {
                              id: 612,
                              value: "D",
                              content: "All",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 164,
                          content:
                            "According to the information, what is provided on the Web site?",
                          numQuestion: 159,
                          correctAnswer: "A",
                          optionAnswers: [
                            {
                              id: 613,
                              value: "A",
                              content: "journal",
                            },
                            {
                              id: 614,
                              value: "B",
                              content: "journal",
                            },
                            {
                              id: 615,
                              value: "C",
                              content: "journalism",
                            },
                            {
                              id: 616,
                              value: "D",
                              content: "journalistic",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 165,
                          content: "What is the purpose of the e-mail?",
                          numQuestion: 160,
                          correctAnswer: "B",
                          optionAnswers: [
                            {
                              id: 617,
                              value: "A",
                              content: "next",
                            },
                            {
                              id: 618,
                              value: "B",
                              content: "closest",
                            },
                            {
                              id: 619,
                              value: "C",
                              content: "nearby",
                            },
                            {
                              id: 620,
                              value: "D",
                              content: "brief",
                            },
                          ],
                          assets: [],
                        },
                      ],
                    },
                    {
                      content:
                        "<p>refer to the following e-mail.</p> <p>To: Mei Wan (wan_mei@maillinked.com)<br> From: Nahum Balashov (n.balashov@zapatacarlot.com)<br> Date: January 30<br> Subject: Zapata Cars</p> <p>Dear Ms. Wan,</p> <p>We regret to inform you that you have not been selected for the vehicle sales position you interviewed for last week. While we were impressed with your enthusiastic personality, we decided to hire someone with a more intimate knowledge of the individual makes and models in order to reduce the need for in-house training. You also mentioned that you are working mornings at a high- end boutique and that you would need to give at least 30 days' notice to your current employer. As we discussed in the interview, we need a full-time worker available as soon as possible. Thank you for your understanding.</p> <p>Sincerely,<br> Nahum Balashov HR Director, Zapata Cars</p>",
                      questions: [
                        {
                          id: 166,
                          content: "What is indicated about Ms. Wan?",
                          numQuestion: 161,
                          correctAnswer: "A",
                          optionAnswers: [
                            {
                              id: 621,
                              value: "A",
                              content: "A newspaper reporter",
                            },
                            {
                              id: 622,
                              value: "B",
                              content: " A computer scientist",
                            },
                            {
                              id: 623,
                              value: "C",
                              content: "A radio host",
                            },
                            {
                              id: 624,
                              value: "D",
                              content: "A research assistant",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 167,
                          content: "What kind of business is Harrison’s?",
                          numQuestion: 162,
                          correctAnswer: "A",
                          optionAnswers: [
                            {
                              id: 625,
                              value: "A",
                              content:
                                "Dr. Alfson’s new book will be available.",
                            },
                            {
                              id: 626,
                              value: "B",
                              content:
                                " A new research project will be launched.",
                            },
                            {
                              id: 627,
                              value: "C",
                              content: "The radio will broadcast an interview.",
                            },
                            {
                              id: 628,
                              value: "D",
                              content:
                                " The results of a study will be announced.",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 168,
                          content:
                            "What does the Web site indicate about Harrison’s?",
                          numQuestion: 163,
                          correctAnswer: "C",
                          optionAnswers: [
                            {
                              id: 629,
                              value: "A",
                              content: "Get their programs autographed",
                            },
                            {
                              id: 630,
                              value: "B",
                              content: "Enjoy light refreshments",
                            },
                            {
                              id: 631,
                              value: "C",
                              content: "Take photos of performers",
                            },
                            {
                              id: 632,
                              value: "D",
                              content: "Purchase musical recordings",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 169,
                          content: "Who most likely was the e-mail sent to?",
                          numQuestion: 164,
                          correctAnswer: "C",
                          optionAnswers: [
                            {
                              id: 633,
                              value: "A",
                              content: "A newspaper reporter",
                            },
                            {
                              id: 634,
                              value: "B",
                              content: " A computer scientist",
                            },
                            {
                              id: 635,
                              value: "C",
                              content: "A radio host",
                            },
                            {
                              id: 636,
                              value: "D",
                              content: "A research assistant",
                            },
                          ],
                          assets: [],
                        },
                      ],
                    },
                    {
                      content:
                        "<p>For over 60 years, Harrison&rsquo;s has been Hartwick City&rsquo;s leading retailer of wooden tables, shelving, bed frames, and more. 0ur inventory includes merchandise at the forefront of modern trends, as well as items with classic styles. We have also won a number of awards from the local Chamber of Commerce for our delivery service.<br> Our in-house carpenters and creative designers have been praised in the local and national press for their ability to create in consultation with the client, one-of-a-kind pieces using materials that range from the mundane to the exotic.<br> Drop in to our store anytime or click here for pictures of our work.</p>",
                      questions: [
                        {
                          id: 170,
                          content:
                            "What does Mr. Glover advise recipients to do?",
                          numQuestion: 165,
                          correctAnswer: "C",
                          optionAnswers: [
                            {
                              id: 637,
                              value: "A",
                              content:
                                "Dr. Alfson’s new book will be available.",
                            },
                            {
                              id: 638,
                              value: "B",
                              content:
                                " A new research project will be launched.",
                            },
                            {
                              id: 639,
                              value: "C",
                              content: "The radio will broadcast an interview.",
                            },
                            {
                              id: 640,
                              value: "D",
                              content:
                                " The results of a study will be announced.",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 171,
                          content:
                            "What is one thing that Ms. Tanner is missing?",
                          numQuestion: 166,
                          correctAnswer: "B",
                          optionAnswers: [
                            {
                              id: 641,
                              value: "A",
                              content: "Get their programs autographed",
                            },
                            {
                              id: 642,
                              value: "B",
                              content: "Enjoy light refreshments",
                            },
                            {
                              id: 643,
                              value: "C",
                              content: "Take photos of performers",
                            },
                            {
                              id: 644,
                              value: "D",
                              content: "Purchase musical recordings",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 172,
                          content:
                            "At 13:14, what does Mr. Olsen mean when he writes, “Oh, that’s happened before”?",
                          numQuestion: 167,
                          correctAnswer: "D",
                          optionAnswers: [
                            {
                              id: 645,
                              value: "A",
                              content: "A newspaper reporter",
                            },
                            {
                              id: 646,
                              value: "B",
                              content: " A computer scientist",
                            },
                            {
                              id: 647,
                              value: "C",
                              content: "A radio host",
                            },
                            {
                              id: 648,
                              value: "D",
                              content: "A research assistant",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 173,
                          content:
                            "What is suggested about the vehicle in the advertisement?",
                          numQuestion: 168,
                          correctAnswer: "C",
                          optionAnswers: [
                            {
                              id: 649,
                              value: "A",
                              content:
                                "Dr. Alfson’s new book will be available.",
                            },
                            {
                              id: 650,
                              value: "B",
                              content:
                                " A new research project will be launched.",
                            },
                            {
                              id: 651,
                              value: "C",
                              content: "The radio will broadcast an interview.",
                            },
                            {
                              id: 652,
                              value: "D",
                              content:
                                " The results of a study will be announced.",
                            },
                          ],
                          assets: [],
                        },
                      ],
                    },
                    {
                      content:
                        "<p>This morning, we have received reports from various departments stating that the phone lines are down. We believe this has been caused by the lightning storm that occurred overnight. It seems that only the customer service, personnel, and marketing departments have been affected by this fault, with your phone lines in the sales department remaining unaffected. At this very moment, Terrence Preece from the IT department is working hard to restore full service to our phone network, and he is optimistic that this will be achieved by 6 P.M. today.<br> In the meantime, we ask that even those who are able to use your phones, please communicate with the affected departments using e-mail only. We understand the impact that this disruption will have on your productivity rates, but we are hopeful that you will do your best to work within the limitations presented.</p> <p>Thank you for understanding.</p> <p>Dean Glover<br> Network Manager</p>",
                      questions: [
                        {
                          id: 174,
                          content:
                            "Where would this information most likely be found?",
                          numQuestion: 169,
                          correctAnswer: "A",
                          optionAnswers: [
                            {
                              id: 653,
                              value: "A",
                              content: "Get their programs autographed",
                            },
                            {
                              id: 654,
                              value: "B",
                              content: "Enjoy light refreshments",
                            },
                            {
                              id: 655,
                              value: "C",
                              content: "Take photos of performers",
                            },
                            {
                              id: 656,
                              value: "D",
                              content: "Purchase musical recordings",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 175,
                          content:
                            "According to the information, what is provided on the Web site?",
                          numQuestion: 170,
                          correctAnswer: "A",
                          optionAnswers: [
                            {
                              id: 657,
                              value: "A",
                              content: "A newspaper reporter",
                            },
                            {
                              id: 658,
                              value: "B",
                              content: " A computer scientist",
                            },
                            {
                              id: 659,
                              value: "C",
                              content: "A radio host",
                            },
                            {
                              id: 660,
                              value: "D",
                              content: "A research assistant",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 176,
                          content: "What is the purpose of the e-mail?",
                          numQuestion: 171,
                          correctAnswer: "B",
                          optionAnswers: [
                            {
                              id: 661,
                              value: "A",
                              content:
                                "Dr. Alfson’s new book will be available.",
                            },
                            {
                              id: 662,
                              value: "B",
                              content:
                                " A new research project will be launched.",
                            },
                            {
                              id: 663,
                              value: "C",
                              content: "The radio will broadcast an interview.",
                            },
                            {
                              id: 664,
                              value: "D",
                              content:
                                " The results of a study will be announced.",
                            },
                          ],
                          assets: [],
                        },
                      ],
                    },
                    {
                      content:
                        "<p>refer to the following message chain.</p> <p><strong>ELIZABETH TANNER</strong><br> 13:11<br> I'm setting up the conference room for the board meeting, but can't find the the cable for the laptop.</p> <p><strong>DANNY OLSEN</strong><br> 13:12<br> I'm not sure which cable you mean.</p> <p><strong>ELIZABETH TANNER</strong><br> 13:13<br> The one that hooks up a computer to the projector for videos and slideshows. I need one of those but it's missing.</p> <p><strong>DANNY OLSEN</strong><br> 13:14<br> Oh, that's happened before. I&rsquo;ll bring one down in a few minutes.</p> <p><strong>DANNY OLSEN</strong><br> 13:15<br> Should I take anything else with me?</p> <p><strong>ELIZABETH TANNER</strong><br> 13:19<br> I think there's also a remote for the projector. I can't find that either.</p> <p><strong>DANNY OLSEN</strong><br> 13:20<br> I'll grab that as well.</p> <p><strong>ELIZABETH TANNER</strong><br> 13:21<br> I really appreciate it!</p> <p>SEND</p>",
                      questions: [
                        {
                          id: 177,
                          content: "What is indicated about Ms. Wan?",
                          numQuestion: 172,
                          correctAnswer: "A",
                          optionAnswers: [
                            {
                              id: 665,
                              value: "A",
                              content: "Get their programs autographed",
                            },
                            {
                              id: 666,
                              value: "B",
                              content: "Enjoy light refreshments",
                            },
                            {
                              id: 667,
                              value: "C",
                              content: "Take photos of performers",
                            },
                            {
                              id: 668,
                              value: "D",
                              content: "Purchase musical recordings",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 178,
                          content: "What kind of business is Harrison’s?",
                          numQuestion: 173,
                          correctAnswer: "A",
                          optionAnswers: [
                            {
                              id: 669,
                              value: "A",
                              content: "A newspaper reporter",
                            },
                            {
                              id: 670,
                              value: "B",
                              content: " A computer scientist",
                            },
                            {
                              id: 671,
                              value: "C",
                              content: "A radio host",
                            },
                            {
                              id: 672,
                              value: "D",
                              content: "A research assistant",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 179,
                          content:
                            "What does the Web site indicate about Harrison’s?",
                          numQuestion: 174,
                          correctAnswer: "C",
                          optionAnswers: [
                            {
                              id: 673,
                              value: "A",
                              content:
                                "Dr. Alfson’s new book will be available.",
                            },
                            {
                              id: 674,
                              value: "B",
                              content:
                                " A new research project will be launched.",
                            },
                            {
                              id: 675,
                              value: "C",
                              content: "The radio will broadcast an interview.",
                            },
                            {
                              id: 676,
                              value: "D",
                              content:
                                " The results of a study will be announced.",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 180,
                          content: "Who most likely was the e-mail sent to?",
                          numQuestion: 175,
                          correctAnswer: "C",
                          optionAnswers: [
                            {
                              id: 677,
                              value: "A",
                              content: "Get their programs autographed",
                            },
                            {
                              id: 678,
                              value: "B",
                              content: "Enjoy light refreshments",
                            },
                            {
                              id: 679,
                              value: "C",
                              content: "Take photos of performers",
                            },
                            {
                              id: 680,
                              value: "D",
                              content: "Purchase musical recordings",
                            },
                          ],
                          assets: [],
                        },
                      ],
                    },
                    {
                      content:
                        "<p>refer to the following information.</p> <p>Thank you for purchasing the TechRight 1400 Scanner. In this publication, you will find everything you need to know to start scanning documents and images into a computer running any common operating system. You can learn about the various parts of your scanner, its advanced features, and review our start-up guide. For more detailed instructions on how to use your TechRight scanner, visit us at www.techright.com.</p>",
                      questions: [
                        {
                          id: 181,
                          content:
                            "What does Mr. Glover advise recipients to do?",
                          numQuestion: 176,
                          correctAnswer: "C",
                          optionAnswers: [
                            {
                              id: 681,
                              value: "A",
                              content: "A newspaper reporter",
                            },
                            {
                              id: 682,
                              value: "B",
                              content: " A computer scientist",
                            },
                            {
                              id: 683,
                              value: "C",
                              content: "A radio host",
                            },
                            {
                              id: 684,
                              value: "D",
                              content: "A research assistant",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 182,
                          content:
                            "What is one thing that Ms. Tanner is missing?",
                          numQuestion: 177,
                          correctAnswer: "B",
                          optionAnswers: [
                            {
                              id: 685,
                              value: "A",
                              content:
                                "Dr. Alfson’s new book will be available.",
                            },
                            {
                              id: 686,
                              value: "B",
                              content:
                                " A new research project will be launched.",
                            },
                            {
                              id: 687,
                              value: "C",
                              content: "The radio will broadcast an interview.",
                            },
                            {
                              id: 688,
                              value: "D",
                              content:
                                " The results of a study will be announced.",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 183,
                          content:
                            "At 13:14, what does Mr. Olsen mean when he writes, “Oh, that’s happened before”?",
                          numQuestion: 178,
                          correctAnswer: "D",
                          optionAnswers: [
                            {
                              id: 689,
                              value: "A",
                              content: "Get their programs autographed",
                            },
                            {
                              id: 690,
                              value: "B",
                              content: "Enjoy light refreshments",
                            },
                            {
                              id: 691,
                              value: "C",
                              content: "Take photos of performers",
                            },
                            {
                              id: 692,
                              value: "D",
                              content: "Purchase musical recordings",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 184,
                          content:
                            "What is suggested about the vehicle in the advertisement?",
                          numQuestion: 179,
                          correctAnswer: "C",
                          optionAnswers: [
                            {
                              id: 693,
                              value: "A",
                              content:
                                "Dr. Alfson’s new book will be available.",
                            },
                            {
                              id: 694,
                              value: "B",
                              content:
                                " A new research project will be launched.",
                            },
                            {
                              id: 695,
                              value: "C",
                              content: "The radio will broadcast an interview.",
                            },
                            {
                              id: 696,
                              value: "D",
                              content:
                                " The results of a study will be announced.",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 185,
                          content:
                            "Where would this information most likely be found?",
                          numQuestion: 180,
                          correctAnswer: "A",
                          optionAnswers: [
                            {
                              id: 697,
                              value: "A",
                              content: "Get their programs autographed",
                            },
                            {
                              id: 698,
                              value: "B",
                              content: "Enjoy light refreshments",
                            },
                            {
                              id: 699,
                              value: "C",
                              content: "Take photos of performers",
                            },
                            {
                              id: 700,
                              value: "D",
                              content: "Purchase musical recordings",
                            },
                          ],
                          assets: [],
                        },
                      ],
                    },
                    {
                      content:
                        "<p>refer to the following e-mail.</p> <p>To: Mei Wan (wan_mei@maillinked.com)<br> From: Nahum Balashov (n.balashov@zapatacarlot.com)<br> Date: January 30<br> Subject: Zapata Cars</p> <p>Dear Ms. Wan,</p> <p>We regret to inform you that you have not been selected for the vehicle sales position you interviewed for last week. While we were impressed with your enthusiastic personality, we decided to hire someone with a more intimate knowledge of the individual makes and models in order to reduce the need for in-house training. You also mentioned that you are working mornings at a high- end boutique and that you would need to give at least 30 days' notice to your current employer. As we discussed in the interview, we need a full-time worker available as soon as possible. Thank you for your understanding.</p> <p>Sincerely,<br> Nahum Balashov HR Director, Zapata Cars</p>",
                      questions: [
                        {
                          id: 186,
                          content:
                            "According to the information, what is provided on the Web site?",
                          numQuestion: 181,
                          correctAnswer: "A",
                          optionAnswers: [
                            {
                              id: 701,
                              value: "A",
                              content: "A newspaper reporter",
                            },
                            {
                              id: 702,
                              value: "B",
                              content: " A computer scientist",
                            },
                            {
                              id: 703,
                              value: "C",
                              content: "A radio host",
                            },
                            {
                              id: 704,
                              value: "D",
                              content: "A research assistant",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 187,
                          content: "What is the purpose of the e-mail?",
                          numQuestion: 182,
                          correctAnswer: "B",
                          optionAnswers: [
                            {
                              id: 705,
                              value: "A",
                              content:
                                "Dr. Alfson’s new book will be available.",
                            },
                            {
                              id: 706,
                              value: "B",
                              content:
                                " A new research project will be launched.",
                            },
                            {
                              id: 707,
                              value: "C",
                              content: "The radio will broadcast an interview.",
                            },
                            {
                              id: 708,
                              value: "D",
                              content:
                                " The results of a study will be announced.",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 188,
                          content: "What is indicated about Ms. Wan?",
                          numQuestion: 183,
                          correctAnswer: "A",
                          optionAnswers: [
                            {
                              id: 709,
                              value: "A",
                              content: "Get their programs autographed",
                            },
                            {
                              id: 710,
                              value: "B",
                              content: "Enjoy light refreshments",
                            },
                            {
                              id: 711,
                              value: "C",
                              content: "Take photos of performers",
                            },
                            {
                              id: 712,
                              value: "D",
                              content: "Purchase musical recordings",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 189,
                          content: "What kind of business is Harrison’s?",
                          numQuestion: 184,
                          correctAnswer: "A",
                          optionAnswers: [
                            {
                              id: 713,
                              value: "A",
                              content: "functionally",
                            },
                            {
                              id: 714,
                              value: "B",
                              content: "functional",
                            },
                            {
                              id: 715,
                              value: "C",
                              content: "to function",
                            },
                            {
                              id: 716,
                              value: "D",
                              content: "is functioning",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 190,
                          content:
                            "What does the Web site indicate about Harrison’s?",
                          numQuestion: 185,
                          correctAnswer: "C",
                          optionAnswers: [
                            {
                              id: 717,
                              value: "A",
                              content: "Get their programs autographed",
                            },
                            {
                              id: 718,
                              value: "B",
                              content: "Enjoy light refreshments",
                            },
                            {
                              id: 719,
                              value: "C",
                              content: "Take photos of performers",
                            },
                            {
                              id: 720,
                              value: "D",
                              content: "Purchase musical recordings",
                            },
                          ],
                          assets: [],
                        },
                      ],
                    },
                    {
                      content:
                        "<p>For over 60 years, Harrison&rsquo;s has been Hartwick City&rsquo;s leading retailer of wooden tables, shelving, bed frames, and more. 0ur inventory includes merchandise at the forefront of modern trends, as well as items with classic styles. We have also won a number of awards from the local Chamber of Commerce for our delivery service.<br> Our in-house carpenters and creative designers have been praised in the local and national press for their ability to create in consultation with the client, one-of-a-kind pieces using materials that range from the mundane to the exotic.<br> Drop in to our store anytime or click here for pictures of our work.</p>",
                      questions: [
                        {
                          id: 191,
                          content: "Who most likely was the e-mail sent to?",
                          numQuestion: 186,
                          correctAnswer: "C",
                          optionAnswers: [
                            {
                              id: 721,
                              value: "A",
                              content: "A newspaper reporter",
                            },
                            {
                              id: 722,
                              value: "B",
                              content: " A computer scientist",
                            },
                            {
                              id: 723,
                              value: "C",
                              content: "A radio host",
                            },
                            {
                              id: 724,
                              value: "D",
                              content: "A research assistant",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 192,
                          content:
                            "What does Mr. Glover advise recipients to do?",
                          numQuestion: 187,
                          correctAnswer: "C",
                          optionAnswers: [
                            {
                              id: 725,
                              value: "A",
                              content:
                                "Dr. Alfson’s new book will be available.",
                            },
                            {
                              id: 726,
                              value: "B",
                              content:
                                " A new research project will be launched.",
                            },
                            {
                              id: 727,
                              value: "C",
                              content: "The radio will broadcast an interview.",
                            },
                            {
                              id: 728,
                              value: "D",
                              content:
                                " The results of a study will be announced.",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 193,
                          content:
                            "What is one thing that Ms. Tanner is missing?",
                          numQuestion: 188,
                          correctAnswer: "B",
                          optionAnswers: [
                            {
                              id: 729,
                              value: "A",
                              content: "Get their programs autographed",
                            },
                            {
                              id: 730,
                              value: "B",
                              content: "Enjoy light refreshments",
                            },
                            {
                              id: 731,
                              value: "C",
                              content: "Take photos of performers",
                            },
                            {
                              id: 732,
                              value: "D",
                              content: "Purchase musical recordings",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 194,
                          content:
                            "At 13:14, what does Mr. Olsen mean when he writes, “Oh, that’s happened before”?",
                          numQuestion: 189,
                          correctAnswer: "D",
                          optionAnswers: [
                            {
                              id: 733,
                              value: "A",
                              content: "A newspaper reporter",
                            },
                            {
                              id: 734,
                              value: "B",
                              content: " A computer scientist",
                            },
                            {
                              id: 735,
                              value: "C",
                              content: "A radio host",
                            },
                            {
                              id: 736,
                              value: "D",
                              content: "A research assistant",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 195,
                          content:
                            "What is suggested about the vehicle in the advertisement?",
                          numQuestion: 190,
                          correctAnswer: "C",
                          optionAnswers: [
                            {
                              id: 737,
                              value: "A",
                              content:
                                "Dr. Alfson’s new book will be available.",
                            },
                            {
                              id: 738,
                              value: "B",
                              content:
                                " A new research project will be launched.",
                            },
                            {
                              id: 739,
                              value: "C",
                              content: "The radio will broadcast an interview.",
                            },
                            {
                              id: 740,
                              value: "D",
                              content:
                                " The results of a study will be announced.",
                            },
                          ],
                          assets: [],
                        },
                      ],
                    },
                    {
                      content:
                        "<p>This morning, we have received reports from various departments stating that the phone lines are down. We believe this has been caused by the lightning storm that occurred overnight. It seems that only the customer service, personnel, and marketing departments have been affected by this fault, with your phone lines in the sales department remaining unaffected. At this very moment, Terrence Preece from the IT department is working hard to restore full service to our phone network, and he is optimistic that this will be achieved by 6 P.M. today.<br> In the meantime, we ask that even those who are able to use your phones, please communicate with the affected departments using e-mail only. We understand the impact that this disruption will have on your productivity rates, but we are hopeful that you will do your best to work within the limitations presented.</p> <p>Thank you for understanding.</p> <p>Dean Glover<br> Network Manager</p>",
                      questions: [
                        {
                          id: 196,
                          content:
                            "According to the information, what is provided on the Web site?",
                          numQuestion: 191,
                          correctAnswer: "A",
                          optionAnswers: [
                            {
                              id: 741,
                              value: "A",
                              content: "Get their programs autographed",
                            },
                            {
                              id: 742,
                              value: "B",
                              content: "Enjoy light refreshments",
                            },
                            {
                              id: 743,
                              value: "C",
                              content: "Take photos of performers",
                            },
                            {
                              id: 744,
                              value: "D",
                              content: "Purchase musical recordings",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 197,
                          content: "What is the purpose of the e-mail?",
                          numQuestion: 192,
                          correctAnswer: "B",
                          optionAnswers: [
                            {
                              id: 745,
                              value: "A",
                              content: "A newspaper reporter",
                            },
                            {
                              id: 746,
                              value: "B",
                              content: " A computer scientist",
                            },
                            {
                              id: 747,
                              value: "C",
                              content: "A radio host",
                            },
                            {
                              id: 748,
                              value: "D",
                              content: "A research assistant",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 198,
                          content: "What is indicated about Ms. Wan?",
                          numQuestion: 193,
                          correctAnswer: "A",
                          optionAnswers: [
                            {
                              id: 749,
                              value: "A",
                              content:
                                "Dr. Alfson’s new book will be available.",
                            },
                            {
                              id: 750,
                              value: "B",
                              content:
                                " A new research project will be launched.",
                            },
                            {
                              id: 751,
                              value: "C",
                              content: "The radio will broadcast an interview.",
                            },
                            {
                              id: 752,
                              value: "D",
                              content:
                                " The results of a study will be announced.",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 199,
                          content: "What kind of business is Harrison’s?",
                          numQuestion: 193,
                          correctAnswer: "A",
                          optionAnswers: [
                            {
                              id: 753,
                              value: "A",
                              content: "Get their programs autographed",
                            },
                            {
                              id: 754,
                              value: "B",
                              content: "Enjoy light refreshments",
                            },
                            {
                              id: 755,
                              value: "C",
                              content: "Take photos of performers",
                            },
                            {
                              id: 756,
                              value: "D",
                              content: "Purchase musical recordings",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 200,
                          content:
                            "What does the Web site indicate about Harrison’s?",
                          numQuestion: 195,
                          correctAnswer: "C",
                          optionAnswers: [
                            {
                              id: 757,
                              value: "A",
                              content:
                                "Dr. Alfson’s new book will be available.",
                            },
                            {
                              id: 758,
                              value: "B",
                              content:
                                " A new research project will be launched.",
                            },
                            {
                              id: 759,
                              value: "C",
                              content: "The radio will broadcast an interview.",
                            },
                            {
                              id: 760,
                              value: "D",
                              content:
                                " The results of a study will be announced.",
                            },
                          ],
                          assets: [],
                        },
                      ],
                    },
                    {
                      content:
                        "<p>refer to the following message chain.</p> <p><strong>ELIZABETH TANNER</strong><br> 13:11<br> I'm setting up the conference room for the board meeting, but can't find the the cable for the laptop.</p> <p><strong>DANNY OLSEN</strong><br> 13:12<br> I'm not sure which cable you mean.</p> <p><strong>ELIZABETH TANNER</strong><br> 13:13<br> The one that hooks up a computer to the projector for videos and slideshows. I need one of those but it's missing.</p> <p><strong>DANNY OLSEN</strong><br> 13:14<br> Oh, that's happened before. I&rsquo;ll bring one down in a few minutes.</p> <p><strong>DANNY OLSEN</strong><br> 13:15<br> Should I take anything else with me?</p> <p><strong>ELIZABETH TANNER</strong><br> 13:19<br> I think there's also a remote for the projector. I can't find that either.</p> <p><strong>DANNY OLSEN</strong><br> 13:20<br> I'll grab that as well.</p> <p><strong>ELIZABETH TANNER</strong><br> 13:21<br> I really appreciate it!</p> <p>SEND</p>",
                      questions: [
                        {
                          id: 201,
                          content: "Who most likely was the e-mail sent to?",
                          numQuestion: 196,
                          correctAnswer: "C",
                          optionAnswers: [
                            {
                              id: 761,
                              value: "A",
                              content: "Get their programs autographed",
                            },
                            {
                              id: 762,
                              value: "B",
                              content: "Enjoy light refreshments",
                            },
                            {
                              id: 763,
                              value: "C",
                              content: "Take photos of performers",
                            },
                            {
                              id: 764,
                              value: "D",
                              content: "Purchase musical recordings",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 202,
                          content:
                            "What does Mr. Glover advise recipients to do?",
                          numQuestion: 197,
                          correctAnswer: "C",
                          optionAnswers: [
                            {
                              id: 765,
                              value: "A",
                              content: "enrollment",
                            },
                            {
                              id: 766,
                              value: "B",
                              content: "enrolls",
                            },
                            {
                              id: 767,
                              value: "C",
                              content: "enrolled",
                            },
                            {
                              id: 768,
                              value: "D",
                              content: "enroll",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 203,
                          content:
                            "What is one thing that Ms. Tanner is missing?",
                          numQuestion: 198,
                          correctAnswer: "B",
                          optionAnswers: [
                            {
                              id: 769,
                              value: "A",
                              content: "final",
                            },
                            {
                              id: 770,
                              value: "B",
                              content: "subsequent",
                            },
                            {
                              id: 771,
                              value: "C",
                              content: "distinctive",
                            },
                            {
                              id: 772,
                              value: "D",
                              content: "failed",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 204,
                          content:
                            "At 13:14, what does Mr. Olsen mean when he writes, “Oh, that’s happened before”?",
                          numQuestion: 199,
                          correctAnswer: "D",
                          optionAnswers: [
                            {
                              id: 773,
                              value: "A",
                              content:
                                "The software must be purchased before the end of the month.",
                            },
                            {
                              id: 774,
                              value: "B",
                              content:
                                "Usernames are the same as your university-assigned student number.",
                            },
                            {
                              id: 775,
                              value: "C",
                              content:
                                "If you experience any problems with the software, e-mail it@quelearning.edu.",
                            },
                            {
                              id: 776,
                              value: "D",
                              content:
                                "The software can be installed on a maximum of two computers.",
                            },
                          ],
                          assets: [],
                        },
                        {
                          id: 205,
                          content:
                            "What is suggested about the vehicle in the advertisement?",
                          numQuestion: 200,
                          correctAnswer: "C",
                          optionAnswers: [
                            {
                              id: 777,
                              value: "A",
                              content: "In a user manual",
                            },
                            {
                              id: 778,
                              value: "B",
                              content: "On a receipt",
                            },
                            {
                              id: 779,
                              value: "C",
                              content: "On a product’s packaging",
                            },
                            {
                              id: 780,
                              value: "D",
                              content: "In an advertisemen",
                            },
                          ],
                          assets: [],
                        },
                      ],
                    },
                  ],
                },
              ],
              partQuestions: [],
            },
          ],
        };
        if (
          res?.parts[0]?.name === "Part 1" ||
          res?.parts[0]?.name === "Part 2" ||
          res?.parts[0]?.name === "Part 3" ||
          res?.parts[0]?.name === "Part 4"
        ) {
          res.parts[0].isListening = true;
          res.parts[0].isTwoCols = false;
        } else {
          res.parts[0].isListening = false;
          res.parts[0].isTwoCols = true;
        }
        setListPart(res);
        console.log(err);
      });
  }, []);
  // console.log(listPart);
  useEffect(() => {
    console.log(111, listResult);
  }, [listResult]);
  const handleClickSubmit = () => {
    if (window.confirm("Bạn có chắc chắn muốn nộp bài?") === true) {
      // console.log("Done");
      navigate(`/minitest/${numpart}/${titletest}/result`);
    }
  };
  const handleTimeup = useCallback(() => {
    setIsTimeup(true);
  }, []);
  const handleClickExit = () => {
    if (
      window.confirm(
        "Bạn có thực sự muốn thoát, kết quả làm bài của bạn sẽ không được lưu?"
      ) === true
    ) {
      navigate("/fulltest");
    }
  };
  const numPart = +numpart.charAt(numpart.length - 1);
  const [listQues, setListQues] = useState([]);
  useEffect(() => {
    if (listPart.parts) {
      const partsApi = listPart?.parts[0];
      console.log(1111, listPart?.parts[0]);
      if (
        partsApi?.name === "Part 1" ||
        partsApi?.name === "Part 2" ||
        partsApi?.name === "Part 5"
        // partsApi?.name === "Part 4"
      ) {
        setListQues(partsApi?.partQuestions[0]?.questions);
      } else {
        let newPart3 = [];
        let newPart4 = [];
        let newPart6 = [];
        let newPart7 = [];
        if (partsApi?.name === "Part 3") {
          const temp = partsApi?.partParagraphs[0]?.paragraphs;
          temp.forEach((element) => {
            newPart3 = [...newPart3, ...element?.questions];
          });
          let i = 0;
          temp.forEach((item, index) => {
            newPart3[i].audioGroup = item?.content;
            // i++;
            i += item?.questions.length;
          });
        } else if (partsApi?.name === "Part 4") {
          const temp = partsApi?.partParagraphs[0]?.paragraphs;
          temp.forEach((element) => {
            newPart4 = [...newPart4, ...element?.questions];
          });
          let i = 0;
          temp.forEach((item, index) => {
            newPart4[i].audioGroup = item?.content;
            // i++;
            i += item?.questions.length;
          });
        } else if (partsApi?.name === "Part 6") {
          const temp = partsApi?.partParagraphs[0]?.paragraphs;
          temp.forEach((element) => {
            newPart6 = [...newPart6, ...element?.questions];
          });
          let i = 0;
          newPart6.forEach((item, index) => {
            if ((index + 4) % 4 === 0) {
              item.contentQuestion = temp[i]?.content;
              i++;
            }
          });
        } else if (partsApi?.name === "Part 7") {
          const temp = partsApi?.partParagraphs[0]?.paragraphs;
          temp.forEach((element) => {
            newPart7 = [...newPart7, ...element?.questions];
          });
          let i = 0;
          temp.forEach((item, index) => {
            newPart7[i].contentQuestion = item?.content;
            // i++;
            i += item?.questions.length;
          });
        }
        setQuestionsPart3(newPart3);
        setQuestionsPart4(newPart4);
        setQuestionsPart6(newPart6);
        setQuestionsPart7(newPart7);
        // setListQues(partsApi?.partParagraphs[0]?.paragraphs);
      }
    }
  }, [listPart]);
  console.log(listPart, listQues);

  return (
    <Container fluid>
      <div className={styles.heading}>
        <h2>
          PART {numpart.charAt(numpart.length - 1)} - {listPart?.name}
        </h2>
        <Button variant="outline-primary" onClick={handleClickExit}>
          Thoát
        </Button>
      </div>
      <div className={styles.testWrapper}>
        <div className={styles.testContent}>
          {/* <QuestionGroup
            isListening={dataTemplate()?.isListening}
            data={dataTemplate()?.questions}
            isTwoCols={dataTemplate()?.isTwoCols}
            listResult={listResult}
            onSetListResult={setListResult}
            // isFullTest={true}
            // // isFullTest={false}
            // indexTab={tabIndex}
            // onSelectTab={handleSelectTab}
            isTimeup={isTimeup}
          /> */}
          <QuestionGroup
            part={"Part " + numPart}
            iuFullTest={false}
            isListening={listPart?.parts?.[0]?.isListening}
            // data={listQues}
            data={
              numPart === 3
                ? questionsPart3
                : numPart === 4
                ? questionsPart4
                : numPart === 6
                ? questionsPart6
                : numPart === 7
                ? questionsPart7
                : listQues
            }
            isTwoCols={numPart === 6 || numPart === 7 ? true : false}
            listResult={listResult}
            onSetListResult={setListResult}
            isTimeup={isTimeup}
          />
        </div>
        <div className={styles.naviWrapper}>
          <div className={styles.naviInner}>
            <div className={styles.navMain}>
              <div>Thời gian còn lại:</div>
              <CountDownTimer onComplete={handleTimeup} timer={timer.current} />
              <Button
                variant="outline-primary"
                size="lg"
                onClick={handleClickSubmit}
              >
                {" "}
                NỘP BÀI
              </Button>
              <ListPart
                data={
                  numPart === 3
                    ? questionsPart3
                    : numPart === 4
                    ? questionsPart4
                    : numPart === 6
                    ? questionsPart6
                    : numPart === 7
                    ? questionsPart7
                    : listQues
                }
                title={"Part " + numPart}
                listRes={listResult}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default DoMiniTest;
