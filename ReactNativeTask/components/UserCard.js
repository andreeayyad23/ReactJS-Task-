import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles/styles";

const UserCard = ({ user }) => {
  const { name, email, phone, company, address } = user;

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: `https://i.pravatar.cc/150?u=${user.id}` }}
        style={styles.avatar}
      />

      <View style={styles.cardContent}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.badge}>{user.username}</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.badge}>{user.website}</Text>
        <Text style={styles.detail}>Phone: {phone}</Text>
        <Text style={styles.detail}>Company: {company.name}</Text>
        <Text style={styles.detail}>Catchphrase: {company.catchPhrase}</Text>
        <Text style={styles.badge}>Status: {company.bs}</Text>

        <Text style={styles.address}>
          {address.street}, {address.suite}, {address.city}, {address.zipcode}
          {address.country}, {address.geo.lat}, {address.geo.lng}
        </Text>
      </View>
    </View>
  );
};

export default UserCard;
