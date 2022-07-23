import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishdetailComponent  from './DishdetailComponent'
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';

import { Switch, Route, Redirect } from 'react-router-dom';

class MainComponent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
      leaders: LEADERS
    }
  }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
    }

  render(){

    const HomePage = () => {
      return (<Home />)
    }
    return (
      <div className="App">
        <Navbar dark color='primary'>
          <div className="container">
            <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage}/>
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
          <Route path='/aboutus' component={() => <About leaders={this.state.leaders}/>}/>
          <Route path='/contactus' component={Contact}/>
        </Switch>
        
        <DishdetailComponent dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Footer />
      </div>
    )
  }
}

export default MainComponent;