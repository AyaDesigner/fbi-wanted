import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
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

        fetch('https://api.fbi.gov/wanted/v1/list')
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