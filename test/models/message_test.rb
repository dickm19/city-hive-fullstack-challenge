require "test_helper"

class MessageTest < ActiveSupport::TestCase
  setup do
    @message = create(:message)
  end

  test "should be valid with valid attributes" do
    assert @message.valid?
  end

  test "should not be valid without content" do
    @message.content = nil
    assert_not @message.valid?
  end

  test "should not be valid without user" do
    @message.user = nil
    assert_not @message.valid?
  end

  test "should belong to user" do
    assert_equal @message.user, User.find(@message.user_id)
  end
end
