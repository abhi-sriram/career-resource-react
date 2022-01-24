import React, { useState, useEffect, useContext } from "react";

const DataContext = React.createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
    const streamList = [
      'engineering',
      'business',
    ]
    const count = {
        'engineering':{
            branch:9,
            career:40,
            resource:90
        },
        'business':{
            branch:8,
            career:42,
            resource:60
        }
    }
  const branchMap = {
    engineering: [
      "computer science engineering",
      "aeronautical engineering",
      "chemical engineering",
      "civil engineering",
      "electrical and electronics engineering",
      "electronics and communication engineering",
      "information technology",
      "mechanical engineer",
      "metallurgical  engineer",
    ],
    business: [
      "accounting",
      "business management and administration",
      "business marketing and advertising",
      "economics and finance",
      "human resources",
      "international business",
      "public relations",
      "supply chain management",
    ],
  };
  const careerMap = {
    "computer science engineering": [
      "app developer",
      "database administrator",
      "ethical hacker",
      "software engineer",
      "web developer",
    ],
    "aeronautical engineering": ["aircraft maintainence engineer"],
    "chemical engineering": [
      "bio technologist",
      "chemical engineer",
      "color technologist",
      "energy engineer",
      "nuclear engineer",
      "petroleum engineer",
    ],
    "civil engineering": [
      "civil project manager",
      "senior civil engineer",
      "environmental engineer",
      "geotechnical engineer",
    ],
    "electrical and electronics engineering": [
      "broadcast engineer",
      "control and instrumentation engineer",
      "electrical controls engineer",
      "electrical engineer",
      "manufacturing engineer",
    ],
    "electronics and communication engineering": [
      "desktop support engineer",
      "electronics and communication engineer",
      "electronics design and development engineer",
      "electronics engineer",
      "system control engineer",
    ],
    "information technology": [
      "big data engineer",
      "computer information system engineer",
      "database administrator",
      "software engineer",
      "web developer",
    ],
    "mechanical engineer": [
      "automation engineer",
      "automobile engineer",
      "combustion engineer",
      "industrial engineer",
      "mechanical engineer",
      "robotics engineer",
    ],
    "metallurgical  engineer": [
      "industrial engineer",
      "material engineer",
      "welding engineer",
    ],
    accounting: [
      "book keepers",
      "budget analysis",
      "corporate accountants",
      "cost estimators",
      "credit analysis",
      "insurance appraisers",
      "tax examiners",
    ],
    "business management and administration": [
      "business development executive",
      "director of operations",
      "management analysts",
      "operations and logistic manager",
      "operations research analysts",
      "project and project managers",
    ],
    "business marketing and advertising": [
      "advertising sales specialist or account managers",
      "market and consumer research analyst",
      "media or promotions manager",
      "public relations specialists",
    ],
    "economics and finance": [
      "actuaries",
      "financial analysts",
      "loan or insurance underwriters",
      "personal or corporate planners",
      "stocks and commodities brokers",
    ],
    "human resources": [
      "compensation and benefits manager",
      "human resource assistants",
      "labour and employee relations manager",
      "staffing or recruting specialists",
      "training managers",
    ],
    "international business": [
      "foreign service officers",
      "global procurement specialists",
      "import/export specialist",
      "international currency traders",
      "trade specialists",
    ],
    "public relations": [
      "corporate and community relations manager",
      "lobbyists",
      "public affair officers",
      "publicists",
      "social media managers",
    ],
    "supply chain management": [
      "inventory managers",
      "logistics analysts",
      "transportation coordinators",
      "warehousing and distribution managers",
    ],
  };

  //   const careerMap = null;
  //   const branchMap = null;
//   const streamList = null;

  const values = { streamList, branchMap, careerMap,count };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
}
