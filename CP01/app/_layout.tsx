import { Stack } from "expo-router";

export default function(){
    return(
        <Stack screenOptions={{headerStyle:{backgroundColor:"#121212"},headerTintColor:"#fff"}}>
            <Stack.Screen name="./informa.tsx" options={{title:"informações"}}/>
            <Stack.Screen name="./App.tsx" options={{title:"Cadastro"}}/>
        </Stack>
    );
}