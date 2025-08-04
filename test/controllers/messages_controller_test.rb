require "test_helper"

class MessagesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @message = create(:message)
    @user = create(:user)
    post login_url, params: { username: @user.username, password: @user.password }, as: :json
  end
  
  test "should get index" do
    get messages_url, as: :json
    assert_response :success
  end

  test "should send message" do
    assert_difference("Message.count") do
      post send_message_url, params: { message: { content: "Hello, world!", user_id: @message.user_id, recipient_number: @message.recipient_number } }, as: :json
    end

    assert_response :created
  end

  test "should show message" do
    get message_url(@message), as: :json
    assert_response :success
  end
end
