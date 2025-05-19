import { Button, Grid } from '@mui/material'
import React from 'react'
import { HashLink } from 'react-router-hash-link'
import Contact from '../components/Contact'
import {Link } from 'react-router-dom'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Navbar from '../components/Navbar'
import FaceIcon from '@mui/icons-material/Face';

import '../css/Home.css'

function Home() {
  
  return (
    <div className = 'home'>
        
      
          <div id ='landing'  className="landing-container">
         
     
        <h1>Hello, I'm <span style={{color:'rgb(151, 64, 64)'}}>Anthony</span>.</h1>
        <h1>I'm a full stack software engineer.</h1>
        <HashLink smooth to='#body'  id ='landing-container-btn'>View My Work <ArrowDownwardIcon/></HashLink>
          </div>  

          <div div id = 'body'></div>
          <Navbar id ="navbar"/>
          <h1 className = 'section-header'>About</h1>
          <div id ='block-1' className="block">

          </div>
          <div className="about-me">
       
    <div className="about-me-info-container">
    <FaceIcon style ={{fontSize:100, color:'rgb(151, 64, 64)'}}/>
    <div  className="about-me-paragraph">
     
         
    As a seasoned Full Stack Engineer, I thrive in building scalable, efficient, and user-friendly applications that bridge the gap between frontend precision and backend robustness. My expertise in JavaScript, React, and modern web technologies allows me to craft intuitive digital experiences while ensuring seamless functionality behind the scenes. I’m passionate about solving complex problems, optimizing performance, and continuously refining my skills in an ever-evolving tech landscape. Outside of coding, I enjoy expanding my knowledge through reading, staying active, and diving into creative pursuits like playing guitar.
               </div>
    </div>
         
          <div className="skills-grid"> <h3 id = 'skills-header'>Skills</h3>
            <Grid container spacing={2} >
                <Grid item xs={4} md={2} lg={2} >
                  <div className="grid-option">
                  <img className = 'image' src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png" alt=""  />
                <p>HTML</p>
                  </div>
               
                </Grid>
                <Grid item xs={4} md={2} lg={2} >
                  <div className="grid-option">
                  <img className = 'image' src="https://tse3.mm.bing.net/th/id/OIP.jrcuppJ7JfrVrpa9iKnnnAHaHa?rs=1&pid=ImgDetMain" alt="" />
                  <p>Python</p>
                  </div>
               
                </Grid>
                <Grid item xs={4} md={2} lg={2}>
                  <div className="grid-option">
                  <img className = 'image'   src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt=""  />
                  <p>JavaScript</p>
                  </div>
              
                </Grid>
                <Grid item xs={4} md={2} lg={2}>
                  <div className="grid-option">
                  <img className='image'  src="https://www.jurisic.org/public/logos/node-logo.jpg" alt="" />
                  <p>NodeJS</p>
                  </div>
                
                </Grid>
                <Grid item xs={4} md={2} lg={2} >
                  <div className="grid-option">
<img className = 'image'  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABF1BMVEX///9DmTRFpThAlDNGoDdPqkFXrkdKpzxgsk+UeV1POCuOcVJONiqSdlmnkXyRdVj39fM2oCZEJxVXrUo0lCGdhGpHLB1TokY8GgDCu7iek49AIw5LMSPHwb1vuGFjs1Ll4uC1tJfBwKbTyb/t6+rc2NY/ozE3kCi6s6+rloHd7Ns+nS3S6M5hrlT2+/WYypLMy7S7q5vPxLl4aGDV0c+DdW1bRjpWQDRkUEazq6fG4sPq9OjW6tNYokyBtXqsqorZ2MS9rqAuAACjmZRpV02ShoC427KLxICn0p95t29ssmGt1qeNwoV2u2xyr2kukheRvouFrG1ioVWltYtvo1+irYbHxa7q6NqGZUE1CQA4EwAnAAAhAAAB75YfAAAPpUlEQVR4nO2c+0PayBbHI8v7oSGUGEyQVAFRCy3ykqqrFrC13d1ud+8+bvf+/3/HPTNJJjPJJGBbm0zW7y9ryADzmXPmPCZ0JelJT3rSk5KmQdQTeHS9vox6Bo+tu7dRz+Cx9bZ7EvUUHleDVibhRnyXbZ0m2oiXmfz+6X3Us3hEXeTz+f10Nbnh9KKVRYSn76OeyGMJA+Zb6fTH11FP5XF0kkWA+XwalMjK5tLiy+dr6XQigw0BbO2CDU9fRj2fb64XmbxD2EduWv0Q9Yy+sVxAmzBdvYt6Tt9UL7J5L2H6NEmINCAhTJIVT/J5HmG6mpi02Mq2uITp6ouop/Zt9DaX3ecTpk8TUaHepbLZfotPmE5fRD29r9dJLgvaDyA8rUU9v68W9PRhhAmo395iE2b7QYTp03dRT/Hr9CGVtbQfRCh4zrjMZf2ENZYwfSpwtBnkHcBsqxVM2I96nl+u+wwhrAUTCtxKvc5Sct3URyhubQPVWpbjphkfYbom5qnGXTfT4hnRb8P06U9RT/ZLNKjlGMJ+CGH6o4gF6rtuJlPLb0iYFrB6G6QyIK6b8ghPxTu3+SmQsMUjFC/vX1QRYKZWcwnzrVBC0R66vcUmzGT6fiP2uYSiPa+57GYeSijY85qfczYhJ+kHEIpV2byoZhzRsSacMC1SBX6f5RLuhxOeitMpDqotQljzuel+IKE4O/FDtxZixEBCgXZiLZVrBW/EYEJhjqVOqrlczXXTvMdNgwnTVUEKm5ddmjDnTYkhhIJ0UdA25XIpvpuuIUyfCtEKvwYnzVEbkU76qDYNJRTiidvbFCLM8qPpGsK0CAlj0M1huTvRsxFDCUX40dudTch3U4im4YQCnCz2UxZhtsZ10/1wQgGOM05sE9Juym7EcML4n0lBxeYjZJL+GsJ07N103yUk0ZRN+kGEtVq639/a3YqaYI0GqVQ2k/PGGmYj+runWj+9C2y7W0gfYx5NL6upjEOYd6Mp5aasl/Z3d68sMkfPfo2aIVzvuqlUyyYMSvoW2y7AsWy2dqNmCNfPQOhsRMpN6Y1YA7YtPpxlxFi76aCWSrmILiFtxFownEUY6+PviypNmOGmxHWEW79ETRGm1wwhP+mvJdyKcwv1DhMSRCqatjYnjPVGvO9iwrwv6WceQhjnjYgDTcpNiW6scTNifh3h0Y9RY4TIctJULhtSm64ljHNGvLAJOW7q1qbrCT/GN9S8dghrtpvyDqTWEz6Lbwd15xBykj6pTTcgjO951Muul5CT9DcgjG/xfe8j5BxIrSeMcVXTJ4SkwfDXphsQxjeYplw5RvQfSG1AeBo1SKCqLmFwp78B4bOoQYI0oAhzgQdSmxDGNSFeUIRkI/pq000I4/qU7YQmzAQl/U0I49pdXNKEpDZtedxUZMIXNKEbTV037W9KGNey7ZIlDIimrcQQBh1IiUx4wif01KYJJMwlh/CCJSR9MHsgJTLhIICQrU03IYxrtpA8hPwDKaEJuywhvzbdhDCudalzmOiLNTU66W9CGDVIoPY9RszyalOhCX/qBhiRPpASuse/qwYQ0klf6HOa10GEVEpsrffSo/ietXlTPvdAqi/yeak3XXDddP3zw2cx/kn7ey8i54cZ6wk/xvUQQ6IPvX0p8QGEcf7RkC/UcA6k1hPGN5RCqPHZMJP1Jv31hPENpRJzrm/JX5uGEO7ubl1d/bAV194JK2QjZkMJr9DPv36wFNu6G+nStxF9B1Jewt2rH8Bwro7ivA2hCc55CX21aXaXdkliOJcwzj/FkND/RXdd0gcbXm0hl/Sx2YSxbX8t+fOF90AquxuA5ihqhHXyEXpr0+xVKF+sf02D5esRfQ9Lwy0Y56LUkj+aeg+kwgk/Rg2wXuuSfk1wJ+U0+p7aNJwwtofBlAa+UJNhHiX2Qwmvop7+JgqONesJj2Lc3rvyn2UwKTHchrGuSYl8dU2N7vTDCGN8BsUo+EBqHWFsf4Thld+ITm2aDyUUIVVY8rX6dNIPqUrjfATl0cugo+FaGGHMO0NGvpxI/VuoreBdGPO+iZG3sKGSfqANxdmFWC3PVnTdNLB5OhJnFyJ5fpfhJv1+EKEouZDIE2xI0s8FEkY94wfL46fEiAH7MP6dr08BvwELaIBFyhRE73g/VUzdBzipWGHGFvvDBSslpj4lxUeRLnJ+I6Y+8SKNYKnQFfOTWivppz79xgEUorPn6kPVa8Tu7//hEIpUrnn0lkLEG7H73E8o6Ca0RT3Zx24KhEdewJg/ilmjQa3Luun17x5CYaOMo4su8w/a+td/sIRCpnpW7qkN1KapX67/SBog+t+1Ooh5RHhNp4uj38Q4PlwjkhZrkA6vr6lgenSVCEAXMZPp/n5NhZqEWBDp0g43+e4f1+5GTBAgIKYwYq1/fX19YGfERAFK0omF+P76+vlzy02fJSGK0hqgnr/7CRE+/w0QY/xP0r9Ug3uINxBoDp4/P7g6OhK6Fg3Sy2oGm/Dg4OBHgbuJMN29xyb88+CVHPVUHks3yIZgwr+insijSbadNLEmlKTnmPBV1NN4RN0k3Ekl6S9E+GeSCWUcSZNNCCZMbq5AOkg84SuIpMkmvAETJjlZQDAFEyaf8CbqSTyq2gevbm6insSjSn71RCi6/g2ENzdJLtr+DYQSACacUJLlvxJdtT3pSU96Uqx0XCoU6o4KSPXt4WGbGWNSQ9AgNEKYSN35u1SqFCpIOyWkHeuv7UNq0BANImPsEUNBGGXz8La+g0xXGZ4dHp6dDbcRcqFSqh/Sg4bYvJXj29vbYb2E3lAqmNFN+6HariDndK7kw3oJ0ZSG9Jgxem3H+rs9tAYIYkXQIUy4sk29cFZAzKVj6iUZ25AMwLzMEsRaYy+h1MaeS1uRJZSG2LO/2wy/Vh0foSTXsRWpvcgSmtiI5vea4deKQyi1EWGhRK4xIWU0vADm95nf14tHiDdnoXTrXPIIxbahJNXZCMshDNmHdpjtdOiv6fCDr9wZ8+60rbJj3GyanDeZHd6r+MbYf4dPiONlyZmih7C9QxvY8x29yX/H8N/mSNN1bWVNfjzR4WI59g3eMzR0ZzqnIeXO4vxNA75mpeiKoi09c+6NNPTR0wVeBHlBbjTwDV2feL6HTyjjYOJQYEJiUYS/U/e+A014MSlqiqGMpc5SM4og5RymYY6sC+Nzjx0+0TRlOtPVcllR5/aL49VS1VVDaUpzFW6A0OdRfEXNGI1mSrms6svVamJM7cXpzTStOFUVo2joI6bw5BNKdVzFcAnNSqG0zfO5vTd6GUjU5kLTjKmioL9HMFNYcU1Bd3R6rg1VVRdtWTb3YLplfWW9OvtsICy1MdEUXVfQhTFzv2yiKxOYvtxT4fMMQzXgC/AMR7oyGstyu7FU4Vtn5nrC4x3qZctLZaS2eVupFM44fKD2nooRtRX6hh6ynDHTivOOJDfP4ZuNpTt2rpdVG7hTRIi2u/WmCrosa8texwT3hj8V4okTxfmIsY7cQtWnlq/OVHVij1nByhLLhhDeoqxel2nCCipZK1CXVrY7vvHOWqCPX9pOMlaRozrTGwGwTt441srEMyUTWVFx7vWQdxpN66KBbk3tO029qDQdWHDHkRPURioZA3eQFSfkMogQ5wuWsGT3H6gqDbKidF4ukqmiWRQNggEXCoGaGmXVXec52lfOpNrIS8nAFfBq9pLBIunOm5pgasdSDb2ouhFHnsHCaubDCSud8SE0INBd4IRfb/ve4yOEWRRVcgvmp9q7DZmQdlkJh5S2S0hMBe4IHtx0p+683taK5Zn9jqXBbPEFMqJLHEJYcYILmy06uP3YqXMTHENowrbUyK09tWiQzaKWCa11j3BIbYMmNFGotYIw9gLyFlg9OwSZGrgKteBoHOW1AYRnJV+kcW+iMFTYOfa9yUvYhsV0CWFpjZH995R2RMmylLPsmLDhTpch1E3nhl40zq2/egBLhxbpHA1cR4j6B9IheQmtprLE81OGUA4ilItk2jYV2ogriokQYp+1hsoz+HDnXaZOfB4+uHxOTwLtf4XMzt89EQbSXfgIcXdR4kUbhlAyaMK5S8gGExvZcWEPIVoMeyjsN8duyHBONFmpbtBxkIuKuYYQF9fOMni6J8kqCLhNcBihwhLS+1A+D7QhRdjT3XA8IxkUbfBikXaoOSIkyHxC1nfbBfcUw9JxhSp5HkDoRJpZmY2lYB6yDz2EM8rcaIMpewDTnqg6WSEMRKfohkKHJN8pBhbahiU3YlS8NkSEX2JDhxCAygblWLDFSCzF0ZNP2D6H6k81lktDU91tjJOSmx2sHe+uH5cQIVEvtn1eigi5+3DKEKpBhAuGAr5Bd4mp/OAlhA+ZQSmuK+d0N9LW2YIQRRrqLVxClA6oUOm3IeofubG0GBxL51Q+7GismzYVd1+GEkLlNvJ1lLggbLrX4Ei6OzkmtdtCyZA6prEI6X2IYik/HxrFwHxIE8KOYoyIKgCTSygzhDI0Iv6FbSIjuvnCVIt0GMPlGduwo5cYF7QIqYUDJ60UuGWbXgysaRhCKNvAig4UpEONUHRUhokmbM5g8pRzO1qihSVQE4PpLXATQRtMui1BaU2/YKe/Q3YEt7/oAKE7OxQC3IIR5WG31VvobvnZnhluZMS9hbsUiJeUQjpqyJTZaG/eGJv0TjQQ4sR6ZQFdMLX61slhoXTrlL1nlVKltM3aB69CoWAzmdulQolnQXm+ws28Opmb8EnuFXxze4Fa02LZurIQwVH15aLZ2FNV0mO195a4tVeXqwY6o5hYfb46WVjvKeLTAngDtNWzCfFlc4baT3XVa86XOt3jnw13MCD4YKlwfHy8XUcNEvNkRkbdhDWmVNgeDo8LJRjLPaVp/qMpWNo/YMb5G3IFZly80fGFrv3PMf74XFMNCIyapk2IQ/TeKCqWokHtbH62r1T9M749sRBtGfrSMaS8hw4EVPRpU8qND//GD5PsR0vW86f6rcnaD8bseIac8c/N2r1er9FoIsEidub4qtHrIauZ6ALfo75/vHdeNs4nPbovWIH2sJpo3uTKNldzZqhopVSjXLROSci3zyfT4my0YM6hDo/BJpa2t7ePj4dnhz7nOxviMeg2aDi89Q/5nuop0wUsU28xmSqG9+gnCVp9do8nxvjQaR4yWjzJS31EX0OSUPeimsxjCJKK2xMhQTZSEmXDkVo+Z2IcdMEKNy0LKnQQxTS6UF9QxzEJkIz6FiZ0LlStGTRaSEHZx5xWmLqyCh4totBJvjEjVhwX9UnYcBG1AsSyMpqPO53xfKRri/VvEU0rDYo1XLah55FJCqNEHSjWcAk/8z4HTY5ks9mbNwOemT/pSU96krj6P91OICULoWNyAAAAAElFTkSuQmCC" alt=""  />
                  
                  <p>MongoDB</p></div>
                  
                </Grid>
                <Grid item xs={4} md={2} lg={2} >
                  <div className="grid-option">
                  <img className = 'image'  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/270px-React-icon.svg.png" alt=""  />
                  <p>ReactJS</p>
                  </div>
               
                </Grid>
                <Grid item xs={4} md={2} lg={2}>
                  <div className="grid-option">  <img className = 'image'  src="https://www.guayerd.com/wp-content/uploads//2021/04/expressjs-logo.svg" alt="" />
                  <p>ExpressJS</p>
                  </div>
              
                </Grid>
                <Grid item xs={4} md={2} lg={2} >
                  <div className="grid-option">
                  <img className = 'image' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC0AOwDASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAUGAQMEBwL/xABFEAABAwMABgcEBgcGBwAAAAABAAIDBAURBhIhMVGRExVBYXGBoSIyVJIHQnKxwdIUIzNSc8LhJENigtHwNYOio7Kz8f/EABkBAQADAQEAAAAAAAAAAAAAAAABAgQDBf/EACkRAQABAwMCBQQDAAAAAAAAAAABAgMRBBIhBTFBUWFxsRORofAyM4H/2gAMAwEAAhEDEQA/APW0REBERAREQERZQYREQEREBERAREQEREBERAREQE4InBAREQEREBERAREQEREBERAWVhEBERARFyy3C3Q5ElVCCN7Q4OcP8rMlB1Iox18tLdgkkd9iJ+P+oBYbfbU7e6Zv2onfy5QSiLkjuVslOGVcOeD3ah5PwuoEEAg5BGQRtBQZREQEREBERATgicEBERAREQEREBERAREQEREBEWqeeGmifNM8NY0bSd5PYAOJ7EG0lrQ5xIDQCSTsAA2kklQlZf4IyWUjRM8ZHSOyIh4AbT6eKibhc6iucW7Y6cH2Ygfe75CN59PvPAg6aiurqrPTzvc0/UHsx/K3Yubd/RdFNRVtWf7PE5zc4LzhsY/zHZyUvDo64gGoqccWwN/mf/oggEVrbYbWN4meeLpCPRuENhtZGxszTxErvxyEFUW6Cqq6Z2YJpI9xw0+yfFp9n0U5Lo7HtMFS8HhK0OHNuD6KJqrbX0mXSRZjH95GdZnn2+iCUo9IAS1lawDcOmiBx4uZv5clPRyRysbJG9r2OGWuaQQeSoK6qOuqaGTWidlhP6yJ2dR/+h70F2Rc1HWU9bCJYTu2SMPvRu4OH3LpQEREBOCJwQEREBERAREQEREBZWEQZWERBh72sa973BrGNLnOO4NAySVTrjcJK6YkZbBGSIWHh++7vPpu8ZK/1vu0LDvDZKgjhnLWfifJV9A7u0nAA2kk9gVgt1jBDJq4ZJ9plP2D+IR93+x9WS2hrWVtQ323badjh7jT9cjiez+qnkGA1rWta0ANaMANGABwACyiICIiAh28ERBDXCyxTB0tKGxzbyzdG8/gVWnsfG9zJGlr2khzXDBBHFX5Rd2toq4zNE3+0xjIx/eNH1T38EFbpKueinbPEd2yRhPsyM7Wn8FYXaQW4bmVLvBjR/5OCq23t39qILMNIqLO2CpA4joz/Mt8d9tchw6SSL+LGQObchVJEF9jmhmbrxSMkbxjcHDzwtnBUCOSWF4kikfG8fWYS0+inaK/EFsdcMjYBMwYx9to+8ckFiWFhr2Pa17HNc1wBa5pBBB7QQsoCIiAiIgIiICIiAvl72xsfI84ZG1z3ng1oyV9ZUTeqyGOknp2yt6eXUYWBw12sJBcSB3fegrM0r55pp3+9K9zz3ZOweW5dNtpP0yrjjcMxR/rZvstOxvmdi4lZ9H4NSllnI9qeUgfYj9keuUEz2IiICLjrrpaba0PuFdSUocCWiomjjc8bvYa46x8guGn0q0Tq5GwwXmhdI44a18ojLjwb0uAVOBNItNRV0dHF01XUwU0Ic1pkqZWRRhztgGtIQMns2rMFRTVUUc9NPFPBICY5YHtkjeASDqvYSDwUDai5Ki52mkljgq7hRU88oaY4qiphikeHOLGlrHuBOTsGxdeUBFyQ3K1VFRLSU9fRzVUQeZYIaiKSaMRuDHa8bHFwwcA7FouF9sFqcGXC5UlPIQHCKSQGXVO49G3L8eSYGipsUdRVyTCbo4pMOcxjcuLz72CdgB8Ct8dktUY2xOkPGV7j6AgeixQX/R+5uEdBc6OeU5xEyVomIAySI3Yf6KTyg4eqbT8JH5awP3rmmsFveCYjJC7sw7Xb5h231UuiCnVlqraMF5HSQj+8jzs+03eFwL0A43bFXrtaWsD6qkbhoy6aJu4DtewfeEHDbbnJQvDHkupXH227zGT9dn4j/ZtzHMe1j2ODmPAc1zTkEEZBBVAU9Ya4hxoZHZadZ9MT2EbXR/iPNBYkREBERAREQFhzmtDnOcA1oLnFxAAAGSSSsqt32vL3miid7DCDUEH337wzwHb3+G0Pm4XuWYuio3Ojh3GUbJJPs9oHr4KF+87+9FKW+z1FYGzSuMNOcFpx+skHFoOwDvQReQrpbGCO30LeMDHnxf7R+9YhtVrgADaeN5A96YdI4+bl2hrWgNaAGtAAAGAAOwBAREQVKr0DsVyu1fdrlNW1L6qRj2wCYwwxtZG2MNzFiQjZ+/5cYbSrQbR2ks1wr7bBLTT0UXTlpnnlimjaRrse2dzuzOCMblFfp+kunN+rLfRXOW32uBssuIS9urSskETXObG5pfI87cF2B5e323fQuutNou1WzSm6yRQ0kr56afPQ1LAP2Tg2TG3duK6RmO8qd22ytqdIvo+utDO4zVFA+qp6Rz8vkJpNSqgbl23YCGeC6fovrhNablQE7aGt6WMcIaxvSjH+YPW36MP+BXHiLzU/wDogUHYpWaL6aaTUMoLaR9JXzMaDs6Onb1hDyYXjyUz4weUoTS/p7vfNMauH9jaBR0z3HbqgSNo26p+3rFesQXqN2jMV+cQR1OLg8HcZGwa5Z82xUfQ60yXXRjTaplBdUXuWojjzvMlPGZGkf8AMc7kopt71Po3konOGuLu+3av1hT7LmdnDB1UmM8HblJfR3S1ENHpZpAI+kqWQS0dJkZ15YozVy7Bt9pxYD9nlH6E2mxaR1t2mvsz6mtc6KaGnkqJIjU9I0vkncY3B7iDgYzgDs2jHpGiVtNq0estK9uJzTipqs7D+kVJ6eQHwJx5KvXn6NrdWTzVdqrH2+WR7pTA6MTUgkcckxgFsjc9ziB2AblG6MyYSbdAtFYa2211HDU0k1BVQ1cbYamV8cjojrBsjJy/Ye3BBVrXkJu2m2g9fSU92qXVtvkw/VfK6oilp2kNeaeWUCVr2ZzgnG7eDkeutIcGuByCAQeIO1VqifFaGURFVIhwRg428UTggp92oxR1RDBiGYdJFwbk7W+S4WSSRSRyxnD43Ne3xac4Vov0PSUQlA9qCRrs/wCF3sEfcqqgvsMrJooZmH2ZWNkb4OGV9qLsUhkt8bTvhkli8s6w9CpRAREQEREGmqnFNT1E5x+qjc4A9rtzR5nCoznOc57nnLnEucTvLicklWq/vLaDVB/aTxMPgMv/AAVUQSNooW1tQXSDNPT6rpB2PefdZ4dp/qrfsHDgoyxRCO3xu7ZpJJHfNqD0Ck0BERARFpqamKljEsok6PWa17mNLhGD9Z4G3HHYq1VRRG6qeE00zVOIeWPsmmWiF8qq+x0Dq+im6aOPo2iYOppX9IIZ42ubIHNOMOHDvLVJvo/pD0wjNPdoYbJaAC98TR/aKqVoLomvYXvdqh2Cc6u7cSAW+hRyxTMbJE9j2O3OYQR6LYrxc3RmFduJxKkaAWbSOzQXiG6QwwU81SyWmiEjZJTK1nRSSZZ7Oo4BurtzsJwMrg070avdwuNDcrPSOqHvpJKSrEUsMT26mQ0npXtyHNc5p29nevRtibFO6c5McYQui1sls9gs1vnaG1EMHSVQaQ7FRM500g1m7DgkjyXnR0H0hfpAKZ1E8WDro1bpung6E0gk6TPRh+vrFoDPd9AvX02JFUx2JjLmrmVklFXx0UrYqySlqGUkj/djncwiN52HYDjsPgVQBfvpZtwEFZo+2ue3Z08MBl1+8uo5NX/ttXpC0VNQKdgf0U0ridVrIIy95O/s2AeKpVcpt0zVV2TFM1TiHmQsWmmmdzoqrSGlFutlPgGJwEbzDrB74oIddz8vwA5ziNm4bML1QAAADAA2ADcFCyXS7NDnNtMrYxkkyFxOB2kNC67bcOsI5H9H0ZjkEbgHawOWh2QcBYrfUbF65FqmZz7THzDTXpLtuj6kxx7xPw70RFuZhOCJwQcV0ANvrv4RPmCCqYrfeZGx2+oBO2QxxN7yXAn0BVQQWPRsnoa5vYKhhHnGMqdUPo8zVopX7f1tTIRngwNZ+BUwgIiICJyTkgiNIRmhiP7tTGT5se1VZXW5QGpoqqJu15Zrs4lzCHgeeMKlZyguFlcHW6lx9XpGHxDypBVywVYY+SkecCU9JFk/XAwW+f4Kx8kBE5LPJBhYIBGCAQRgg9oKzyTkgham0zQvdUWuUwSHa6EO1Y3fZ7PIjHgudl8rqZ3RV1Nl434zE/xwctPkrFyWqaCnnbqTRxyN4PaDyyvHu9OrpnfpK9k+Xen7eH+PQt6umY26indHn4/dwxXy1yAa0j4jwlY772ZC6mV1A/3KqnPd0jAeROVHzaP0T8mGSWE8MiRnJ+31XE/R6rBOpPA8f42vYfTKyTqeq2eK7UV+sT+/DRFnQ3Oabk0+8fvysXTwb+mix9tv+q+HVdEz3qmnb4ysH4qt9QXLO+l8ekd+RbWaO1ZI6Sop2j/A17z66qiOo9Qq4p033knR6SOZvfhKy3m1R5/X9IR2RMc7PgcavquF99qJn9FQUbnyHdr+0R3lrNg83LdDo/QsIMz5ZjwJEbOTNvqpWGCngaGQxRxs4MaGjxOF3ot9Sv8A9tUW49OZ/PDlVXorX8KZrn14hGA3CkpK6sr6nXeYfYhYG9HE4+yACBvJO38d622amfS0UQeCJJnGZ4Owt1sBoPkAu6WCCcRiVjXtZI2VodnGu3cSO5bOS22tHsuxXM5imMRnmee8zLPXqN1uacYzOZxxHHaBE5JyXoMgiclxXGvjoYSch07wRCzif3ndwQRGkFUHyw0rTshHSSfbcNg8h96gicAngM7F9vc+R73vOs97i5zjvLickld1oozV1jC4Zhpi2WXgXA5YzzO3y70FmoIDS0dJAfeZGDJ/Ed7TvUldSck5ICJyTkgIiICqF3ojSVLnNH6icl8eNzXb3M8t47vBW9aammhqoXwTNy1249rXDc5p4hBRgXNLXNJDmkFpGwgjcVZbfe4pWtiq3COYYAkOxj/E9hUJW0NRQyaso1o3EiOVo9h/ceB7lyIPQAQ4AgggjII2g+YWVQ4qiqg/Yzyxjgx7gOWcLd1jdPi5/nKC6oqV1jc/i5/nKdY3P4uf5yguqKldY3P4uf5ynWNz+Ln+coLqipXWNz+Ln+crHWNz+Ln+coLsipXWNz+Ln+cp1jc/i5/nKC6oqT1jc/i5/nKz1jc/i5/nKC6rKpPWNz+Ln+cp1jc/i5/nKC6rD3sY0ue5rGje55DQPMqldY3Pd+lz/OVokkmlOZZHvPF7nOPqUFkrL7TRBzKXE0m7XORE3v4n/e1VyaaaeR0szy+Rx2l33AbsLWuilo6utfqU7MgHD5XbIo/tO49wQaoopqiWOCFutLIcNHYB2ucewDt/qrnQ0cVDTsgZ7RzryvIwZJDvcfw7l8UFup6BhDMvleB0szgNZ+OwAbhwH/1dqAiIgIiICIiAiIg+XxxysdHIxr2OGHNeAWkd4KhanR6FxLqWUxHf0cgL2eR94eqnEQVCSy3eMnELJBxikb9z9UrV1Xd/gpucX51dEwgpfVd2+Cm5xfnTqu7fBTc4vzq6YTCCl9V3b4KbnF+dOq7t8FNzi/OrphMIKX1XdvgpucX506ru3wU3OL86umEwgpfVd2+Cm5xfnTqu7fBTc4vzq6YTCCl9V3b4KbnF+dOq7t8FNzi/OrphMIKX1XdvgpucX506ru3wU3OL86umEwgpYtV3J2Ucvm6IfzLojsN1efb6CIcXv1nfKwEeqtmEQQtPo9RxkOqZH1Dv3f2cXytOT5uUwxkcbWsjY1jGjDWsAa0DuA2L7WOCAiysICIiAiIgck5IiByTkiIHJOSIgclnksIgck5IiByTkiIHJOSIgck5IiByTkiIHJZ5LCIHJOSIgzyWOG5E4IM8ljkiIHJOSIgck5IiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICcERAREQEREBERB/9k=" alt="" />
                  <p>AWS</p>
                  </div>
               
                </Grid>
                <Grid item xs={4} md={2} lg={2} >
                  <div className="grid-option">
                  <img className = 'image' src="https://www.pngrepo.com/png/374146/512/typescript-official.png" alt="" />
                  <p>TypeScript</p>
                  </div>
               
                </Grid>
                <Grid item xs={4} md={2} lg={2} >
                  <div className="grid-option">
                  <img className = 'image' src="https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg" alt="" />
                  <p>NextJS</p>
                  </div>
               
                </Grid>
               
                <Grid item xs={4} md={2} lg={2} >
                  <div className="grid-option">
                  <img className = 'image' src="https://tse2.mm.bing.net/th/id/OIP.CG8qTeTuoei796LdScT2bwHaIP?rs=1&pid=ImgDetMain" alt="" />
                  <p>PostgreSQL</p>
                  </div>
               
                </Grid>
                <Grid item xs={4} md={2} lg={2} >
                  <div className="grid-option">
                  <img className = 'image' src="https://tse1.mm.bing.net/th/id/OIP.oI6Qr02y3i_pu-XQ8wQQoAHaEK?rs=1&pid=ImgDetMain" alt="" />
                  <p>Azure</p>
                  </div>
               
                </Grid>
               
                
            
           

                
                
          
           
           
           
               
            
            </Grid></div>
         
          </div>
          
          <div div id = 'projects'></div>
          <h1 className = 'section-header'>Projects</h1>
         

          <div className= 'projects'>
          <div className ='project' id = "project-1">
          
        
          <div className= 'project-info' >
           <div className="project-header-container">
           <h3 style ={{margin:0}}>TextGenuis</h3>
           <div className="btn-container">
 
           <a className = 'project-btn' href="https://resilient-rolypoly-b0d380.netlify.app/">Live App</a>
           </div>
           
           </div>
             
           
            <p>
             Application to humanize AI responses
            </p>
            <p style ={{marginTop:10,marginBottom:10}}>TECH USED: <span style = {{backgroundColor:'rgb(151, 64, 64)'}}>TypeScript, NextJS, Tailwind CSS, Supabase, Netlify</span></p>
           </div>
            <img className ='project-image'  src="humanizer photo.png" alt="" />
            </div>
          <div className ='project' id = "project-1">
          
        
          <div className= 'project-info' >
           <div className="project-header-container">
           <h3 style ={{margin:0}}>Booker</h3>
           <div className="btn-container">
 
           <a className = 'project-btn' href="https://stepful-takehome-frontend.vercel.app/">Live App</a>
           </div>
           
           </div>
             
           
            <p>
             Application for scheduling sessions between coaches and students. 
            </p>
            <p style ={{marginTop:10,marginBottom:10}}>TECH USED: <span style = {{backgroundColor:'rgb(151, 64, 64)'}}>TypeScript, NextJS, ExpressJS, Tailwind CSS, MongoDB, Vercel</span></p>
           </div>
            <img className ='project-image'  src="booker photo.png" alt="" />
            </div>
         <div className ='project' id = "project-1">
          
        
         <div className= 'project-info' >
          <div className="project-header-container">
          <h3 style ={{margin:0}}>Notify: Note taking app</h3>
          <div className="btn-container">

          <a className = 'project-btn' href="https://note-app-next-beta.vercel.app/">Live App</a>
          </div>
          
          </div>
            
          
           <p>
            Full stack note taking app. 
           </p>
           <p style ={{marginTop:10,marginBottom:10}}>TECH USED: <span style = {{backgroundColor:'rgb(151, 64, 64)'}}>TypeScript, NextJS, Tailwind CSS, MongoDB, Vercel</span></p>
          </div>
           <img className ='project-image'  src="notify app pic.jpeg" alt="" />
           </div>
           <div className ='project' id = "project-1">
          
        
          <div className= 'project-info' >
           <div className="project-header-container">
           <h3 style ={{margin:0}}>Devly: Developer Jobs Finder Tool</h3>
           <div className="btn-container">
 
           <a className = 'project-btn' href="https://github.com/AnthonyEzeji/job-board-nodejs">View Code</a>
           </div>
           
           </div>
             
           
            <p>
             Full stack job finder tool for developers. Implements full CRUD functionality, such as creating an account, saving job listings, and deleting saved job listings. Listings are sourced through webscraping job boards with CheerioJS, a webscraping Javascript library. 
            </p>
            <p style ={{marginTop:10,marginBottom:10}}>TECH USED: <span style = {{backgroundColor:'rgb(151, 64, 64)'}}>ReactJS, NodeJS, ExpressJS, MongoDB, Vercel</span></p>
           </div>
            <img className ='project-image'  src="job-board pic 4.png" alt="" />
            </div>
    
          
           
          
           {

            //<img style={{width:'80%',margin:30, border:"20px solid black"}} src="job-board pic 2.png" alt="" />
           //<img style={{width:'80%', margin:30, border:"20px solid black"}} src="job-board pic 3.png" alt="" />
           }
<div className ='project' id = "project-2">
          
        
          <div  className="project-info">
           <div className="project-header-container">
           <h3 style ={{margin:0}}>E-Shop: Ecommerce Storefront for Electronics</h3>
           <div className="btn-container">
          
           <a className = 'project-btn' href="https://github.com/AnthonyEzeji/ecom">View Code</a>
           </div>
           
           </div>
             
           
            <p>
             Full stack ecommerce storefront with Stripe integration. Similar to any other ecommerce storefront, E-Shop allows users to create an account, browse products, filter products by brand,  add/remove products to/from cart, and purchase cart items through a unique Stripe generated checkout session. App wide state management, such as cart information, is handled with Redux. Further implementation includes Stripe webhook integration allowing customers to view orders after they are placed.
             Products, users, and orders persist on a MongoDB database allowing for real time inventory check as well as admin functionality, such as managing orders or updating inventory.
            </p>
            <p style ={{marginTop:10,marginBottom:10}}>TECH USED: <span style = {{backgroundColor:'rgb(151, 64, 64)'}}>ReactJS, NodeJS, ExpressJS, MongoDB, AWS, Stripe</span></p>
           </div>
            <img className ='project-image'  src="econ image 3.png" alt="" />
            </div>
           </div>
      
         
          

    </div>
  )
}

export default Home