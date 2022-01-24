import React, { useState, useEffect } from "react";
import { AppBar,Typography,makeStyles,Toolbar } from "@material-ui/core";
import Chart from "react-google-charts";
import { useParams } from "react-router";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
}));

function QuizReviewComponent() {

  const {answers} = useParams()
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

  const [dataObj, setDataobj] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [answer,setAnswer] = useState([0,0,0])
  

  useEffect(() => {
    const j = JSON.parse(data);
    const ar = Object.values(j);
    setDataobj(ar);
    const ans = answers.split(',')
    let newAns = []
    ans.forEach((a)=>{
      newAns.push(parseInt(a))
    })
    setAnswer(newAns)
  }, []);

  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const checkIndexIsAnswer = (ind, correctIndex) => {
    for (let index = 0; index < correctIndex.length; index++) {
      if (correctIndex[index] === ind) {
        return true;
      }
    }
    return false;
  };

  const questionObject = (qstn, index) => {
    return (
      <div key={index} className="px-4 py-2">
        <p className="text-lg text-custom-black font-semibold">
          {index + 1}) {qstn["question"]}
        </p>
        {qstn["answers"].map((ans, ind) => {
          return (
            <p
              key={qstn["answers"][ind]}
              className={
                checkIndexIsAnswer(ind, qstn["correctIndex"])
                  ? "text-custom-green"
                  : "text-custom-black"
              }
            >
              {letters[ind]}) {qstn["answers"][ind]}
            </p>
          );
        })}
        <div className="w-full h-px mt-3 bg-gray-200"></div>
      </div>
    );
  };

  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <AppBar style={{ backgroundColor: "white" }} position="fixed">
          <Toolbar>
            <Typography
              style={{ color: "#3e4853" }}
              className={classes.title}
              variant="h6"
            >
              Review
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div className="h-14"></div>
      <div className="flex justify-center mt-3 text-lg text-custom-black underline font-semibold">Test Results</div>
      <Chart
        className="w-full h-2/4 my-5"
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Question", "Score"],
          ["Total Questions", answer[0]],
          ["Correct Answers",answer[1]],
          ["Incorrect Answers",answer[2]],
          ["Other",0]

        ]}
        options={{
        //   title: "Your test performance",
          sliceVisibilityThreshold: 0.2, // 20%
        }}
        rootProps={{ "data-testid": "7" }}
      />
      <div>
        {dataObj.length > 0 ? (
          dataObj.map((item, ind) => {
            return questionObject(dataObj[ind], ind);
          })
        ) : (
          <p>No obj</p>
        )}
      </div>
    </div>
  );
}

export default QuizReviewComponent;
