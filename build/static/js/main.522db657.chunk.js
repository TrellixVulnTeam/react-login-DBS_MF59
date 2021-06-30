(this["webpackJsonpreact-login"]=this["webpackJsonpreact-login"]||[]).push([[0],{39:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(15),r=c.n(n),s=(c(6),c(2)),i=c(4),o=c.n(i),l=c(0),j=function(e){var t=Object(a.useState)(""),c=Object(s.a)(t,2),n=c[0],r=c[1],i=Object(a.useState)(""),j=Object(s.a)(i,2),d=j[0],u=j[1],b=Object(a.useState)(!1),h=Object(s.a)(b,2),m=h[0],O=h[1];return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),"admin"===n&&"admin"===d&&e.setIsAuthenticated(!0),o.a.post("http://localhost:8000/api-token-auth/",{username:n,password:d}).then((function(t){e.setIsAuthenticated(!0)})).catch((function(e){O(!0)}))},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{style:{color:"black"},children:"DBS Login"}),Object(l.jsx)("label",{htmlFor:"username",children:"Admin Username:"}),Object(l.jsx)("input",{type:"text",autoComplete:"off",id:"username",name:"username",placeholder:"Enter your username here",onChange:function(e){r(e.target.value)}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(l.jsx)("input",{type:"password",autoComplete:"off",id:"password",name:"password",placeholder:"Enter your password here",onChange:function(e){u(e.target.value)}})]}),m&&Object(l.jsx)("div",{id:"errorMessage",className:"generic-error",children:Object(l.jsx)("p",{children:" The credentials you have entered is not valid."})}),Object(l.jsx)("button",{type:"submit",children:"SUBMIT"})]})})},d=function(e){var t=Object(a.useState)(""),c=Object(s.a)(t,2),n=c[0],r=c[1],i=Object(a.useState)(0),j=Object(s.a)(i,2),d=j[0],u=j[1],b=Object(a.useState)(""),h=Object(s.a)(b,2),m=h[0],O=h[1],p=Object(a.useState)(""),x=Object(s.a)(p,2),g=x[0],f=x[1],v=Object(a.useState)(""),C=Object(s.a)(v,2),S=C[0],y=C[1],N=Object(a.useState)(""),I=Object(s.a)(N,2),w=I[0],A=I[1],F=Object(a.useState)(!1),B=Object(s.a)(F,2),k=B[0],R=B[1],T=Object(a.useState)(!1),D=Object(s.a)(T,2),P=D[0],E=D[1],M=Object(a.useState)(!1),J=Object(s.a)(M,2),L=J[0],U=J[1],$=Object(a.useState)(!1),z=Object(s.a)($,2),G=z[0],Z=z[1],H=Object(a.useState)(!1),Y=Object(s.a)(H,2),q=Y[0],K=Y[1],Q=Object(a.useState)(!1),V=Object(s.a)(Q,2),W=V[0],X=V[1],_=Object(a.useState)(!1),ee=Object(s.a)(_,2),te=ee[0],ce=ee[1];return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=new Date,c=t.getHours()+":"+t.getMinutes()+":"+t.getSeconds(),a=String(t.getDate()).padStart(2,"0"),s=String(t.getMonth()+1).padStart(2,"0"),i=t.getFullYear();if(t=a+"/"+s+"/"+i+" "+c,0===n.length&&r(!0),0===m.length&&O(!0),"admin"===n&&R(!0),!1===P&&!1===L&&!1===G&&!1===q&&!1===W&&!1===te){var l=JSON.parse(localStorage.getItem("token"));o.a.post("",{headers:{Authorization:"Bearer ".concat(l),"Content-Type":"multipart/form-data"},customerName:n,customerAge:d,serviceOfficerName:m,NRIC:g,branchCode:S,image:w}).then((function(e){R(!0),console.log(e)})).catch((function(e){console.log(e)}))}},children:[Object(l.jsx)("h1",{style:{color:"black"},children:"Register Customer"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"customerName",children:"Customer Name:"}),Object(l.jsx)("input",{type:"text",autoComplete:"off",id:"customerName",name:"customerName",onChange:function(e){r(e.target.value),n.length>=65?E(!0):E(!1)}}),P&&Object(l.jsx)("div",{className:"generic-error",children:Object(l.jsx)("p",{children:"Customer Name must not exceed 64 characters"})})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"customerAge",children:"Customer Age:"}),Object(l.jsx)("input",{type:"number",autoComplete:"off",id:"customerAge",name:"customerAge",onChange:function(e){u(e.target.value),Number(e.target.value)>=18?U(!1):U(!0)}}),L&&Object(l.jsx)("div",{className:"generic-error",children:Object(l.jsx)("p",{children:"Customers must be at least 18 years of age"})})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"serviceOfficerName",children:"Service Officer Name:"}),Object(l.jsx)("input",{type:"text",autoComplete:"off",id:"serviceOfficerName",name:"serviceOfficerName",onChange:function(e){O(e.target.value),m.length>=65?Z(!0):Z(!1)}}),G&&Object(l.jsx)("div",{className:"generic-error",children:Object(l.jsx)("p",{children:"Service Officer Name must not exceed 64 characters."})})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"NRIC",children:"NRIC:"}),Object(l.jsx)("input",{type:"text",autoComplete:"off",id:"NRIC",name:"NRIC",onChange:function(e){f(e.target.value),e.target.value.match(/^[A-Z]\d{7}[A-Z]$/)?K(!1):K(!0)}}),q&&Object(l.jsx)("div",{className:"generic-error",children:Object(l.jsx)("p",{children:"NRIC must be in uppercase and only have 7 numeric numbers."})})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"branchCode",children:"Branch Code:"}),Object(l.jsx)("input",{type:"number",autoComplete:"off",id:"branchCode",name:"branchCode",onChange:function(e){y(e.target.value),e.target.value.match(/^\d{3}$/)?X(!1):X(!0)}}),W&&Object(l.jsx)("div",{className:"generic-error",children:Object(l.jsx)("p",{children:"Must be a valid branch code number"})})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"image",children:"Image Upload:"}),Object(l.jsx)("input",{type:"file",autoComplete:"off",id:"image",name:"image",accept:"image/*",onChange:function(){var e=document.getElementById("image"),t=e.value;return/(\.jpeg|\.png)$/i.exec(t)?e.files[0].size>2097152?(alert("File is too big!"),e.value="",ce(!0),!1):(A(e.files[0]),void ce(!1)):(alert("Invalid file type"),e.value="",ce(!0),!1)}}),te&&Object(l.jsx)("div",{className:"generic-error",children:Object(l.jsx)("p",{children:"Image attached should be JPEG/PNG format, and should not exceed 2 megabytes."})})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"productType",children:"Product Type:"}),Object(l.jsxs)("select",{id:"productType",children:[Object(l.jsx)("option",{value:"137",children:"Investor"}),Object(l.jsx)("option",{value:"070",children:"Insurance"}),Object(l.jsx)("option",{value:"291",children:"Loans"}),Object(l.jsx)("option",{value:"969",children:"Savings"}),Object(l.jsx)("option",{value:"555",children:"Credit Cards"})]})]}),Object(l.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginBottom:"0px"},children:[Object(l.jsx)("button",{onClick:function(){e.setIsAuthenticated(!1)},children:"Logout"}),"\xa0 \xa0",Object(l.jsx)("button",{type:"submit",children:"Submit"})]}),k&&Object(l.jsx)("div",{className:"generic-success",children:Object(l.jsx)("p",{children:" Form has submitted successfully."})})]})})},u=c.p+"static/media/dbs.57b7c479.png";var b=function(){return Object(l.jsxs)("div",{className:"headerTop",children:[Object(l.jsx)("img",{src:u,width:"300",height:"300"}),Object(l.jsx)("h1",{style:{color:"white"},children:"DBS Admin Portal"}),Object(l.jsx)("h2",{style:{color:"white"},children:"Login below"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{style:{color:"blue"},children:"(Username: admin, Password: admin)"})]})};var h=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{}),c?Object(l.jsx)(d,{setIsAuthenticated:n}):Object(l.jsx)(j,{setIsAuthenticated:n})]})};r.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))},6:function(e,t,c){}},[[39,1,2]]]);
//# sourceMappingURL=main.522db657.chunk.js.map