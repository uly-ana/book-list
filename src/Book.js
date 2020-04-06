import React, { Component } from 'react'

 class Book extends Component {
   constructor(props){
       super(props);
       this.state = {
           count: 1,
           showInfo: false
       };
    }

    addCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    };

     lowerCount = () => {
         this.setState({
             count: this.state.count - 1
         })
     };

     resetCount = () => {
         this.setState({
             count: 0
         })
     };

     handleInfo = () => {
         this.setState({
             showInfo: !this.state.showInfo
         });
     };


    render() {
        
        const {id, image, title, author, showInfo} = this.props.info;
        const { handleDelete}= this.props;
        const checkInfo = info => {
            if(info === true){
                return (
                    <p>{showInfo}
                    </p>
                );
            } else {
                return null;
            }
        }
        return (
            <div>
                <article className="book">
                    <img src={image} alt="book cover" id="img"/>
                    <div>
                        <h3>Title : {title}</h3>
                        <h5>Author : {author}</h5>
                        <h3>count: {this.state.count}</h3>
                        <button type="button" onClick={this.addCount}>
                            Add count </button>
                        <button type="button" onClick={this.lowerCount}>
                            Lower count </button>
                        <button type="button" onClick={this.resetCount}>
                            Reset </button>
                        <button type="button" onClick={this.handleInfo}>
                            More Info </button>
                            {checkInfo(this.state.showInfo)} 
                    </div>
                    <button type="button" style={{ marginLeft: 0, width: 150, color: "#0d2a4c"}} onClick={() => handleDelete(id)}>Delete</button>
                </article>
            </div>
        )
    }
}

export default Book;