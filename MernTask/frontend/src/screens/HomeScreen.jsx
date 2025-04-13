import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { useUsers } from "../hooks/useUsers";
import { filterUsers } from "../utils/filterUsers";
import PullToRefresh from "react-simple-pull-to-refresh";
import "../styles/styles.css";

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
  }, [searchText, users, setFilteredUsers]);

  if (loading) {
    return (
      <div className="center">
        <div className="loading-spinner"></div>
        <p className="loading-text">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="center">
        <p className="error">{error}</p>
        <button
          onClick={loadUsers}
          style={{
            backgroundColor: "#007AFF",
            color: "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="searchContainer">
        <input
          className="searchInput"
          placeholder="Search users..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div style={{ marginTop: 10 }}>
          <button
            onClick={onRefresh}
            disabled={refreshing || loading}
            style={{
              backgroundColor: refreshing || loading ? "#ccc" : "#007AFF",
              color: "white",
              border: "none",
              width: "100%",
              padding: "10px 15px",
              borderRadius: "5px",
              cursor: refreshing || loading ? "not-allowed" : "pointer",
            }}
          >
            {refreshing ? "Refreshing..." : "Refresh"}
          </button>
        </div>
      </div>

      <PullToRefresh
        onRefresh={onRefresh}
        pullingContent="Pull to refresh..."
        refreshingContent="Refreshing..."
      >
        <div className="listContainer">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <UserCard key={user.id.toString()} user={user} />
            ))
          ) : (
            <div className="center" style={{ flex: 1 }}>
              <p className="error">
                {searchText ? "No matching users found" : "No users available"}
              </p>
            </div>
          )}
        </div>
      </PullToRefresh>
    </div>
  );
};

export default HomeScreen;
