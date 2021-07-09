import classes from './AvailableMeals.module.css';
import Card from '../UI/Card'
import { useEffect,useState } from 'react'
import MealItem from './Mealitem/MealItem'


const AvailableMeals = () => {
  const [meals,setMeals]=useState([]);
  const [loading,setLoading]=useState(true);
  const [httpError,setHttpError]=useState();
  useEffect(()=>{//We cannot use sync ans await function in useEffect 
    const fetchMeals= async ()=>{
      const response=await fetch('https://food-order-9ceb3-default-rtdb.firebaseio.com/meals.json');
      
      
      if(!response.ok){
        throw new Error('Something Went Wrong');

      }
      
      
      const responseData=await response.json()
      
      const loadedMeals=[]
      for(const key in responseData){
        loadedMeals.push({
          id:key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        })
      };
      setMeals(loadedMeals);
      setLoading(false)
    } ;
    
    //If you want you can use async and await function by creating afunction with async and await and call that func in useEffect method
    //We cant use try and catch methods while usin async and await methods
    //Instead pf we can use below func to display error
       fetchMeals().catch((error)=>{
        setLoading(false);
        setHttpError(error.message)

       });
    
    

  },[]);
  if(loading){
    return( <section className={classes.MealsLoading}>
      <p>Loading...</p>
    </section>
    )}

      if(httpError){
        return(
          <section className={classes.MealsError}>
            <p>{httpError}</p>
          </section>
        )

      }

  const mealsList = meals.map((meal) => <MealItem 
  key={meal.id}
  id={meal.id}
  name={meal.name} 
  description={meal.description}
  price={meal.price}
  /> );

  
  return (
    <section className={classes.meals}>
      <Card>
      <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;