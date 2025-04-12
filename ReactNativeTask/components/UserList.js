import React from "react";
import { FlatList, View, Text } from "react-native";
import UserCard from "./UserCard";
import styles from "../styles/styles";

const UserList = ({ users }) => {
  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No Users found</Text>
    </View>
  );

  return (
    <FlatList
      data={users}
      renderItem={({ item }) => <UserCard user={item} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={[
        styles.listContainer,
        users.length === 0 && { flex: 1 },
      ]}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListEmptyComponent={renderEmpty}
    />
  );
};

export default UserList;
