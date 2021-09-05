import React from "react";


function Repos(props: { url: any; name: any; createdAt: string; description: string; }){
    return (
            <li>{"Название: "} <a href={props.url}> {props.name}</a> {" Создан: " + 
            props.createdAt +
            " Описание: " +
            props.description}
            </li>
    );
}

export default Repos;