import React from "react";


function Repos(props){
    return (
            <li>{"Название: "} <a href={props.url}> {props.name}</a> {" Создан: " + 
            props.createdAt +
            " Описание: " +
            props.description}
            </li>
    );
}

export default Repos;