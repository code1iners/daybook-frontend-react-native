import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useMutation } from "react-query";
import { styled } from "nativewind";
import { Ionicons } from "@expo/vector-icons";
import MainContainer from "@/components/main-container";
import { signInService } from "@/api/v1/sign-in.service";
import { useNavigation } from "@react-navigation/native";
import { NAVIGATORS, SCREEN_NAMES } from "@/constants";

export const WelcomeMessage = styled(
  Text,
  "text-4xl mb-10 tracking-widest text-center uppercase"
);
export const Container = styled(View, "mt-20");
export const Form = styled(View, "w-full gap-5");
export const SharedText = styled(Text, "tracking-widest text-gray-500");
export const SharedInput = styled(
  TextInput,
  "tracking-widest border rounded-md p-2"
);
export const ErrorText = styled(SharedText, "text-sm text-red-500 mt-2 ml-2");

interface SignInForm {
  email: string;
  password: string;
}

export default function SignInScreen() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const mutation = useMutation(signInService, {
    onError: (error, variables, context) => {
      console.warn(error);
    },
    onSuccess: (data, variables, context) => {
      console.log(data);
    },
  });

  const onSubmit = (form: SignInForm) => {
    mutation.mutate(form);
  };

  const onSignUpButtonClick = () => {
    navigation.navigate(
      NAVIGATORS.STACKS as never,
      { screen: SCREEN_NAMES.AUTH.SIGN_UP } as never
    );
  };

  return (
    <MainContainer>
      <Container>
        {/* Welcome message */}
        <WelcomeMessage>daybook</WelcomeMessage>

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
              <ErrorText className="">{errors.password.message}</ErrorText>
            )}
          </View>

          {/* Submit button */}
          <TouchableOpacity
            className="border rounded-md justify-center items-center w-full"
            onPress={handleSubmit(onSubmit)}
          >
            <Text className="p-3">로그인</Text>
          </TouchableOpacity>
        </Form>

        {/* Sign up */}
        <View className="mt-5 items-center">
          <TouchableOpacity
            className="flex-row items-center gap-1"
            onPress={onSignUpButtonClick}
          >
            <Text className="text-indigo-500 uppercase tracking-widest text-xs">
              회원가입
            </Text>
            <Ionicons
              name="open-outline"
              size={14}
              color="rgba(99, 102, 241, 1)"
            />
          </TouchableOpacity>
        </View>
      </Container>
    </MainContainer>
  );
}
