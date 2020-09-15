import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana'];

    //3rd approach ----> Refactor the jsx into a seperate variable and then use it <----
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30, 
            skill: 'React'
        },
        {
            id:2,
            name: 'Clark',
            age: 25, 
            skill: 'Angular'
        },
        {
            id:3,
            name: 'Diana',
            age: 28, 
            skill: 'Vue'
        }
    ]

    const nameList =  names.map((name, index)=> <h2 key={index}>{name}</h2>)
    return <div>{nameList}</div>

    // const personList = persons.map(person=> (
    // <h2>I am {person.name}. I am {person.age} years old. I know {person.skill}</h2>
    // ))
    // const personList = persons.map(person=> <Person key={person.id} person={person}/>)
    // return <div>{personList}</div>

    //2nd approach
    // const nameList =  names.map(name=> <h2>{name}</h2>)
    // return <div>{nameList}</div>

    //1st approach
    // return (
    //     <div>
    //         {
    //             names.map(name => <h2>{name}</h2>)
    //         }
    //     </div>
    // )
}

export default NameList
