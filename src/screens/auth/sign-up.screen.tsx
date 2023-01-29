import { Text, View, TouchableOpacity } from "react-native";
import { Controller, useForm } from "react-hook-form";
import DateTimePicker from "@react-native-community/datetimepicker";
import MainContainer from "@/components/main-container";
import {
  Container,
  Form,
  SharedInput,
  SharedText,
  ErrorText,
  WelcomeMessage,
} from "@/screens/auth/sign-in.screen";

interface SignUpForm {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  birthdate: string;
}

export default function SignUpScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>();

  const onSubmit = (form: SignUpForm) => {
    console.log(form);
  };

  return (
    <MainContainer>
      <Container>
        {/* Welcome message */}
        <WelcomeMessage>join us</WelcomeMessage>

        <Form>
          {/* Username */}
          <View className="w-full">
            <SharedText className="mb-2">Email</SharedText>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "이메일을 입력해주세요.",
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <SharedInput
                  inputMode="email"
                  textContentType="emailAddress"
                  autoComplete="off"
                  autoCapitalize="none"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="이메일을 입력해주세요"
                />
              )}
            />
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          </View>

          {/* Name */}
          <View className="w-full">
            <SharedText className="mb-2">Name</SharedText>
            <Controller
              name="name"
              control={control}
              rules={{
                required: "이름을 입력해주세요.",
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <SharedInput
                  inputMode="text"
                  textContentType="name"
                  autoComplete="off"
                  autoCapitalize="none"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="이름을 입력해주세요"
                />
              )}
            />
            {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
          </View>

          {/* Password */}
          <View className="w-full">
            <SharedText className="mb-2">Password</SharedText>
            <Controller
              name="password"
              control={control}
              rules={{
                required: "비밀번호를 입력해주세요.",
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <SharedInput
                  inputMode="text"
                  secureTextEntry={true}
                  textContentType="password"
                  autoComplete="off"
                  autoCapitalize="none"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="비밀번호를 입력해주세요."
                />
              )}
            />
            {errors.password && (
              <ErrorText>{errors.password.message}</ErrorText>
            )}
          </View>

          {/* Confirm password */}
          <View className="w-full">
            <SharedText className="mb-2">Confirm Password</SharedText>
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: "비밀번호 확인을 입력해주세요.",
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <SharedInput
                  inputMode="text"
                  secureTextEntry={true}
                  textContentType="password"
                  autoComplete="off"
                  autoCapitalize="none"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="비밀번호 확인을 입력해주세요."
                />
              )}
            />
            {errors.confirmPassword && (
              <ErrorText>{errors.confirmPassword.message}</ErrorText>
            )}
          </View>

          {/* TODO Birthday date picker */}

          {/* Submit button */}
          <TouchableOpacity
            className="border rounded-md justify-center items-center w-full"
            onPress={handleSubmit(onSubmit)}
          >
            <Text className="p-3">회원가입</Text>
          </TouchableOpacity>
        </Form>
      </Container>
    </MainContainer>
  );
}
