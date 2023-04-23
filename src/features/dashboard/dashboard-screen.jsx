import React, { useContext, useState } from "react";
import Container from "../../components/container-component";
import { StudentContext } from "../../services/student-index";
import { AuthenticationContext } from "../../services/authentication-index";
import { TouchableOpacity, View } from "react-native";
import { Avatar, ProgressBar, RadioButton, Text } from "react-native-paper";
import {
  CardComponent,
  ProgressCard,
  StyledButton,
} from "../../components/components-index";
import colors from "../../infrastructure/themes/colors";
import { useNavigation } from "@react-navigation/native";

export default function DashboardScreen() {
  const navigation = useNavigation();
  const { students } = useContext(StudentContext);
  const { userInfo, logOutRequest } = useContext(AuthenticationContext);
  const [value, setValue] = useState("");

  // students.filter((student) => student.id_no === "2020-2787");
  const userData = {
    name: "Laurence Troy Valdez",
    committee: "Tabulation",
    position: "Under secretary",
  };

  return (
    <Container>
      <View className="space-y-4">
        <View className="flex-row justify-between">
          <View>
            <RadioButton.Group
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
            >
              <View className="flex-row items-center ">
                <RadioButton value="In" />
                <Text>Sign In</Text>
              </View>

              <View className="flex-row items-center ">
                <RadioButton value="Out" />
                <Text>Sign Out</Text>
              </View>
            </RadioButton.Group>
          </View>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Scanner", {
                status: value,
              })
            }
          >
            <StyledButton title={"Scan"} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => logOutRequest()}>
          <Text>adawawsad</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
