(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{15:function(e,a,t){e.exports=t.p+"static/media/profilepic.c793c56e.jpeg"},22:function(e,a,t){e.exports=t(44)},27:function(e,a,t){},35:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),o=t.n(r),s=(t(27),t(2)),i=t(3),c=t(5),m=t(4),u=t(13),p=t(8),d=t.n(p),h=t(14),g=t.n(h),E=(t(35),t(36),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"day"},l.a.createElement("main",{className:"App-main"},l.a.createElement("h1",{className:"intro"},"Hi, I'm\xa0",e.name),l.a.createElement("div",{className:"tagline"},l.a.createElement(g.a,null,e.roles.map((function(e){return l.a.createElement(d.a,{cursor:{blink:!0},key:e},e,l.a.createElement(d.a.Backspace,{count:e.length+1,delay:1e3}))})))),l.a.createElement("div",{className:"icons-social"},e.socialLinks&&e.socialLinks.map((function(e){return l.a.createElement("a",{key:e.name,target:"_blank",rel:"noopener noreferrer",href:"".concat(e.url)},l.a.createElement("i",{className:e.className}))})))))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),t}(n.Component)),v=t(15),f=t.n(v),w=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.resumeData.name,a=f.a,t=this.props.resumeData.aboutme,n=this.props.resumeData.address.city,r=this.props.resumeData.address.state,o=this.props.resumeData.address.zip,s=this.props.resumeData.phone,i=this.props.resumeData.email,c=this.props.resumeData.resumedownload;return console.log("profilepic",a),l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:a,alt:"".concat(e,"'s Profile Pic")})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,t),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e),l.a.createElement("br",null),l.a.createElement("span",null,n,l.a.createElement("br",null),r,",",o),l.a.createElement("br",null),l.a.createElement("span",null,s),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("a",{href:"mailto:tbakerx@gmail.com"},i)))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:c,className:"button"},l.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),t}(n.Component),k=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map((function(e){return l.a.createElement("div",{key:e.Website,className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,l.a.createElement("a",{href:e.Website},e.CompanyName)),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.MonthOfJoining,",",e.YearOfJoining," ","-",e.WorkingCurrently?"Present":"".concat(e.MonthOfLeaving,"-").concat(e.YearOfLeaving))),l.a.createElement("p",null,e.Achievements)))})))),l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map((function(e){return l.a.createElement("div",{key:e.UniversityName,className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing))))})))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"row"},e.skills&&e.skills.map((function(e){return l.a.createElement("div",{key:e.skillName,className:"two column software-skill-inline align-center"},l.a.createElement("div",null,l.a.createElement("img",{src:e.imgurl,className:"skillimage",alt:"skillimage"}),l.a.createElement("h6",null,e.skillName)))}))))))}}]),t}(n.Component),b=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Projects will be uploaded soon!",l.a.createElement("br",null)," ","You can check them on CV currently."))))}}]),t}(n.Component),N=t(20),y=t(16),_=t(17),O=t(18),S=t.n(O),j=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",null,l.a.createElement(N.a,{pauseOnHover:!0,getControlsContainerStyles:function(e){switch(e){case"CenterLeft":return{"margin-left":"-70px"};case"CenterRight":return{"margin-right":"-70px"};case"BottomCenter":default:return{display:"None"}}},defaultControlsConfig:{pagingDotsStyle:{fill:"white"}}},e.testimonials&&e.testimonials.map((function(e){return l.a.createElement("div",{key:e.username,className:"align-center"},l.a.createElement("div",null,l.a.createElement(_.a,{name:e.username,imgSrc:e.user_image_url,options:{tooltip:!0}})),l.a.createElement("cite",null,e.username),l.a.createElement("div",null,l.a.createElement(y.a,{countryCode:e.reviewer_country_code,svg:!0,style:{width:"2em",height:"2em"}})),l.a.createElement("div",null,l.a.createElement("blockquote",null,l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-quote-left super"})," ",e.comment," ",l.a.createElement("i",{className:"fa fa-quote-right super"})))),l.a.createElement("div",{className:"bottom"},l.a.createElement(S.a,{rating:e.value,starRatedColor:"gold",numberOfStars:5,starDimension:"20px",starSpacing:"5px",name:"rating"})))}))))," ")," ")," ")}}]),t}(n.Component),D=t(6),C=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).submitForm=e.submitForm.bind(Object(D.a)(e)),e.state={status:""},e}return Object(i.a)(t,[{key:"submitForm",value:function(e){var a=this;e.preventDefault();var t=e.target,n=new FormData(t),l=new XMLHttpRequest;l.open(t.method,t.action),l.setRequestHeader("Accept","application/json"),l.onreadystatechange=function(){l.readyState===XMLHttpRequest.DONE&&(200===l.status?(t.reset(),a.setState({status:"SUCCESS"})):a.setState({status:"ERROR"}))},l.send(n)}},{key:"render",value:function(){var e=this.state.status,a=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("form",{onSubmit:this.submitForm,action:a.formSpreeUrl,method:"POST"},l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"email",name:"email"}),l.a.createElement("label",null,"Message:"),l.a.createElement("textarea",{type:"text",name:"message",style:{minHeight:"200px"}}),"SUCCESS"===e?l.a.createElement("p",null,"Thanks!"):l.a.createElement("button",null,"Submit"),"ERROR"===e&&l.a.createElement("p",null,"Ooops! There was an error."))),l.a.createElement("aside",{className:"twelve columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Linked in:",l.a.createElement("a",{href:a.linkedinId},a.name))))))}}]),t}(n.Component),A=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map((function(e){return l.a.createElement("li",{key:e.url},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),F={imagebaseurl:"https://atiqurrehman123.github.io/",name:"Atiq ur Rehman",image:"sample-image.jpg",roles:["Frontend Developer","Web Developer","Full Stack Developer","MERN Stack Developer","Android Developer","Backend Engineer"],formSpreeUrl:"https://formspree.io/xbjzaddd",resumedownload:"https://docs.google.com/document/d/1_rN90C5z9ofqpHxBtN1VLfaruTr7N7M3NL08K7dr2kk/edit?usp=sharing",linkedinId:"https://www.linkedin.com/in/atiq-ur-rehman-692559176/",skypeid:"Your skypeid",roleDescription:"I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles or simply play games in my free time.",socialLinks:[{name:"facebook",url:"https://www.facebook.com/atiqu555/",className:"fa fa-facebook-square"},{name:"linkedin",url:"https://www.linkedin.com/in/atiq-ur-rehman-692559176/",className:"fa fa-linkedin"},{name:"stack-overflow",url:"https://stackoverflow.com/users/11054242/atiq-ur-rehman",className:"fa fa-stack-overflow"},{name:"github",url:"https://github.com/atiqurrehman123",className:"fa fa-github"},{name:"twitter",url:"https://twitter.com/atiqu555",className:"fa fa-twitter"},{name:"fiverr",url:"https://www.fiverr.com/atiq_ur_rehman6?up_rollout=true",className:"fa fa-fonticons"}],aboutme:"Software engineering graduate with an emphasis in web development. Dedicated to implementing new strategies and improving communications between departments. Experienced in ReactJS,MongoDB,NodeJs",address:{city:"Islamabad",state:"Punjab ,Pakistan",zip:"43600"},phone:"+923165244023",email:"atiqu555@gmail.com",website:"https://rbhatia46.github.io",education:[{UniversityName:"COMSATS Institute of Information Technology, Islamabad Attock Campus",specialization:"Bachelor of Science in Computer Science (BCS)",MonthOfPassing:"Jul",YearOfPassing:"2020"},{UniversityName:"Army Public School and College Attock Cantt",specialization:"Intermediate of pre engineering",MonthOfPassing:"Aug",YearOfPassing:"2015"}],work:[{CompanyName:"STech AI",Website:"https://stech.ai",specialization:"Software Engineer / React / Frontend",YearOfJoining:"2021",MonthOfJoining:"Jun",WorkingCurrently:!0,MonthOfLeaving:"",YearOfLeaving:"",Achievements:"Working mainly on MVP projects. Product base applications. Working mainly on  React Frontend"},{CompanyName:"Softoo",Website:"https://softoo.co",specialization:"Backend Developer / NodeJs Developer / AWS",YearOfJoining:"2020",MonthOfJoining:"Aug",WorkingCurrently:!1,MonthOfLeaving:"December",YearOfLeaving:"2020",Achievements:"Served\xa0as\xa0Back-end developer mainly on NodeJs and AWS based services. Learned to manage and deploy serverless architectures on AWS Lambda and using API gateway as an endpoint to build REST\xa0API. Used and developed skills in using NoSQL databases such as MongoDB, DynamoDB. Have great experience with source control tools such as Github and Codecommit. Have experience with other useful services such as Socket.io.\xa0Other than that developed skills in dealing with clients and Learnt to adapt to the organization's culture."},{CompanyName:"Fiverr",specialization:"Freelancing",Website:"https://www.fiverr.com/atiq_ur_rehman6?up_rollout=true",YearOfJoining:"2020",MonthOfJoining:"DEC",WorkingCurrently:"Not working right now due to job load",MonthOfLeaving:"",YearOfLeaving:"",Achievements:"Delivered over 5+ projects on Fiverr for my clients from concept to completion with positive ratings."}],skillsDescription:"FULL STACK DEVELOPER WHO WANT TO KEEP EXPLORING ",skills:[{skillName:"html-5",imgurl:"https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.png"},{skillName:"css3",imgurl:"https://pngimage.net/wp-content/uploads/2018/06/logo-css-png-5.png"},{skillName:"JavaScript",imgurl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"},{skillName:"reactjs",imgurl:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"},{skillName:"nodejs",imgurl:"https://images.tutorialedge.net/images/node.png"},{skillName:"npm",imgurl:"https://miro.medium.com/max/900/1*9W9ar6kWg8RTB3vYYwti-w.png"},{skillName:"mongodb",imgurl:"https://seeklogo.net/wp-content/uploads/2015/10/mongodb-logo-vector-download.jpg"},{skillName:"aws",imgurl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/AWS_Simple_Icons_AWS_Cloud.svg/1280px-AWS_Simple_Icons_AWS_Cloud.svg.png"},{skillName:"firebase",imgurl:"https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png"},{skillName:"python",imgurl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"},{skillName:"docker",imgurl:"https://cdn.worldvectorlogo.com/logos/docker.svg"},{skillName:"github",imgurl:"https://pngimg.com/uploads/github/github_PNG20.png"}],portfolio:[{name:"project1",description:"mobileapp",imgurl:"images/portfolio/coffee.jpg"},{name:"project2",description:"mobileapp",imgurl:"images/portfolio/project.jpg"},{name:"project3",description:"mobileapp",imgurl:"images/portfolio/project2.png"},{name:"project4",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"}],testimonials:[{id:"5da634a3353dad0001aae9ea",comment:"This guy will melt one thousand computers to help you out!",username:"aigarzon",user_image_url:null,created_at:"2019-10-15T21:07:51.0000",value:5,work_sample:null,work_sample_small:null,score:0,reviewer_country_code:"FR",reviewer_country:"France",encrypted_order_id:"FO7125F01E244"},{id:"5e49b44aefc9f40001830883",comment:"Second order, completed sucessfully. He really understood the chores.",username:"aigarzon",user_image_url:null,created_at:"2020-02-16T23:19:02.0000",value:5,work_sample:null,work_sample_small:null,score:0,reviewer_country_code:"FR",reviewer_country:"France",encrypted_order_id:"FO61660474D37"},{id:"5e1f1f56f162820001806aac",comment:"Nice work. Everything great. Advanced knowledge in Python.",username:"paxat1",user_image_url:null,created_at:"2020-01-15T14:22:38.0000",value:5,work_sample:null,work_sample_small:null,score:0,reviewer_country_code:"NO",reviewer_country:"Norway",encrypted_order_id:"FO48883AEC71"},{id:"5df900c574cda5000195f0cd",comment:"Great communication and fast response whenever you wanted to ask something. The product I bought and then received was also amazing and everything worked fine!",username:"razman03",user_image_url:null,created_at:"2019-12-17T16:23:48.0000",value:5,work_sample:null,work_sample_small:null,score:0,reviewer_country_code:"SE",reviewer_country:"Sweden",encrypted_order_id:"FO1516D06BF2"},{id:"5de8f6d898f28c00017dab91",comment:"delivered quickly and made sure to do the work properly",username:"ahmedalkhars",user_image_url:null,created_at:"2019-12-05T12:31:14.0000",value:4.7,work_sample:null,work_sample_small:null,score:0,reviewer_country_code:"US",reviewer_country:"United States",encrypted_order_id:"FO16C4791583"},{id:"5dd601b2b25b960001be207c",comment:"Absolute pleasure to deal with. 5 stars!!",username:"scarlettmusic",user_image_url:null,created_at:"2019-11-21T04:03:30.0000",value:5,work_sample:null,work_sample_small:null,score:0,reviewer_country_code:"AU",reviewer_country:"Australia",encrypted_order_id:"FO8F2777ED41"}]},L=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u.Helmet,null,l.a.createElement("title",null,F.name,"'s Portfolio")),l.a.createElement(E,{resumeData:F}),l.a.createElement(w,{resumeData:F}),l.a.createElement(k,{resumeData:F}),l.a.createElement(b,{resumeData:F}),l.a.createElement(j,{resumeData:F}),l.a.createElement(C,{resumeData:F}),l.a.createElement(A,{resumeData:F}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.f2de4d2d.chunk.js.map