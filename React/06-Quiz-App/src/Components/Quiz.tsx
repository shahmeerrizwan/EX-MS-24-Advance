import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Quiz() {
  
    const questions = [
        {
            question: '1 ) What does HTML stand for ?',
            options: ['Hyperlinks and Text Markup Language', 'Hypertext Markup Language', 'Home Tool Markup Language'],
            correctAnswer: 'Hypertext Markup Language'
        },
        {
            question: '2 ) Who is making the Web standards ?',
            options: ['Google', 'The World Wide Web Consortium', 'Microsoft'],
            correctAnswer: 'Microsoft'
        },
        {
            question: '3 ) Choose the correct HTML element for the largest heading:',
            options: ['<heading>', '<h6>', '<h1>'],
            correctAnswer: '<h1>'
        },
        {
            question: '4 ) What is the correct HTML element for inserting a line break ?',
            options: ['<linebreak>', '<br>', '<break>'],
            correctAnswer: '<br>'
        },
        {
            question: '5 ) What is the correct HTML for adding a background color ?',
            options: ['<body bg="yellow">', '<background>yellow</background>',  '<body style="background-color:yellow;">'],
            correctAnswer:  '<body style="background-color:yellow;">'
        },
        {
          question: '6 ) Choose the correct HTML element to define important text :',
          options: ['<strong>', '<b>',  '<i>'],
          correctAnswer:  '<i>'
      },
      {
        question: '7 ) Choose the correct HTML element to define emphasized text :',
        options: ['<italic>', '<i>',  '<em>'],
        correctAnswer:  '<em>'
    },
    {
      question: '8 ) What is the correct HTML for creating a hyperlink ?',
      options: ['<a>http://www.w3schools.com</a>', '<a href="http://www.w3schools.com">W3Schools</a>',  '<a url="http://www.w3schools.com">W3Schools.com</a>'],
      correctAnswer:  '<a href="http://www.w3schools.com">W3Schools</a>'
    },
    {
      question: '9 ) Which character is used to indicate an end tag ?',
      options: ['*', '/',  '<'],
      correctAnswer:  '/'
    },
    {
      question: '10 ) Choose the correct HTML element to define bold text :',
      options: ['<bold>', '<b>',  '<strong>'],
      correctAnswer:  '<b>'
    },
    ]
    
    const [currentIndex, setCurrentIndex] = useState(0)
    const [marks, setMarks] = useState(0)
    
    const checkAnswer = (a: any, b: any) => {
        if (a === b) {
            setMarks(marks + 1)
        }
        if (currentIndex + 1 === questions.length) {
           toggleModal()
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }
    
    const obtainedMarks = (marks / questions.length) * 100;
    const totalMarks = () => {
        
        if (obtainedMarks >= 70) {
         return <h2>Congratulations You Are Passed 🫡</h2>  
        } else {
             return <h2>You Are Fail 😢 <br/> Better Luck Next Time 🥹 </h2>
        }
    };
    
    
    const [modal, setModal] = useState(false);
    
    const toggleModal = () => {
        setModal(!modal);
        if (modal) {
            setMarks(0); 
        }
    };
    if (modal) {
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")
    }
    
    return <>
        <div className="p-2">
            <div className="container">
                <div className="p-2 mb-3 bg-light rounded shadow">
                    <p className="text-center fw-semibold">Question {currentIndex + 1} / {questions.length}</p>
                    <h3>Q{questions[currentIndex].question}</h3>
                </div>
                <div className="row fw-semibold">
                    {questions[currentIndex].options.map((x, i) => <div
                        key={i} className="col-md-4 p-2">
                        <button
                            onClick={() => checkAnswer(x, questions[currentIndex].correctAnswer)}
                            className="btn w-100 btn-danger rounded-0"
                        >{x}</button>
                    </div>)}
                </div>
                <div className='right'>
                {currentIndex !== questions.length - 1 && (
                  <button onClick={() => {
                    setCurrentIndex(currentIndex + 1)
                }} className="btn btn-success rounded-2 fw-semibold">Skip</button>
                )}
                    <p className='fw-bolder'>Total Marks are {marks}</p>
                </div>
            </div>
        </div>
    
        {modal && (
                    <div className='modal'>
                        <div  className='overlay'></div>
                        <div className='modal-content'>
                            <h2 className='h1-1'>Quiz Completed</h2>
                            <p className='p-l-1'>QUIZ APP</p>
                            {totalMarks()}
                            <p>
                              <i>Remember "Practice Make A Man Perfect 💯"</i>
                            </p>
                            <h4>Correct Mcqs is {marks} Out Of {questions.length}</h4>
                            <h3>Your Percentage is {obtainedMarks}%</h3>
                            <button  onClick={toggleModal} className='btn btn-danger d-flex justify-content-center shadow m-auto'>Restart Quiz</button>
                            <button
                            className='close-modal' onClick={toggleModal}>
                            &times;
                            </button>
                        </div>
                    </div>
                )}
    </>
    }
