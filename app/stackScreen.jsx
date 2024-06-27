import PropertyDetail from "@/screens/PropertyDetail";

const SatckScreensMap = {
  ["PROPERTY_SCREEN"]: PropertyDetail,
};

export function renderSatckScreens(Stack) {
  return Object.keys(SatckScreensMap)?.map((screenKey) => {
    const Screen = SatckScreensMap[screenKey];
    return (
      <Stack.Screen
        key={screenKey}
        name={screenKey}
        component={Screen}
        options={{
          headerShown: false,
        }}
      />
    );
  });
}
