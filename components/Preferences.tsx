import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Switch, Text, View } from "react-native";

const Preferences = () => {
  const { colors, isDarkMode, toggleDarkMode } = useTheme();
  const settingStyles = createSettingsStyles(colors);
  const [isAutoSync, setIsAutoSync] = useState(true);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);

  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingStyles.section}
    >
      <Text style={settingStyles.sectionTitle}>Preferences</Text>
      <View style={settingStyles.settingItem}>
        <View style={settingStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.primary}
            style={settingStyles.settingIcon}
          >
            <Ionicons name="moon" size={18} color={"#fff"} />
          </LinearGradient>
          <Text style={settingStyles.settingText}>Dark Mode</Text>
        </View>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          thumbColor={"#fff"}
          trackColor={{ false: colors.border, true: colors.primary }}
          ios_backgroundColor={colors.border}
        />
      </View>

      <View style={settingStyles.settingItem}>
        <View style={settingStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.warning}
            style={settingStyles.settingIcon}
          >
            <Ionicons name="notifications" size={18} color={"#fff"} />
          </LinearGradient>
          <Text style={settingStyles.settingText}>Notification</Text>
        </View>
        <Switch
          value={isNotificationEnabled}
          onValueChange={() => setIsNotificationEnabled(!isNotificationEnabled)}
          thumbColor={"#fff"}
          trackColor={{ false: colors.border, true: colors.warning }}
          ios_backgroundColor={colors.border}
        />
      </View>

      <View style={settingStyles.settingItem}>
        <View style={settingStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.success}
            style={settingStyles.settingIcon}
          >
            <Ionicons name="sync" size={18} color={"#fff"} />
          </LinearGradient>
          <Text style={settingStyles.settingText}>Auto Sync</Text>
        </View>
        <Switch
          value={isAutoSync}
          onValueChange={() => {
            setIsAutoSync(!isAutoSync);
          }}
          thumbColor={"#fff"}
          trackColor={{ false: colors.border, true: colors.success }}
          ios_backgroundColor={colors.border}
        />
      </View>
    </LinearGradient>
  );
};

export default Preferences;
