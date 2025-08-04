require "test_helper"

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = create(:user)
  end

  test "should create user" do
    assert_difference("User.count") do
      post user_signup_url, params: { user: { username: FFaker::Internet.user_name, password: FFaker::Internet.password, phone_number: FFaker::PhoneNumber.short_phone_number } }, as: :json
    end

    assert_response :created
  end

  test "should show user" do
    get user_url(@user), as: :json
    assert_response :success
  end
end
