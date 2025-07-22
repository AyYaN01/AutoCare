import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import {
  AntDesign,
  MaterialIcons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import images from "../../assets/images";

const RepairServiceScreen = () => {
  const router = useRouter();

  const [needsParts, setNeedsParts] = useState(false);
  const [location, setLocation] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "#0F172A", paddingTop: 40, paddingHorizontal: 16 }}>
      {/* Header */}
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
        <Pressable onPress={() => router.back()}>
          <AntDesign name="arrowleft" size={30} color="#FFFFFF" />
        </Pressable>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 24,
            fontWeight: "bold",
            flex: 1,
            textAlign: "center",
            marginRight: 30,
          }}
        >
          Repair
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Service Image and Pricing */}
        <View style={{ backgroundColor: "#1E293B", borderRadius: 12, marginBottom: 24 }}>
          <Image
            source={images.repair}
            style={{ width: "100%", height: 200, borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
            resizeMode="cover"
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 12,
              backgroundColor: "#273444",
            }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 16 }}>Per Hour</Text>
            <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>$100</Text>
          </View>
        </View>

        {/* Service Description */}
        <View style={{ marginBottom: 24 }}>
          <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>
            Service Description
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
            <FontAwesome5 name="user-alt" size={16} color="#737373" />
            <Text style={{ color: "#737373", marginLeft: 8 }}>1605K Users</Text>
            <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 16 }}>
              <AntDesign name="star" size={16} color="#FBBF24" />
              <Text style={{ color: "#737373", marginLeft: 4 }}>4.9</Text>
            </View>
          </View>
          <Text style={{ color: "#9CA3AF", lineHeight: 22 }}>
            The Model B was a Ford automobile with production starting in 1932. It revolutionized the
            automotive industry with its reliable design and cost-effective build.
          </Text>
        </View>

        {/* Checkbox Option */}
        <TouchableOpacity
          onPress={() => setNeedsParts(!needsParts)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <View
            style={{
              width: 24,
              height: 24,
              borderWidth: 2,
              borderColor: "#737373",
              borderRadius: 6,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: needsParts ? "#EF4444" : "transparent",
            }}
          >
            {needsParts && <Feather name="check" size={16} color="#FFFFFF" />}
          </View>
          <Text style={{ color: "#FFFFFF", marginLeft: 12 }}>
            I need parts for my vehicle
          </Text>
        </TouchableOpacity>

        {/* Emergency Vehicle Information */}
        <View style={{ marginBottom: 24 }}>
          <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "bold", marginBottom: 12 }}>
            Emergency Vehicle Information
          </Text>
          <View style={{ backgroundColor: "#1E293B", padding: 16, borderRadius: 12 }}>
            {/* Location Input */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#273444",
                borderRadius: 10,
                paddingHorizontal: 12,
                paddingVertical: 10,
                marginBottom: 16,
              }}
            >
              <FontAwesome5 name="map-marker-alt" size={20} color="#737373" />
              <TextInput
                placeholder="Vehicle Location"
                placeholderTextColor="#737373"
                value={location}
                onChangeText={setLocation}
                style={{
                  color: "#FFFFFF",
                  flex: 1,
                  marginLeft: 12,
                }}
              />
              <TouchableOpacity>
                <Feather name="target" size={20} color="#EF4444" />
              </TouchableOpacity>
            </View>

            {/* Vehicle Model Input */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#273444",
                borderRadius: 10,
                paddingHorizontal: 12,
                paddingVertical: 10,
              }}
            >
              <FontAwesome5 name="car" size={20} color="#737373" />
              <TextInput
                placeholder="Vehicle Model"
                placeholderTextColor="#737373"
                value={vehicleModel}
                onChangeText={setVehicleModel}
                style={{
                  color: "#FFFFFF",
                  flex: 1,
                  marginLeft: 12,
                }}
              />
            </View>
          </View>
        </View>

        {/* Book Now Button */}
        <TouchableOpacity
          style={{
            backgroundColor: "#EF4444",
            borderRadius: 10,
            paddingVertical: 14,
            marginBottom: 30,
          }}
          onPress={() => router.push("../payment/payment")}
        >
          <Text style={{ color: "#FFFFFF", textAlign: "center", fontSize: 18, fontWeight: "bold" }}>
            Book Now
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default RepairServiceScreen;
