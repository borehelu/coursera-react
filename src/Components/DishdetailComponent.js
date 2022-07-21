import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

export class DishdetailComponent extends Component {

    renderDish(dish){
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }

    renderComments(comments){
        let commentJsx = null;
        if(comments != null ){
             commentJsx = comments.map(comment => {
                console.log(comment.author);
                return (
                    <>
                    <li className="list-unstyled">{comment.comment}</li>
                    <li className="list-unstyled">--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                    </>
                );
            })
        }else{
            commentJsx = <div></div>

        }
    

        return commentJsx;
        
    }
   
  render() {

    return (
        
            
                (this.props.selectedDish != null)?
                (
                    <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div> 
                     <div  className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(this.props.selectedDish.comments)}
                     </div> 
                     </div>
                ):
                (
                <div></div>
                )

            
        

     
      
     
    );
  }
}

export default DishdetailComponent