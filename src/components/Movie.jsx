import React from "react";

const ImgUrl="http://image.tmdb.org/t/p/w1280/";
//영화포스터 path 앞부분 주소

export default function Movie({poster_path,title,vote_average}){
    return(
        <div className="movie_con">
            <img src={ImgUrl+poster_path} alt="영화포스터"/>
            <div className="movie_info">
                <h4 className="tit">{title}</h4>
                <span>{vote_average}</span>
            </div>
        </div>
    );
}