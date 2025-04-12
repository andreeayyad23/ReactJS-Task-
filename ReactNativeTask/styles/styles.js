import { StyleSheet } from "react-native";

export default StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  // List container
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    width: "100%",
  },

  // Enhanced list header
  listHeader: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#F8F8F8",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    marginBottom: 8,
  },

  listHeaderText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: "#3B82F6",
    flexDirection: "row",
  },

  // Content container inside card
  cardContent: {
    flex: 1,
  },

  // Avatar/image styles for list items
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },

  // Enhanced text styles
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 4,
  },

  email: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },

  detail: {
    fontSize: 14,
    color: "#444",
    marginTop: 4,
  },

  address: {
    fontSize: 14,
    color: "#444",
    marginTop: 8,
    fontStyle: "italic",
  },

  // Badge for status indicators
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: "#E0E0E0",
    alignSelf: "flex-start",
    marginTop: 4,
  },

  badgeText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#555",
  },

  // Status colors for badges
  statusActive: {
    backgroundColor: "#DCFCE7",
    borderColor: "#86EFAC",
  },

  statusActiveText: {
    color: "#166534",
  },

  statusInactive: {
    backgroundColor: "#FEF2F2",
    borderColor: "#FECACA",
  },

  statusInactiveText: {
    color: "#991B1B",
  },

  // Actions row for buttons/interactions
  actionsRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },

  actionButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginLeft: 8,
  },

  actionButtonPrimary: {
    backgroundColor: "#3B82F6",
  },

  actionButtonText: {
    fontSize: 14,
    color: "#FFF",
    fontWeight: "500",
  },

  // Separator between list items
  separator: {
    height: 1,
    backgroundColor: "#F0F0F0",
    marginVertical: 8,
  },

  // Error and empty states
  error: {
    color: "#FF3B30",
    fontSize: 16,
    textAlign: "center",
    padding: 20,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },

  emptyText: {
    color: "#888",
    fontSize: 16,
    textAlign: "center",
    marginTop: 12,
  },

  // List footer for loading indicators or "load more"
  listFooter: {
    padding: 16,
    alignItems: "center",
  },

  // Pull-to-refresh styling
  refreshControl: {
    tintColor: "#3B82F6",
  },

  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },

  searchContainer: {
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  searchInput: {
    height: 40,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
