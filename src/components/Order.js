import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'

import pizza from './Assets/Pizza.jpg'
import confirmGoodOrder from './confirmGoodOrder'

// Styles
const OrderPage = styled.div``

const PizzaImg = styled.img`
    height: 50vh;
    width: 100%;
    background-image: url(${pizza});
    object-fit: cover;
`

const OrderForm = styled.div`
    width: 70%;
    margin: auto;
    margin-bottom: 5rem;
`

const CompanyName = styled.h1``

const OptionCommands = styled.div`
    background-color:#CC8E5B;
    padding: 1rem;
`
const OptionCommand = styled.h2`
    margin: 0;
`
const RequireReminder = styled.p`
    margin: .25rem 0;
`

const PizzaSize = styled.select`
    margin: 1rem 0;
    font-size: 1.2rem;
`

const SaucePick = styled.div`
    padding: 1rem 0;
`

const SauceBoss = styled.input`
    margin: .5rem;
`

const TopItOff= styled.div`
    display:flex;
    flex-wrap:wrap;
`

const Topping = styled.div`
    width: 45%;
    padding-left: 1rem;
`

const Toppings = styled.input`
    margin: .5rem;
    /* width: 45%; */
`

const TopLabel = styled.label`
    width: 35%;
`

const Instructions = styled.input`
    height: 1.5rem;
    width: 90%;
    margin: 1rem 5%;
`

const Final = styled.div`
    display: flex;
    justify-content:space-between;
    border-top: 2px solid black;
    padding-top: 1rem;
`

const NumberOfPizzas = styled.input`
    font-size: 3rem;
    width: 15%;
    text-align: center;
`

const AddToOrder = styled.button`
    font-size: 3rem;
    width: 80%;
    text-align: center;
`

const NamethePizza = styled.input`
    font-size: 1rem;
    height: 2rem;
    width: 90%;
    margin-bottom: 1rem;
`

const ErrorNotice = styled.div``

// // Data Creation
// const blankPizza = {
//     pizza_size:"",
//     pizza_sauce:"",
    
//     //Toppings
//     pepperoni: false,
//     sausage: false,
//     canadian_bacon: false,
//     spicy_italian_sausage: false,
//     grilled_chicken: false,
//     onions: false,
//     green_pepper: false,
//     diced_tomatoes: false,
//     black_olives: false,
//     roasted_garlic: false,
//     artichoke_hearts: false,
//     three_cheese: false,
//     pineapple: false,
//     extra_cheese: false,

//     gluten_free_crust: false,

//     special_instruction: "",

//     number_of_pizzas: "",
// }

// const pizzaErrors = {
//     name_of_pizza: "",
//     pizza_size: "",
//     pizza_sauce: "",
//     number_of_pizzas: "",
// }
// const initialOrder = []
// const initialDisabled = true


