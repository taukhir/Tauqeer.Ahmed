import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  projects: any = [
    {
      id: 1,
      title: "Read data from Google spreadsheet in Angular",
      desc: "",
      livedemo: "https://mehulk05.github.io/MyShop/#/",
      githurl: "https://github.com/mehulk05/MyShop",
      mediumlink:
        "https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4",
      imgUrl: "assets/images/z1.png",
      tech: "Angular 10 , Google SpreadsheetApi",
    },

    {
      id: 2,
      title: "Blog App Using MERN Stack",
      desc: "",
      livedemo: "https://mehulk05.github.io/Blogapp-using-MERN/#/",
      githurl: "https://github.com/mehulk05/Blogapp-using-MERN",
      mediumlink: "https://itnext.io/blog-app-using-mern-stack-b0b4d69d7ea1",
      imgUrl: "assets/images/z26.png",
      tech: "React, Node, MongoDB, Express",
    },

    {
      id: 3,
      title: "CRUD operation using MEAN stack",
      desc: "",
      livedemo: "https://mehulk05.github.io/Blog-using-mean/#/",
      githurl: "https://github.com/mehulk05/Blog-using-mean",
      mediumlink:
        "https://itnext.io/crud-operation-using-mean-stack-7dfa2f51ec8c",
      imgUrl: "assets/images/z27.png",
      tech: "Angular 10, Node, MongoDB, Express",
    },

    {
      id: 4,
      title: "Multiroom Chat Application in Node JS",
      desc: "",
      livedemo: "https://chatapp-using-node.herokuapp.com/",
      githurl: "https://github.com/mehulk05/Chat-app-using-Nodejs",
      mediumlink:
        "https://medium.com/weekly-webtips/building-a-multiroom-chat-application-in-node-js-8a8adca5acf2",
      imgUrl: "assets/images/z23.png",
      tech: "Node JS,Socket IO",
    },

    {
      id: 5,
      title: "Integrate Medium Blogs on your React App",
      desc: "",
      livedemo: "https://mehulk05.github.io/Medium-Blog-On-React-App#/",
      githurl: "https://github.com/mehulk05/Medium-Blog-On-React-App",
      mediumlink:
        "https://javascript.plainenglish.io/how-to-add-medium-blogs-on-your-react-app-a3898a729aad",
      imgUrl: "assets/images/z4.png",
      tech: "React JS",
    },

    {
      id: 6,
      title: "News App using ReactJS (Parsing XML to JSON)",
      desc: "",
      livedemo: "https://mehulk05.github.io/NewsApp-using-React",
      githurl: "https://github.com/mehulk05/NewsApp-using-React",
      mediumlink: "https://codeburst.io/news-app-using-reactjs-f9752d7ab6ce",
      imgUrl: "assets/images/z24.png",
      tech: "React JS, XMl to JSON",
    },

    {
      id: 7,
      title: "Medium-Like Blog App Using Angular 9 and Firebase",
      desc: "",
      livedemo: "https://mehulk05.github.io/Blog-Book/",
      githurl: "https://github.com/mehulk05/Blog-Book",
      mediumlink:
        "https://codeburst.io/blogging-app-using-angular-9-and-firebase-98e36168d850",
      imgUrl: "assets/images/z21.png",
      tech: "HTML, Bootstrap, CSS, Angular-9, Firebase",
    },

    {
      id: 8,
      title: "COVID 19 Tracker (Statistics) app Using Angular",
      desc: "",
      livedemo: "https://mehulk05.github.io/COVOID-19/",
      githurl: "https://github.com/mehulk05/COVOID-19",
      mediumlink:
        "https://codeburst.io/covoid-19-tracker-statistics-app-using-angular-2358347b3d1f",
      imgUrl: "assets/images/z2.png",
      tech: "Angular 10 ,Bootstrap,Javascript",
    },

    {
      id: 9,
      title: "Weather App with React",
      desc: "",
      livedemo: "https://mehulk05.github.io/React-Weather/",
      githurl: "https://github.com/mehulk05/React-Weather-App",
      mediumlink:
        "https://medium.com/analytics-vidhya/weather-app-with-react-adaa7268bbdb",
      imgUrl: "assets/images/z9.png",
      tech: "React, Open MAp Api",
    },

    {
      id: 10,
      title: "Spring Boot + Angular 8 CRUD Example",
      desc: "",
      livedemo:
        "https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example",
      githurl: "https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example",
      mediumlink:
        "https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54",
      imgUrl: "assets/images/z28.png",
      tech: "Angular8, Java ,Hibernate",
    },

    {
      id: 11,
      title: "Personal Portfolio Using Angular",
      desc: "",
      livedemo: "https://personal-portfolio0320.000webhostapp.com/",
      githurl: "https://github.com/mehulk05/Personal-Portfolio-Angular-Updated",
      mediumlink:
        "https://javascript.plainenglish.io/personal-portfolio-using-angular-8-and-bootstrap-5dde6fc7cf9b",
      imgUrl: "assets/images/z11.png",
      tech: "Angular ,Bootstrap",
    },

    {
      id: 12,
      title: "Personal Portfolio Using Django",
      desc: "",
      livedemo: "https://personal-portfolio0320.000webhostapp.com/",
      githurl: "https://github.com/mehulk05/My-Personal-Portfolio",
      mediumlink:
        "https://mehulkothari05.medium.com/personal-portfolio-using-django-dba49c355905",
      imgUrl: "assets/images/z12.png",
      tech: "Django",
    },

    {
      id: 13,
      title: "Movie Success Prediction",
      desc: "",
      livedemo: "https://mehulkothari05.medium.com/",
      githurl: "https://github.com/mehulk05",
      mediumlink:
        "https://mehulkothari05.medium.com/movie-success-prediction-a67d871a7b1",
      imgUrl: "assets/images/z13.png",
      tech: "Python, Machine Learning, Django Framework.",
    },

    {
      id: 14,
      title: "Matrimonial Website",
      desc: "",
      livedemo: "https://mehulkothari05.medium.com/",
      githurl: "https://github.com/mehulk05/Matrimonial-Website.git",
      mediumlink:
        "https://mehulkothari05.medium.com/matrimonial-website-9cd5247f477d",
      imgUrl: "assets/images/z14.png",
      tech: "HTML, CSS, Bootstrap, Jquery",
    },
  ];

  about =
    "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do.";

  about2 =
    "Software developer with 3+ years of experience in overseeing all aspects of the Software Development Life Cycle, from extensive analysis and design through execution and maintenance. Well-versed in technology and writing code to create systems that are reliable and user-friendly. Confident communicator, strategic thinker, and innovative creator to develop software that is customized to meet a company’s organizational needs, highlight their core competencies, and further their success.";
  resumeurl =
    "https://drive.google.com/file/d/1vcchqx1EUOP24uhuMueIlOW-3Glkd1z-/view?usp=sharing";

  skillsData: any = [
    {
      id: "1",
      skill: "Java",
      progress: "85%",
    },
    {
      id: "2",
      skill: "Javascript",
      progress: "85%",
    },
    {
      id: "3",
      skill: "Angular 2+",
      progress: "80%",
    },
    {
      id: "4",
      skill: "Spring Boot",
      progress: "80%",
    },
    {
      id: "5",
      skill: "MySql ,MongoDb, Cassandra",
      progress: "80%",
    },
    {
      id: "6",
      skill: "Camunda",
      progress: "70%",
    },
  ];

  educationData: any = [
    {
      id: "1",
      from_to_year: "2015 - 2019",
      education: "Bachelor's Degree",
      stream: "Bachelor of Engineering",
      info: `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.  
Won the Best Student Award 3 times for excellent Academic records at College. 
Maintained above 9.1 spi in every semester of college academic .`,
      institution: "ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD",
    },
    {
      id: "2",
      from_to_year: "2013 - 2015",
      education: "Higher Secondary",
      stream: "Science and Mathematics",
      institution: "GYANDEEEP VIDHYALAYA,AHMEDABAD",
      info: `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`,
    },
    {
      id: "3",
      from_to_year: "2012 - 2013",
      education: "Secondary  School",
      stream: "Science and Mathematics",
      institution: "GYANDEEEP VIDHYALAYA,AHMEDABAD",
      info: `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`,
    },
  ];
  exprienceData: any = [
    {
      id: 1,
      company: "Optum Global Solutions",
      location: "Bangalore",
      timeline: "Nov 2021 - Present",
      role: "Software Engineer",
      work: `Technologies : Java, JavaScript, Angular, Spring Boot, MySql . 
      Excelled at rapid application development and management of technologies issues for assigned projects, earning the highest customer satisfaction rating for all software solutions delivered. Collaborated with team & developed a tool that reduced QA efforts by 20% . Contributed software engineering expertise in the development of products through the software lifecycle, from requirements definition through successful deployment . Collaborating with team of Scrum Master, Product Managers & QA in Agile Methodology.`,
    },
    {
      id: 2,
      company: "Tecnotree Convergence Pvt Ltd",
      location: "Bangalore",
      timeline: "Aug 2019 to Oct 2021",
      role: "Software Engineer",
      work: `Technologies : Java, JavaScript, Angular, Spring Boot, MySql, Microservices, RESTful API's, Camunda, Zeebe . 
      Effectively addressed complex bugs & coded based on specific design specifications . Excelled at rapid application development and management of technologies issues for assigned projects, earning the highest customer satisfaction rating for all software solutions delivered . Engineered a multi-threaded model for Client which processes thousands of invoices every month . Designed microservices to integrate digital products with third-party applications based on the requirement . Developed an internal tool for time tracking (capture employee’s efforts) & saved operational costs for the organization . Redesigned company’s internal tools to optimize page's performance for faster loading and browsing. Created reports & charts based on employee utilization on projects, helps higher management to trace employee utilization . Modeled Zeebe and Camunda workflows using JavaScript, Java, Restful web services & BPMN 2.0 based on the design specification . Testing and deploying workflows, microservices & applications in Dev & QA environments.`,
    },
    
  ];
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
