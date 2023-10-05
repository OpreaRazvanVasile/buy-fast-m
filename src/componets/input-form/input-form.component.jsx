import { validatePassword } from 'firebase/auth'
import {Group,Input,Label} from'./input-form.styles.jsx'

const InputForm=({label,...otherProps})=>

     <Group>
         <Input {...otherProps}></Input>
       
        <Label shrink={otherProps.value.length>0?true:undefined}>{label}</Label>
         </Group>



export default InputForm