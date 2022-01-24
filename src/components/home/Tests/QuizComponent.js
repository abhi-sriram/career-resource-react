import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import textUppercase from "../../widgets/textUppercaseFunction";
import {useHistory,useParams} from 'react-router-dom'

function QuizComponent() {

  const history = useHistory()
  const {branch,career} = useParams()

  const data = `[
    {
    "question": "What is the scientific name of a butterfly?",
    "answers": [
    "Apis",
    "Coleoptera",
    "Formicidae",
    "Rhopalocera"
    ],
    "type":0,
    "correctIndex": [3]
    },
    {
      "question":"The earth is the fourth planet from the sun.",
      "answers":[
        "true",
        "false"
      ],
      "correctIndex": [1],
      "type":0
    },
    {
    "question": "How hot is the surface of the sun?",
    "answers": [
    "1,233 K",
    "5,778 K",
    "12,130 K",
    "101,300 K"
    ],
    "type":0,
    "correctIndex": [1]
    },
    {
    "question": "Who are the actors in The Internship?",
    "answers": [
    "Ben Stiller, Jonah Hill",
    "Courteney Cox, Matt LeBlanc",
    "Kaley Cuoco, Jim Parsons",
    "Vince Vaughn, Owen Wilson"
    ],
    "type":0,
    "correctIndex": [3]
    },
    {
    "question": "What is the capital of Spain?",
    "answers": [
    "Berlin",
    "Buenos Aires",
    "Madrid",
    "San Juan"
    ],
    "type":0,
    "correctIndex": [2]
    },
    {
      "question": "Which two of the following numbers have a product that is between –1 and 0? Indicate both of the numbers.",
      "answers": [
        "–20",
    "–10",
    "2^–4",
    "3^–2"
    
      ],
      "correctIndex":[2,3],
      "type":1
    },
    {
    "question": "What are the school colors of the University of Texas at Austin?",
    "answers": [
    "Black, Red",
    "Blue, Orange",
    "White, Burnt Orange",
    "White, Old gold, Gold"
    ],
    "type":0,
    "correctIndex": [2]
    },
    {
    "question": "What is 70 degrees Fahrenheit in Celsius?",
    "answers": [
    "18.8889",
    "20",
    "21.1111",
    "158"
    ],
    "type":0,
    "correctIndex": [2]
    },
    {
    "question": "When was Mahatma Gandhi born?",
    "answers": [
    "October 2, 1869",
    "December 15, 1872",
    "July 18, 1918",
    "January 15, 1929"
    ],
    "type":0,
    "correctIndex": [0]
    },
    
    {
    "question": "How far is the moon from Earth?",
    "answers": [
    "7,918 miles (12,742 km)",
    "86,881 miles (139,822 km)",
    "238,400 miles (384,400 km)",
    "35,980,000 miles (57,910,000 km)"
    ],
    "type":0,
    "correctIndex": [2]
    },
    {
    "question": "What is 65 times 52?",
    "answers": [
    "117",
    "3120",
    "3380",
    "3520"
    ],
    "type":0,
    "correctIndex": [2]
    },
    {
    "question": "How tall is Mount Everest?",
    "answers": [
    "6,683 ft (2,037 m)",
    "7,918 ft (2,413 m)",
    "19,341 ft (5,895 m)",
    "29,029 ft (8,847 m)"
    ],
    "type":0,
    "correctIndex": [3]
    },
    {
    "question": "When did The Avengers come out?",
    "answers": [
    "May 2, 2008",
    "May 4, 2012",
    "May 3, 2013",
    "April 4, 2014"
    ],
    "type":0,
    "correctIndex": [1]
    },
    {
    "question": "What is 48,879 in hexidecimal?",
    "answers": [
    "0x18C1",
    "0xBEEF",
    "0xDEAD",
    "0x12D591"
    ],
    "type":0,
    "correctIndex": [1]
    }
    ]`;

  const [value, setValue] = useState(-1);
  const [checkboxValue, setCheckboxValue] = useState([]);
  const [dataObj, setDataobj] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [openSnackbar,setOpenSnackbar] = useState(false);
  const [date,setDate] = useState(Date.now() + 2 * 60 * 1000);
  // answers object will be like
  /*
    answers = [
      {
        'index':0,
        'answer':[1]
      }
    ]
  */

  useEffect(() => {
    // setDate(Date.now() + 2 * 60 * 1000)
    const j = JSON.parse(data);
    const ar = Object.values(j);
    setDataobj(ar);
  }, []);

  


  const handleChange = (item, type) => {
    if (type === 0) {
      setValue(item);
    } else {
      // type 1

      const l = checkboxValue;
      const b = l.indexOf(item);
      if (b !== -1) {
        l.splice(b, 1);
      } else {
        l.push(item);
      }
      setCheckboxValue(l);
    }
  };

  const getRadioWidget = (ans) => {
    return (
      <div className="mx-5 mt-2">
        <div>
          {ans.map((item, index) => {
            return (
              <div key={item} className="flex flex-row items-center mb-2">
                <input
                  className="w-7 h-7"
                  type="radio"
                  value={index}
                  name="radio-button"
                  onClick={() => handleChange(index, 0)}
                />
                <div className="w-full ml-2 bg-white px-2 py-3 rounded-lg" onClick={() => handleChange(index, 0)} >
                <p  className=" text-custom-black ">
                  {textUppercase(item)}
                </p>
                </div>
               
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const getCheckBoxWidget = (ans) => {
    return (
      <div className="mx-5 mt-2">
        <div>
          {ans.map((item, index) => {
            return (
              <div key={item} className="flex flex-row items-center mb-2">
                <input
                  className="w-7 h-7"
                  onClick={() => handleChange(index, 1)}
                  type="checkbox"
                  name="checkbox-button"
                  value={index}
                />
                <p className="w-full ml-2 bg-white px-2 py-3 rounded-lg text-custom-black ">
                  {textUppercase(item)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const quizCompleted = () => {
    // answers = [
    //   {
    //     'index':0,
    //     'answer':[1]
    //   }
    // ]
    
    let correct = 0;
    quizAnswers.forEach((obj,index)=>{
      // if(JSON.stringify(obj['correctIndex'].sort())===JSON.stringify(quizAnswers[index].answer.sort())){
      //   correct++;
      // }
      if(JSON.stringify(obj.answer.sort())===JSON.stringify(dataObj[index]['correctIndex'].sort())){
        correct++;
      }

    })
    const ans= [dataObj.length,correct,dataObj.length-correct]
    history.replace('/activity/'+branch+'/'+career+'/'+ans)
  };
  const submitAndUpdateQuestion = (type, len) => {
    if (value === -1 && checkboxValue.length === 0) {
     
      setOpenSnackbar(true);
      
      return;
    }
    if (type === 0) {
      const ansObj = {
        index: quizIndex,
        answer: [value],
      };
      const ans = quizAnswers;
      ans.push(ansObj);
      setQuizAnswers(ans);
      setValue(-1);
    } else {
      const ansObj = {
        index: quizIndex,
        answer: checkboxValue,
      };
      const ans = quizAnswers;
      ans.push(ansObj);
      setQuizAnswers(ans);
      setCheckboxValue([]);
    }
    if (quizIndex < len-1) {
      const i = quizIndex + 1;
      setQuizIndex(i);
    } else {
      quizCompleted();
    }
  };

  const buildQuizWidget = (qstnObj, len) => {
    return (
      <div className="h-10 relative w-full flex-none bg-custom-blue z-0">
        <div className="mx-5 p-4 relative z-10 rounded-lg bg-white">
          <p className="text-xl font-bold text-custom-black">
            Q{quizIndex + 1} of {len}
          </p>
          <p className="mt-5 text-lg text-custom-black">
            {qstnObj["question"]}
          </p>
        </div>
        {qstnObj["type"] === 0
          ? getRadioWidget(qstnObj["answers"])
          : getCheckBoxWidget(qstnObj["answers"])}
        <div
          onClick={() => submitAndUpdateQuestion(qstnObj["type"], len)}
          className="h-10 mx-5 my-5 rounded-md flex flex-col items-center justify-center bg-custom-blue z-1 hover:cursor-pointer"
        >
          <p className="text-white text-sm">{quizIndex<len-1?'Submit':'Finish'}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="h-10 w-full pl-5 pt-2 flex-none bg-custom-blue">
        <Countdown
          className="text-custom-black font-bold"
          autoStart={true}
          
          date={date}
          daysInHours={true}
          onComplete={quizCompleted}

        />
      </div>
      <div className="bg-gray-100  flex-1 overflow-auto w-full scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100">
        {dataObj.length > 0 ? (
          buildQuizWidget(dataObj[quizIndex], dataObj.length)
        ) : (
          <div>There is no data</div>
        )}
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={openSnackbar}
        autoHideDuration={4000}
        message="Select option"
        action={
          <React.Fragment>
          
            <IconButton size="small" aria-label="close" color="inherit" onClick={()=>{
              setOpenSnackbar(false);
            }}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}

export default QuizComponent;
