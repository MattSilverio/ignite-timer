import { Play } from "phosphor-react";

import {useForm} from 'react-hook-form'

import { 
    CountdownContainer, 
    FormContainer, 
    HomeContainer, 
    MinutesAmountInput, 
    Separator, 
    StartCountdownButton, 
    TaskInput 
} from "./styles";

export function Home(){
    // const [task, setTask] = useState('')

    // function resetForm(){
    //     setTask('')
    // }
    const {register, handleSubmit, watch} = useForm()

    function handleCreateNewCycle(data: any){
        
    }

    const task = watch('task')
    const isSubmitDisabled = !task

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput 
                        id="task" 
                        list="task-suggestions" 
                        placeholder="Dê um nome ao seu projeto"
                        // onChange={(event) => setTask(event.target.value)}
                        // value={task}
                        {...register('task')}
                    />

                    <datalist id="task-suggestions">
                        <option value="op1" />
                        <option value="op2" />
                        <option value="op3" />
                        <option value="op4" />
                    </datalist>

                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmountInput 
                        type="number" 
                        id="minutesAmount" 
                        placeholder="00"
                        step={5} 
                        min={5}
                        max={60}
                        {...register('minutesAmount', {valueAsNumber: true})}
                    />
                    
                    <span>minutos.</span>
                </FormContainer>
            
                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartCountdownButton disabled={isSubmitDisabled}  type="submit">
                    <Play size={24} />
                    Começar
                </StartCountdownButton>
            </form>

        </HomeContainer>
    )
}