import * as React from 'react'
import { View, TextInput, Button, SafeAreaView, Text } from 'react-native'
import { TSMap } from "typescript-map"
import { number } from 'prop-types';

interface Props {
  handleSubmit: (value: string) => void
}
interface State {
  count: number[]
  tasks: string[]
  newTask: string
  selected: boolean
}
export default class App extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props)
    this.state = {count: [], tasks: [], newTask: '', selected: false}
    
  }
  
  render() {
    var num = 0
    let numList: Array<number> = [num]
    //var taskMap = new TSMap<number,string>();
    //taskMap.set(num, newTask)
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }} >
          <TextInput value={this.state.newTask} placeholder={'Enter task'} style={{ fontSize: 18 }} onChangeText= {newTask=>{
            this.setState({newTask})
          }}
          />
          
          <Button title={'Add task'} onPress={() => {
            num = num + 1;
            var count = numList.push(num);
            this.setState({count: [num], tasks: [...this.state.tasks, this.state.newTask], newTask: ''})
           }} />
          {this.state.count.map(id=> <Text > {id} </Text>)}
          {this.state.tasks.map(task=> <Text > {task} </Text> )}

        </View>
      </SafeAreaView>
    )
  }
}
