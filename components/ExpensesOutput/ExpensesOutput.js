import {View , Text , StyleSheet} from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';





function ExpensesOutput ( {expenses, expensesPeriod ,fallbackText}){

    let content = <Text style={styles.text}>{fallbackText}</Text>

    if(expenses.length > 0){
        content = <ExpensesList expenses={expenses}/>
    }
  return  <View style={styles.container}>
    <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
    {content}
   

    
    </View>
}


export default ExpensesOutput;

const styles = StyleSheet.create({
    container:{
        padding:24,
        backgroundColor: GlobalStyles.colors.primary700
    },
    text:{
        color:'white',
        fontSize:16,
        textAlign:'center',
        marginTop:32
    }

    
})