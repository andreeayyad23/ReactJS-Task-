import { useState, useCallback, useEffect } from "react";
import { fetchUsers } from "../api/user";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const loadUsers = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchUsers();
      setUsers(data);
      setFilteredUsers(data);
      setError("");
    } catch (err) {
      setError(err.message || "Failed to load users.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setError(null);
    return loadUsers().finally(() => setRefreshing(false));
  }, [loadUsers]);

  return {
    users,
    filteredUsers,
    setFilteredUsers,
    loading,
    error,
    refreshing,
    setError,
    onRefresh,
    loadUsers,
  };
};