const Order = props => {

    // // Slices of State
    // const [order, setOrder] = useState(initialOrder)
    // const [form, setForm] = useState(blankPizza)
    // const [errors, setErrors] = useState(pizzaErrors)
    // const [disabled, setDisabled] = useState(initialDisabled)

    // // Helpers
    // const postNewOrder = newOrder => {
    //     axios.post("notarealsite.com", newOrder)
    //     .then(res => {
    //         setOrder([...order, res.data])
    //     })
    //     .catch(err => {
    //         console.log(`NO PIZZA FOR YOU ${err}`)
    //     })
    //     setForm(blankPizza)
    // }

    // // Event Handlers
    // const change = (name, value) => {
    //     yup.reach(confirmGoodOrder, name)
    //       .validate(value)
    //       .then(() => {
    //         setErrors({...errors, [name]: ""})
    //       })
    //       .catch(err => {
    //         setErrors({...errors, [name]: err.errors})
    //       })
    //       setForm({
    //         ...form,
    //         [name]: value
    //       })
    //   }

    // const submitOrder = data => {
    //     const newPizza = {
    //         name_of_pizza: data.name_of_pizza,
    //         pizza_size: data.pizza_size,
    //         pizza_sauce: data.pizza_sauce,
            
    //         //Toppings
    //         toppings: ["pepperoni", "sausage", "canadian_bacon", "spicy_italian_sausage", "grilled_chicken", "onions", "green_pepper", "diced_tomatoes", "black_olives", "roasted_garlic", "artichoke_hearts", "three_cheese", "pineapple", "extra_cheese"].filter(topping => data[topping]),
            
    //         gluten_free_crust: data.gluten_free_crust,

    //         special_instruction: data.special_instruction.trim(),

    //         number_of_pizzas: data.number_of_pizzas,
    //         }
    //     postNewOrder(newPizza)
        
    // }

    const {
        form,
        change,
        submitOrder,
        disabled,
        errors
    } = props

    // //Side Effects

    // useEffect(() => {
    //     confirmGoodOrder.isValid(form)
    //     .then(valid => {
    //         setDisabled(!valid)
    //     })
    // }, [form])

    // useHistory
    const history = useHistory()

    const completeOrder = () => {
        history.push('/review-order')
    }
    
    const submitMyOrder = e => {
        e.preventDefault()
        console.log(`submitted order`)
        submitOrder(form)
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = 
          type === "checkbox"
            ? checked
            : value
        change(name, valueToUse)
      }

    return (
        <OrderPage>

            <PizzaImg src={pizza} alt="Eat the pizza"/>

            <OrderForm onSubmit={submitMyOrder}>

                <CompanyName>Build Your Own Pizza</CompanyName>

                <ErrorNotice>
                    <div>{errors.name_of_pizza}</div>
                    <div>{errors.pizza_size}</div>
                    <div>{errors.pizza_sauce}</div>
                    <div>{errors.number_of_pizzas}</div>
                </ErrorNotice>

                <NamethePizza
                    name="name_of_pizza"
                    type="text"
                    onChange={onChange}
                    placeholder="Name your pizza for extra deliciousness. Mine's name is Steve."
                />

                <OptionCommands>
                    <OptionCommand>Pizza Size</OptionCommand>
                    <RequireReminder><em>Required</em></RequireReminder>
                </OptionCommands>

                <PizzaSize
                    name="pizza_size"
                    type="dropdown"
                    onChange={onChange}
                >
                    
                    <option value="Single Serving">
                        Single Serving
                    </option>

                    <option value="Small">
                        Small
                    </option>

                    <option value="Medium">
                        Medium
                    </option>

                    <option value="Large">
                        Large
                    </option>

                    <option value="Extra Large">
                        Extra Large
                    </option>

                    <option value="I Don't Want To Order Food For A WEEK">
                        I Don't Want To Order Food For A WEEK
                    </option>

                </PizzaSize>

                <OptionCommands>
                    <OptionCommand>Pick a Saucy Boy</OptionCommand>
                    <RequireReminder><em>Required</em></RequireReminder>
                </OptionCommands>

                <SaucePick>

                    <SauceBoss
                        type="radio"
                        id="zesty_tomato"
                        name="pizza_sauce"
                        value="Zesty Tomato"
                        onChange={onChange}
                    />
                    <label for="Zesty Tomato">Zesty Tomato</label>

                    <br/>
                    
                    <SauceBoss
                        type="radio"
                        id="super_garlic"
                        name="pizza_sauce"
                        value="Super Garlic"
                        onChange={onChange}
                    />
                    <label for="Super Garlic">Super Garlic</label>
                    
                    <br/>
                    
                    <SauceBoss
                        type="radio"
                        id="slappin_bbq"
                        name="pizza_sauce"
                        value="Slappin' BBQ"
                        onChange={onChange}
                    />
                    <label for="Slappin' BBQ">Slappin' BBQ</label>
                    
                    <br/>
                    
                    <SauceBoss
                        type="radio"
                        id="spinach_alfredo"
                        name="pizza_sauce"
                        value="Snow White Spinach Alfredo"
                        onChange={onChange}
                    />
                    <label for="Snow White Spinach Alfredo">Snow White Spinach Alfredo</label>
                
                </SaucePick>

                <OptionCommands>
                    <OptionCommand>Top It Off</OptionCommand>
                    <RequireReminder><em>Select Up To 10</em></RequireReminder>
                </OptionCommands>

                <TopItOff>
                    <Topping>
                    <Toppings
                        name="pepperoni"
                        type="checkbox"
                        onChange={onChange}
                        checked={form.pepperoni}
                    />

                    <TopLabel for="pepperoni">Pepperoni</TopLabel>

                    <br/>
                    </Topping>
                    <Topping>
                    <Toppings
                        name="sausage"
                        type="checkbox"
                        onChange={onChange}
                        checked={form.sausage}
                    />

                    <TopLabel for="sausage">Sausage</TopLabel>

                    <br/>
                    </Topping>
                    <Topping>
                    <Toppings
                        name="canadian_bacon"
                        type="checkbox"
                        onChange={onChange}
                        checked={form.canadian_bacon}
                    />

                    <TopLabel for="canadian_bacon">Canadian Bacon</TopLabel>

                    <br/>
                    </Topping>
                    <Topping>
                    <Toppings
                        name="spicy_italian_sausage"
                        type="checkbox"
                        onChange={onChange}
                        checked={form.spicy_italian_sausage}
                    />

                    <TopLabel for="spicy_italian_sausage">Spicy Italian Sausage</TopLabel>

                    <br/>
                    </Topping>
                    <Topping>
                    <Toppings
                        name="grilled_chicken"
                        type="checkbox"
                        onChange={onChange}
                        checked={form.grilled_chicken}
                    />

                    <TopLabel for="grilled_chicken">Grilled Chicken</TopLabel>

                    <br/>
                    </Topping>
                    <Topping>
                    <Toppings
                        name="onions"
                        type="checkbox"
                        onChange={onChange}
                        checked={form.onions}
                    />

                    <TopLabel for="onions">Onions</TopLabel>

                    <br/>
                    </Topping>
                    <Topping>
                    <Toppings
                        name="green_pepper"
                        type="checkbox"
                        onChange={onChange}
                        checked={form.green_pepper}
                    />

                    <TopLabel for="green_pepper">Green Pepper</TopLabel>

                    <br/>
                    </Topping>
                    <Topping>
                    <Toppings
                        name="diced_tomatoes"
                        type="checkbox"
                        onChange={onChange}
                        checked={form.diced_tomatoes}
                    />

                    <TopLabel for="diced_tomatoes">Diced Tomatoes</TopLabel>

                    <br/>
                    </Topping>
                    <Topping>
                    <Toppings
                        name="black_olives"
                        type="checkbox"
                        onChange={onChange}
                        checked={form.black_olives}
                    />

                    <TopLabel for="black_olives">Black Olives</TopLabel>

                    <br/>
                    </Topping>
                    <Topping>
                    <Toppings
                        name="roasted_garlic"
                        type="checkbox"
                        onChange={onChange}
                        checked={form.roasted_garlic}
                    />

                    <TopLabel for="roasted_garlic">Roasted Garlic</TopLabel>

                    <br/>
                    </Topping>
                    <Topping>
                    <Toppings
                        name="artichoke_hearts"
                        type="checkbox"
                        onChange={onChange}
                        checked={form.artichoke_hearts}
                    />

                    <TopLabel for="artichoke_hearts">Artichoke Hearts</TopLabel>

                    <br/>
                    </Topping>
                    <Topping>
                    <Toppings
                        name="three_cheese"
                        type="checkbox"
                        onChange={onChange}
                        checked={form.three_cheese}
                    />

                    <TopLabel for="three_cheese">Three Cheese</TopLabel>

                    <br/>
                    </Topping>
                    <Topping>
                    <Toppings
                        name="pineapple"
                        type="checkbox"
                        onChange={onChange}
                        checked={form.pineapple}
                    />

                    <TopLabel for="pineapple">Pineapple</TopLabel>

                    <br/>
                    </Topping>
                    <Topping>
                    <Toppings
                        name="extra_cheese"
                        type="checkbox"
                        onChange={onChange}
                        checked={form.extra_cheese}
                    />

                    <TopLabel for="extra_cheese">Extra Cheese</TopLabel>
                    </Topping>
                </TopItOff>

                <OptionCommands>
                    <OptionCommand>Substitutions</OptionCommand>
                    <RequireReminder><em>Choose Up To 1</em></RequireReminder>
                </OptionCommands>

                <Toppings
                    name="gluten_free_crust"
                    type="checkbox"
                    onChange={onChange}
                    checked={form.gluten_free_crust}
                />

                <label for="gluten_free_crust">Gluten Free Crust (+ $100)</label>

                <OptionCommands>
                    <OptionCommand>Special Instructions</OptionCommand>
                </OptionCommands>

                <Instructions
                    name="special_instruction"
                    type="text"
                    placeholder="Anything else you'd like to add?"
                    onChange={onChange}
                />

                <Final>
                    
                <NumberOfPizzas
                    name="number_of_pizzas"
                    type="number"
                    min="1"
                    max="50"
                    onChange={onChange}
                />

                <AddToOrder
                    onClick={completeOrder}
                    disabled={disabled}
                >
                    Add to Order
                </AddToOrder>
                </Final>

            </OrderForm>
        </OrderPage>
    )
}

export default Order