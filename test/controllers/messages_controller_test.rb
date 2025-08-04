require "test_helper"

class MessagesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @message = create(:message)
  end

  test "should get index" do
    get messages_url, as: :json
    assert_response :success
  end

  test "should create message" do
    assert_difference("Message.count") do
      post messages_url, params: { message: { content: "Hello, world!", user_id: @message.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show message" do
    get message_url(@message), as: :json
    assert_response :success
  end
end
