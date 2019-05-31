import React from 'react';
import axios from 'axios';
import {Button} from 'antd';
import Image from 'react-image-resizer';


export default class DogImage extends React.Component{
    constructor(){
        super();
        this.state = 
        {
        apiResponse : '',      
        temp : 'random' 
    }
    }

    handleClick = event =>{
        this.getDog();
    }
    getDog(){
        axios.get(this.state.temp)
        .then(res => this.setState({ apiResponse: res.data }))
        .catch(err => console.log(err));
        console.log(this.state.apiResponse)
    }

    render(){
        // hit a button that accesses search ad calls getAuthor with whatver they typed in, use response
        // of getauthor and display it on the webpage
        return(
            <div>
            <Button type="primary" htmlType="submit" onClick={this.handleClick}>Generate motivational doggo</Button>
            <div>
                <Image src={this.state.apiResponse} 
                height={300}
                width={300}
                alt = "new" />
            </div>
            </div>
        )
        
    }
}