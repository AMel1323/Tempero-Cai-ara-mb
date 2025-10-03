import { Stack } from "expo-router"


export default function Layout() {
    return (
        <Stack>
            <Stack.Screen   
                name="index"
                options={{ headerShown: false }}
            />
             <Stack.Screen   
                name="login"
                options={{ headerShown: false }}
            />
             <Stack.Screen   
                name="cadastrar"
                options={{ headerShown: false  }}
            />
            <Stack.Screen   
                name="cadastrofinal"
                options={{ headerShown: false  }}
            />
            <Stack.Screen   
                name="(tabs)"
                options={{ headerShown: false }}
            />

             <Stack.Screen   
                name="modal"
                options={{
                    presentation: 'modal',
                  }}
                  />
        </Stack>
    )
}