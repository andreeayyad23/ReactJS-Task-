import React, { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  TextInput,
  Text,
  SafeAreaView,
  Button,
  FlatList,
  RefreshControl,
} from "react-native";
import UserCard from "../components/UserCard";
import { useUsers } from "../hooks/useUsers";
import { filterUsers } from "../utils/filterUsers";
import styles from "../styles/styles";

const HomeScreen = () => {
  const {
    users,
    filteredUsers,
    setFilteredUsers,
    loading,
    error,
    refreshing,
    onRefresh,
    loadUsers,
  } = useUsers();

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const result = filterUsers(searchText, users);
    setFilteredUsers(result);
  }, [searchText, users]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
        <Button title="Try Again" onPress={loadUsers} color="#007AFF" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search users..."
          value={searchText}
          onChangeText={setSearchText}
        />

        <View style={{ marginTop: 10 }}>
          <Button
            title="Refresh"
            onPress={onRefresh}
            color="#007AFF"
            disabled={refreshing || loading}
          />
        </View>
      </View>

      <FlatList
        data={filteredUsers}
        renderItem={({ item }) => <UserCard user={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ flexGrow: 1 }}
        ListEmptyComponent={
          <View style={[styles.center, { flex: 1 }]}>
            <Text style={styles.error}>
              {searchText ? "No matching users found" : "No users available"}
            </Text>
          </View>
        }
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#007AFF"]}
            tintColor="#007AFF"
          />
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
