import React from 'react';
import './WantedList.css';



class WantedList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            items: []
        };

    }

    //life cycle
    componentDidMount() {
        this.getWantedList();
    }



    getWantedList() {

        fetch('https://api.fbi.gov/wanted/v1/list', {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Expose-Headers': '*'
            }
        })
            .then(objectResponse => {
                return objectResponse.json();
            })
            .then((jsonObject) => {
                console.log("this what is returning: " + jsonObject.items);
                this.setState({ quote: jsonObject.items })
            })
            .catch(console.log)

    }

    render() {
        return (
            <div>

            </div>
        )
    }


}

export default WantedList;