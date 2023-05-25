import React, { useState } from "react";
import style from "./UploadTest.module.scss"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SideBar from '../../components/SideBar/SideBar';

const UploadTest = () => {
    const navigate = useNavigate();
    const [testName, setTestName] = useState(null);
    const [TestFile, setTestFile] = useState(null);
    const [labelFile, setLabelTestfile] = useState("Choose a file test");
    const [audioFile, setAudioFile] = useState(null);
    const [labelAudioFile, setLabelAudiofile] = useState("Choose a file audio");

    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);
    const [image5, setImage5] = useState(null);
    const [image6, setImage6] = useState(null);
    const [labelImage1, setLabelImage1] = useState("Choose a picture");
    const [labelImage2, setLabelImage2] = useState("Choose a picture");
    const [labelImage3, setLabelImage3] = useState("Choose a picture");
    const [labelImage4, setLabelImage4] = useState("Choose a picture");
    const [labelImage5, setLabelImage5] = useState("Choose a picture");
    const [labelImage6, setLabelImage6] = useState("Choose a picture");


    console.log(window.localStorage.getItem('signin'));
    const checkAdmin =JSON.parse(window.localStorage.getItem('signin'));
    if(checkAdmin.data.username !== "caoduc4work@gmail.com"|| checkAdmin==null){
        navigate('/');
    }
    const handleTestChange = (event) => {
        const file = event.target.files[0];
        setTestFile(file);
        setLabelTestfile(file.name);
    };

    const handleAudioChange = (event) => {
        const file = event.target.files[0];
        setAudioFile(event.target.files[0]);
        setLabelAudiofile(file.name);
    };

    const handleImage1Change = (event) => {
        const file = event.target.files[0];
        setImage1(file);
        setLabelImage1(file.name);
    };
    const handleImage2Change = (event) => {
        const file = event.target.files[0];
        setImage2(file);
        setLabelImage2(file.name);
    };
    const handleImage3Change = (event) => {
        const file = event.target.files[0];
        setImage3(file);
        setLabelImage3(file.name);
    };
    const handleImage4Change = (event) => {
        const file = event.target.files[0];
        setImage4(file);
        setLabelImage4(file.name);
    };
    const handleImage5Change = (event) => {
        const file = event.target.files[0];
        setImage5(file);
        setLabelImage5(file.name);
    };
    const handleImage6Change = (event) => {
        const file = event.target.files[0];
        setImage6(file);
        setLabelImage6(file.name);
    };

    const handleTextName = (event) => {
        setTestName(event.target.value);
    }


    const handleSubmit = (event) => {
        const formData = new FormData();
        formData.append('name', testName);
        formData.append('excel', TestFile);
        formData.append('audio', audioFile);
        formData.append('image', image1, image2, image3, image4, image5, image6);
        // formData.append('image', [image1, image2, image3, image4, image5, image6]);

        event.preventDefault();
        console.log(formData);
        // console.log(formData.get('image1'));
        // console.log(image1);

        axios.post("http://tinhoccaogiaphat.com/admin/exam", formData
            , {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
            .then((res) => {
                console.log(res.data);

                // window.localStorage.setItem('addtest', 'yes');
                alert(res.data.message);
                if (res.data.status == 200)
                    navigate('/admin/managetest');
            })
            .catch((err) => {
                console.error(err);
            });
    };


    return (

        <div className={style.app}>
            <SideBar type="uploadtest"/>
            <div className={style.container}>


            <form className={style.upload_form} onSubmit={handleSubmit} enctype="multipart/form-data" >
                <div className={style.form_group}>
                    <div>
                        <label for="name" className={style.labeltext}>Test Name</label>
                        <input type="text" name="name" id="name" onChange={handleTextName} />
                    </div>
                    <div>
                        <p>Test</p>
                        <input type="file" name="test" id="test" className={style.inputfile} accept=".csv" onChange={handleTestChange} />
                        <label for="test">{labelFile}</label>
                    </div>
                    <div>

                        <p>Audio</p>
                        <input type="file" name="audio" id="audio" className={style.inputfile} accept="audio/*" onChange={handleAudioChange} />
                        <label for="audio">{labelAudioFile}</label>
                    </div>
                </div>
                <div className={style.form_group}>
                    <div>
                        <p>Question 1</p>
                        <input type="file" name="image1" id="image1" className={style.inputfile} accept="image/*" onChange={handleImage1Change} />
                        <label for="image1">{labelImage1}</label>
                    </div>
                    <div>
                        <p>Question 2</p>
                        <input type="file" name="image2" id="image2" className={style.inputfile} accept="image/*" onChange={handleImage2Change} />
                        <label for="image2">{labelImage2}</label>
                    </div>
                    <div>
                        <p>Question 3</p>
                        <input type="file" name="image3" id="image3" className={style.inputfile} accept="image/*" onChange={handleImage3Change} />
                        <label for="image3">{labelImage3}</label>
                    </div>
                    <div>
                        <p>Question 4</p>
                        <input type="file" name="image4" id="image4" className={style.inputfile} accept="image/*" onChange={handleImage4Change} />
                        <label for="image4">{labelImage4}</label>
                    </div>
                    <div>
                        <p>Question 5</p>
                        <input type="file" name="image5" id="image5" className={style.inputfile} accept="image/*" onChange={handleImage5Change} />
                        <label for="image5">{labelImage5}</label>
                    </div>
                    <div>
                        <p> Question 6</p>
                        <input type="file" name="image6" id="image6" className={style.inputfile} accept="image/*" onChange={handleImage6Change} />
                        <label for="image6">{labelImage6}</label>
                    </div>
                </div>
                <button type="submit" className={style.submit_button}>Upload</button>
            </form>
            </div>
        </div>
    );
}

export default UploadTest;
