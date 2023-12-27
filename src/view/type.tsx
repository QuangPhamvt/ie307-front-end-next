import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
export type RootNativeStackParamList = {
  AuthView: NavigatorScreenParams<AuthStackParamList>
  MainView: NavigatorScreenParams<MainBottomTabParamList>
  EditProfileView: undefined
  UploadView: undefined
  StoryView: NavigatorScreenParams<StoryViewStackParamList>
  NewPostView: undefined
  Username: undefined
  Bio: undefined
  ChangePassword: NavigatorScreenParams<ChangePasswordStackParamList>
  NewStoryView: {
    user_id: string
    avatar: string | null
    email: string
    image?: string
    create_at?: string
  }
}
export type AuthStackParamList = {
  LogInStack: undefined
  SignUpStack: NavigatorScreenParams<SignUpStackParamList>
  ForgotStack: undefined
}
export type MainBottomTabParamList = {
  HomeView: undefined
  SearchView: NavigatorScreenParams<SearchViewStackParamList>
  UploadView: undefined
  NotificationView: undefined
  ProfileView: NavigatorScreenParams<ProfileViewStackParamList>
}
export type ChangePasswordStackParamList = {
  SendEmailChangePassword: undefined
  SendChangePassword: undefined
}
export type StoryViewStackParamList = {
  SelectStoryStack: undefined
  UploadStoryStack: undefined
}
export type SignUpStackParamList = {
  EmailStack: undefined
  ConfirmStack: undefined
  CreatePassword: undefined
  SaveLogin: undefined
}
export type SearchViewStackParamList = {
  SearchStack: undefined
  PostDetailStack: { post_id: string }
  UserDetailStack: { user_id: string }
}
export type ProfileViewStackParamList = {
  EditProfileStack: undefined
  FollowerStack: undefined
  FollowingStack: undefined
}
export type RootNativeStackViewProps<T extends keyof RootNativeStackParamList> = NativeStackScreenProps<
  RootNativeStackParamList,
  T
>
export type AuthStackProps<T extends keyof AuthStackParamList> = CompositeScreenProps<
  StackScreenProps<AuthStackParamList, T>,
  RootNativeStackViewProps<keyof RootNativeStackParamList>
>
export type MainBottomTabProps<T extends keyof MainBottomTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<MainBottomTabParamList, T>,
  RootNativeStackViewProps<keyof RootNativeStackParamList>
>
export type ChangePasswordStackProps<T extends keyof ChangePasswordStackParamList> = CompositeScreenProps<
  StackScreenProps<ChangePasswordStackParamList, T>,
  RootNativeStackViewProps<keyof RootNativeStackParamList>
>
export type StoryViewStackProps<T extends keyof StoryViewStackParamList> = CompositeScreenProps<
  StackScreenProps<StoryViewStackParamList, T>,
  RootNativeStackViewProps<keyof RootNativeStackParamList>
>
export type SignUpStackProps<T extends keyof SignUpStackParamList> = CompositeScreenProps<
  StackScreenProps<SignUpStackParamList, T>,
  AuthStackProps<keyof AuthStackParamList>
>
export type SearchViewStackProps<T extends keyof SearchViewStackParamList> = CompositeScreenProps<
  StackScreenProps<SearchViewStackParamList, T>,
  MainBottomTabProps<keyof MainBottomTabParamList>
>
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootNativeStackParamList {}
  }
}
