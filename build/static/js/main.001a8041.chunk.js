(this["webpackJsonpcare-box-test"]=this["webpackJsonpcare-box-test"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(21),r=c.n(s),o=(c(29),c(15)),l=c(3),i=(c(30),c(9)),j=c(5),b=c(24),d=c(22),x=c(0),u=function(){var e=Object(d.useState)({}),t=Object(j.a)(e,2),c=t[0],n=t[1],a=function(e){var t=Object(i.a)({},c);t[e.target.name]=e.target.value,n(t),console.log(c)},s=Object(b.a)(),r=s.register,o=s.handleSubmit,l=s.formState.errors;return Object(x.jsx)("section",{className:"mt-5 d-flex justify-content-center",children:Object(x.jsxs)("div",{style:{boxShadow:"3px 3px 5px gray"},className:"card w-75 px-4 pt-5",children:[Object(x.jsx)("h2",{className:"text-center",children:"Care-Box Form"}),Object(x.jsx)("div",{className:"card-body",children:Object(x.jsxs)("form",{className:"p-4",onSubmit:o((function(e){console.log(e);var t=new FormData;t.append("Title",c.Title),t.append("Author_Name",c.Author_Name),t.append("Phone",c.Phone),t.append("Email",c.Email),t.append("Description",c.Description),console.log("formData",t),fetch("https://care-box-backend.herokuapp.com/api/v1/applicant_test/",{method:"POST",body:t}).then((function(e){e.json().then((function(t){console.log(t,e)}))}))})),children:[Object(x.jsxs)("div",{class:"form-group mb-3",children:[Object(x.jsx)("input",Object(i.a)(Object(i.a)({type:"text",placeholder:"Title",className:"form-control"},r("Title",{required:!0})),{},{onBlur:a})),l.Title&&Object(x.jsx)("span",{className:"text-danger",children:"This field is required"})]}),Object(x.jsxs)("div",{class:"form-group mb-3",children:[Object(x.jsx)("input",Object(i.a)(Object(i.a)({type:"text",placeholder:"Author_Name",className:"form-control"},r("Author_Name",{required:!0})),{},{onBlur:a})),l.Author_Name&&Object(x.jsx)("span",{className:"text-danger",children:"This field is required"})]}),Object(x.jsxs)("div",{class:"form-group mb-3",children:[Object(x.jsx)("input",Object(i.a)(Object(i.a)({type:"text",placeholder:"Phone",className:"form-control"},r("Phone",{required:!0})),{},{onBlur:a})),l.Phone&&Object(x.jsx)("span",{className:"text-danger",children:"This field is required"})]}),Object(x.jsxs)("div",{class:"form-group mb-3",children:[Object(x.jsx)("input",Object(i.a)(Object(i.a)({type:"email",placeholder:"Email",className:"form-control"},r("Email",{required:!0})),{},{onBlur:a})),l.Email&&Object(x.jsx)("span",{className:"text-danger",children:"This field is required"})]}),Object(x.jsxs)("div",{class:"form-group",children:[Object(x.jsx)("textarea",Object(i.a)(Object(i.a)({type:"text",className:"form-control mb-3",placeholder:"Description",rows:"3"},r("Description",{required:!0})),{},{onBlur:a})),l.Description&&Object(x.jsx)("span",{className:"text-danger",children:"This field is required"})]}),Object(x.jsx)("div",{className:"form-group text-center",children:Object(x.jsx)("button",{type:"submit",className:"btn btn-dark",children:"Send"})})]})})]})})},p=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(j.a)(s,2),o=r[0],l=r[1],i=Object(n.useState)(""),b=Object(j.a)(i,2),d=b[0],u=b[1],p=Object(n.useState)(""),h=Object(j.a)(p,2),O=h[0],m=h[1],f=Object(n.useState)(""),N=Object(j.a)(f,2),g=N[0],v=N[1],y=Object(n.useState)(""),T=Object(j.a)(y,2),D=T[0],P=T[1],_=Object(n.useState)(""),A=Object(j.a)(_,2),S=A[0],k=A[1],C=Object(n.useState)(null),E=Object(j.a)(C,2),F=E[0],q=E[1];Object(n.useEffect)((function(){B()}),[]);var B=function(){fetch("https://care-box-backend.herokuapp.com/api/v1/applicant_test/").then((function(e){return e.json()})).then((function(e){console.log(e),a(e),l(e[0].Title),u(e[0].Author_Name),m(e[0].Phone),v(e[0].Email),P(e[0].Description),k(e[0].Posted_At),q(e[0].id)}))};return Object(x.jsxs)("section",{children:[Object(x.jsx)("div",{className:"mt-4",style:{backgroundColor:"#F4FDFB"},children:Object(x.jsxs)("table",{className:"table color-brand2 text-dark text-lowercase",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{className:"text-center text-uppercase",scope:"col",children:"ID"}),Object(x.jsx)("th",{className:"text-center text-uppercase",scope:"col",children:"Title"}),Object(x.jsx)("th",{className:"text-center text-uppercase",scope:"col",children:"Author_Name"}),Object(x.jsx)("th",{className:"text-center text-uppercase",scope:"col",children:"Phone"}),Object(x.jsx)("th",{className:"text-center text-uppercase",scope:"col",children:"Email"}),Object(x.jsx)("th",{className:"text-center text-uppercase",scope:"col",children:"Description"}),Object(x.jsx)("th",{className:"text-center text-uppercase",scope:"col",children:"Posted_At"}),Object(x.jsx)("th",{className:"text-center text-uppercase",scope:"col",children:"Action"})]})}),Object(x.jsx)("tbody",{children:c.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{className:"text-center",children:e.id}),Object(x.jsx)("td",{className:"text-center",children:e.Title}),Object(x.jsx)("td",{className:"text-center",children:e.Author_Name}),Object(x.jsx)("td",{className:"text-center",children:e.Phone}),Object(x.jsx)("td",{className:"text-center",children:e.Email}),Object(x.jsx)("td",{className:"text-center",children:e.Description}),Object(x.jsx)("td",{className:"text-center",children:e.Posted_At}),Object(x.jsx)("td",{children:Object(x.jsx)("button",{className:"btn btn-dark text-uppercase",onClick:function(){return function(e){var t=c.filter((function(t){return t.id===e}))[0];console.log(t),l(t.Title),u(t.Author_Name),m(t.Phone),v(t.Email),P(t.Description),k(t.Posted_At),q(t.id)}(e.id)},children:"update"})})]})}))})]})}),Object(x.jsx)("div",{className:"d-flex justify-content-center",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("input",{type:"text",value:o,onChange:function(e){return l(e.target.value)}}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"text",value:d,onChange:function(e){return u(e.target.value)}})," ",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"text",value:O,onChange:function(e){return m(e.target.value)}})," ",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"Email",value:g,onChange:function(e){return v(e.target.value)}})," ",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"text",value:D,onChange:function(e){return P(e.target.value)}})," ",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"datetime-local",value:S,onChange:function(e){return k(e.target.value)}})," ",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{className:"btn btn-dark",onClick:function(){var e={Title:o,Author_Name:d,Phone:O,Email:g,Description:D,date:S,updateId:F};console.log(e);var t=new FormData;t.append("Title",o),t.append("Author_Name",d),t.append("Phone",O),t.append("Email",g),t.append("Description",D),console.log("formData",t),fetch("https://care-box-backend.herokuapp.com/api/v1/applicant_test/update_blog/".concat(F,"/"),{method:"PUT",headers:{"Custom-User-Agent":"gsdf#g3243F466$"},body:t}).then((function(e){e.json().then((function(t){console.log(e,t),B()}))}))},children:"Update Information"})]})})]})},h=function(){return Object(x.jsxs)("div",{children:[Object(x.jsxs)("h1",{className:"mt-5 pt-5",children:["Welcom to ",Object(x.jsx)("br",{})," Care-Box Test"]}),Object(x.jsx)(o.b,{to:"/form",children:"Form"}),Object(x.jsx)("br",{}),Object(x.jsx)(o.b,{to:"/data",children:"GetData"})]})};var O=function(){return Object(x.jsx)(o.a,{children:Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{path:"/home",children:Object(x.jsx)(h,{})}),Object(x.jsx)(l.a,{exact:!0,path:"/",children:Object(x.jsx)(h,{})}),Object(x.jsx)(l.a,{path:"/form",children:Object(x.jsx)(u,{})}),Object(x.jsx)(l.a,{path:"/data",children:Object(x.jsx)(p,{})})]})})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(O,{})}),document.getElementById("root")),m()}},[[38,1,2]]]);
//# sourceMappingURL=main.001a8041.chunk.js.map