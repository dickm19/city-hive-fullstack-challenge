require "test_helper"

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = create(:user)
  end

  test "should get index" do
    get users_url, as: :json
    assert_response :success
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

  test "should update user" do
    patch user_url(@user), params: { user: { phone_number: FFaker::PhoneNumber.short_phone_number, password: FFaker::Internet.password } }, as: :json
    assert_response :success
  end

  test "should destroy user" do
    assert_difference("User.count", -1) do
      delete user_url(@user), as: :json
    end

    assert_response :no_content
  end
end
