import React, {useState} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefualt(); 

        props.onSubmit({
            id: Math.floor(Math.random() * 10000), 
            text: input
        });

        setInput(''); 

    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
         <input 
         type='text' 
         placeholder='Make a todo'
         value={input}
         name='text' 
         className='todo-input'
         onChange={handleChange}
         />
         <button className='todo-button'>Make ToDo</button>
         </form>
         
    )
}

export default TodoForm
