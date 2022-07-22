import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



    function renderDish(dish){
        return (
            <Card key={dish.id}>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }

    function renderComments(comments){
        let commentJsx = null;
        if(comments != null ){
             commentJsx = comments.map(comment => {
                console.log(comment.author);
                return (
                    <li key={comment.id} className="list-unstyled">
                    <p >{comment.comment}</p>
                    <p >--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                );
            })
        }else{
            commentJsx = <div></div>

        }
    

        return commentJsx;
        
    }
   
  const DishdetailComponent = (props) =>{

    return (
        
            
                (props.dish != null)?
                (
                    <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {renderDish(props.dish)}
                    </div> 
                     <div  className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {renderComments(props.dish.comments)}
                     </div> 
                     </div>
                ):
                (
                <div></div>
                )

            
        

     
      
     
    );
  }


export default DishdetailComponent;