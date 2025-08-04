require "test_helper"

class UserTest < ActiveSupport::TestCase
  setup do
    @user = create(:user)
  end

  test "should be valid with valid attributes" do
    assert @user.valid?
  end

  test "should not be valid without a username" do
    @user.username = nil
    assert_not @user.valid?
  end

  test "should not be valid without a phone number" do
    @user.phone_number = nil
    assert_not @user.valid?
  end
end
