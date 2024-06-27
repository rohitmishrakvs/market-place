import { widthPercentageToDP as wp } from "@/utils/ResponsiveScreen";
import React, { useState } from "react";
import { FlatList, RefreshControl, StyleSheet, View } from "react-native";
import Card from "./component/Card";
import AppHeader from "@/components/Header";

const Home = (props) => {
  const { data,handleUnlockButton } = props;
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {};

  const renderItem = ({ item }) => <Card data={item} onPress={handleUnlockButton} />;

  return (
    <View style={styles.container}>
      <AppHeader title={"Home"}/>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={["#9Bd35A", "#689F38"]}
            progressBackgroundColor="#ffffff"
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(2),
    paddingVertical: wp(2),
  },
});

export default React.memo(Home);
